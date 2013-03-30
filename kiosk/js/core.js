var app = angular.module('app', []);

// Add active class when user press the element 
app.directive('addActive', function()
{
	 return function(scope, element, attr)
	 {
		$(element).hammer({});
		$(element).bind('touch', function(e){ $(this).addClass('active'); });
		$(element).bind('release', function(e){ $(this).removeClass('active'); });
		$(element).bind('drag', function(e){ $(this).removeClass('active'); });
	 }
});

app.directive('scrollView', function()
{
	return function(scope, element, attr, $rootScope)
	{
		$(element).hammer({});
		var t = attr['scrollView'] || 'v';
		var marginType = (t == 'h'? 'marginLeft': 'marginTop');
		var initialValue = parseInt($(element).css(marginType));
		
		var initMargin = parseInt($(element).css(marginType));

		// Set the old y position on touch
		var oldPos = 0;
		$(element).bind('touch', function(e) { oldPos = (t == 'h'? e.gesture.deltaX: e.gesture.deltaY); });
		
		// Sroll the view ondrag 
		$(element).bind('drag', function(e)
		{
			var scrollSize = $(element).children().eq(0)[(t == 'h'? 'outerWidth': 'outerHeight')](true)*($(element).children().length)-$(this).parent()[(t == 'h'? 'width': 'height')]()+(t == 'h'? 5: 100);

			d = (t == 'h'? e.gesture.deltaX: e.gesture.deltaY)-oldPos;
			oldPos = (t == 'h'? e.gesture.deltaX: e.gesture.deltaY);
			currentPos = parseInt($(e.currentTarget).css(marginType))+d;

			if (currentPos<=initMargin)
			{
				if (currentPos>=-scrollSize)
				{
					$(e.currentTarget).css(marginType, currentPos);
				}
				else
				{
					$(e.currentTarget).css(marginType, -scrollSize);
				}
			}
			else
			{
				$(e.currentTarget).css(marginType, initMargin);
			}

		});
	}
});

app.directive('tabButton', function()
{
	return function(scope, element, attr)
	{
		$(element).hammer({});
		$(element).bind('release', function(e) { $(this).addClass('active').siblings().removeClass('active'); });
	}
});

//
// Filters
// 
app.filter('capitalize', function()
{
	return function(input, scope)
	{
		return input.toUpperCase();
	}
});

app.filter('defaultAvatar', function()
{
	return function(input, scope)
	{
		return (input==''? '/static/img/bg/default-picture.png':input)
	}
});

//
// Controllers
//


// Controller
app.controller('appCtr', function($scope, $rootScope, $timeout)
{
	var currentInput = {};
	$('input').on('focus', function()
	{
		currentInput = $(this);
		$('.keyboard').addClass('active');
	});

	$('.keyboard .row div').hammer({})
	.bind('touch', function(e) { currentInput.focus(); })
	.bind('release', function(e)
	{
		currentInput.focus();
		var startPos = currentInput[0].selectionStart;
		var endPos = currentInput[0].selectionEnd;

		if ($(this).hasClass('delete'))
		{
			var text1 = currentInput.val().slice(0, startPos-(startPos == endPos? 1: 0));
			var text2 = currentInput.val().slice(endPos);
			currentInput.val(text1+$(this).find('span').text()+text2);
			currentInput[0].selectionStart = startPos-(startPos == endPos? 1: 0);
			currentInput[0].selectionEnd = startPos-(startPos == endPos? 1: 0);
		}
		else
		{
			var text1 = currentInput.val().slice(0, startPos);
			var text2 = currentInput.val().slice(endPos);
			currentInput.val(text1+$(this).find('span').text()+text2);
			currentInput[0].selectionStart = startPos+1;
			currentInput[0].selectionEnd = startPos+1;
		}

		e.preventDefault();
	});

	// calculate current day
	var days = [(new Date('3 30 2013')).getTime(),  (new Date('3 31 2013')).getTime()];
	$rootScope.currentDay = 0;
	var calculateCurrentDay = function()
	{
		angular.forEach(days, function(el, i)
		{
			if (Date.now()>el)
			{
				$rootScope.currentDay = i+1;
			}
		});
		$timeout(calculateCurrentDay, 6000);
	}
	calculateCurrentDay();
});

// Main controller
app.controller('mainCtr', function($scope, $rootScope, $timeout)
{

	// Reload the app on idl
	var delay = 60000;
	var reloadTimerFunction = function()
	{
		if ($('#cube').hasClass('show-top') || $('#cube').hasClass('show-bottom'))
		{
			$scope.goHome();
			$rootScope.closeModal();
			$rootScope.recapture();
		}
		reloadTimer = $timeout(reloadTimerFunction, delay);
	}
	var reloadTimer = $timeout(reloadTimerFunction, delay);

	$('.container, .overlay').hammer({}).bind('touch', function()
	{
		$timeout.cancel(reloadTimer);
		reloadTimer = $timeout(reloadTimerFunction, delay);
	});

	// Set default language
	$rootScope.text = text.tr;
	$scope.changeLanguage = function($event, lang)
	{
		$rootScope.text = text[lang];
		var button = $($event.currentTarget);
		button.addClass('active').siblings().removeClass('active');
	}

	// Program list on live bar
	$scope.presentations = angular.copy(presentations);
	$scope.toggleProgramList = function($event)
	{
		var index = 0;
		angular.forEach($scope.presentations, function(item, i)
		{
			if (item.start*1000<Date.now() && item.end*1000>Date.now() && item.day == $rootScope.currentDay)
			{
				item.now = "active";
				index = i;
			}
			else if(item.end<Date.now())
				item.now = "";
		});
		$event.stopPropagation();

		$('.program-list').find('.wrap ul').css('margin-left', -index*443)
		$('.program-list').toggleClass('active');
	}

	$('#cube').hammer({}).bind('touch', function()
	{
		$('.program-list').removeClass('active');
	});

	// Navigations
	$scope.openCalendar = function()
	{
		$('#cube').addClass('show-bottom');
	}

	$scope.openSnapshot = function()
	{
		$('#cube').addClass('show-top');
	}

	$rootScope.goHome = function()
	{
		$('#cube').removeClass('show-top');
		$('#cube').removeClass('show-bottom');
	}
});

// Snapshot section controller
app.controller('snapshotCtr', function($scope, $rootScope, $timeout)
{
	var ctx, localMediaStream, video, canvas, currentPath;
	var paths = [];

	$scope.startStream = function()
	{
		// Start Video Stream
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		window.URL = window.URL || window.webkitURL;
		navigator.getUserMedia({video:true}, function (stream)
		{
			video.attr('src', window.URL.createObjectURL(stream));
			localMediaStream = stream;
		});
	}

	$scope.$on('$includeContentLoaded', function()
	{
		canvas = $('#snap-canvas, #draw-canvas');
		ctx = canvas[0].getContext('2d');
		video = $('#vid');

		$scope.startStream();

		paper.setup('draw-canvas');
		with (paper)
		{
			var tool = new Tool();
			var bg = new Raster(canvas[0]);
			bg.position = new Point(1920/2, 1080/2);

			// Define a mousedown and mousedrag handler
			tool.onMouseDown = function(event)
			{
				currentPath = new Path();
				paths.push(currentPath);
				
				currentPath.strokeColor = $scope.currentColor;
				currentPath.strokeWidth = $scope.penSize;
				currentPath.strokeCap = 'round';
				currentPath.strokeJoin = 'round';

				currentPath.add(event.point);

				$('div.color-palette').addClass('hide');
				$('div.pencil-size ').addClass('hide');
			}
	
			tool.onMouseDrag = function(event)
			{
				currentPath.add(event.point);
			}
		}
	});

	// Draw Tools initial values
	$scope.colors = [
		{color:'#ffffff'},
		{color:'#111111', 'class': 'selected'},
		{color:'#fabe28'},
		{color:'#f38630'},
		{color:'#b3cc57'},
		{color:'#7cac43'},
		{color:'#00ffff'},
		{color:'#509ae5'},
		{color:'#9061c2'},
		{color:'#624284'},
		{color:'#ff3d7f'},
		{color:'#ff4e50'},
		{color:'#e82c2a'}
	] 
	$scope.penSize = 10;
	$scope.currentColor = '#111111';

	// Capture
	$scope.capture = function()
	{
		ctx.drawImage(video[0], 0, -360, 1920, 1440);
		video.hide();
		canvas.show();
		paper.view.draw();

		// Hide Capture Button
		$('#capture-btn').addClass('hide');
		$('.framing').addClass('hide');
		
		// Show Draw Tools
		$('.draw-state').removeClass('hide');
	}

	$rootScope.recapture = $scope.recapture = function(element)
	{
		video.show();
		canvas.hide();

		// Hide Capture Button
		$('#capture-btn').removeClass('hide');
		$('.framing').removeClass('hide');

		// Hide Draw Tools
		$('.draw-state').addClass('hide');
		$('.draw-tools').addClass('hide');

		$scope.clearDraw();
	}

	$scope.toggleColorPane = function()
	{
		$('div.color-palette').toggleClass('hide');
		$('div.pencil-size ').addClass('hide');
	}

	$scope.togglePenPane = function()
	{
		$('div.color-palette').addClass('hide');
		$('div.pencil-size ').toggleClass('hide');
	}

	$scope.selectColor = function(color)
	{

		angular.forEach($scope.colors, function(color)
		{
			color.class="";
		});

		color.class=(color.color=="#ffffff"? 'dark selected': 'selected');
		$scope.currentColor = color.color;

		$('.size-slider').removeClass('dark');
		if (color.color == '#ffffff')
		{
			$('.size-slider').addClass('dark');
		}
	}

	$scope.clearDraw = function()
	{
		angular.forEach(paths, function(path)
		{
			path.remove();
		});
		paper.view.draw();
	}

	$scope.resizePen = function($event)
	{
		var handle = $($event.currentTarget).find('.handle');
		var move = 44+$event.gesture.center.pageX-$('.size-slider').offset().left-handle.width()/2;
		if (move<44) move = 44; else if(move>250) move = 250;
		var width = (1+((move-44)*1.5/220))*20;
		handle.css('left', move);
		handle.css({'width':width, 'height':width});
		$scope.penSize = width*0.5;
	}

	$scope.openModal = function()
	{
		$('.overlay').removeClass('hide');
		$('.overlay').find('.modal').animate({'top': 550}, 300);
	}

	$rootScope.uploadPhoto = function()
	{
		if(validateEmail($('input[name=email]').val()))
		{
			$('input[name=email]').removeAttr('style');
			$('.form').addClass('hide');
			$('.photo-sending').removeClass('hide');

			// Upload photo
			var fData = new window.FormData();
			fData.append('file', canvas[1].toDataURL('image/jpeg'));
			fData.append('email', $('input[name=email]').val());
			
			$.kargax({
				type: 'POST',
				url: 'http://jspyconf.org/upload',
				processData: false,
				contentType: false,
				data: fData,
				success: function(data)
				{
					$('.photo-sending').addClass('hide');
					$('.alert').removeClass('hide').css('opacity', 0).animate({opacity: 1}, 700);
					$timeout(function(){
						$rootScope.closeModal();
						$scope.recapture();
					}, 2000);
				},
				error: function()
				{
					$rootScope.closeModal();
				}
			});

			$('.keyboard').removeClass('active');
		}
		else
		{
			$('input[name=email]').css({border: '2px solid #FF0000', width: 446, height:61});
		}
	}

	$rootScope.closeModal = function()
	{
		$('.overlay').find('.modal').animate({'top': -550}, 300, function(){ $('.overlay').addClass('hide'); $('.form').removeClass('hide'); $('.photo-sending').addClass('hide'); $('.alert').addClass('hide'); });
		$('input[name=email]').val('').removeAttr('style');
		$('.keyboard').removeClass('active');
	}

});

// Controller
app.controller('calendarCtr', function($scope, $rootScope)
{
	$scope.presentations = presentations;
	var nowIndex;

	// Aniamtion end event
	$('#cube').bind('webkitTransitionEnd', function()
	{
		// Set event status
		if ($(this).hasClass('show-bottom'))
		{
			nowIndex = 0;
			angular.forEach(presentations, function(item, i)
			{
				if (item.start*1000<Date.now() && item.end*1000>Date.now() && $rootScope.currentDay === item.day)
				{
					console.log(item.day);
					item.now = "now";
					if (nowIndex != 0)
						nowIndex = i;
				}
				else if(item.end*1000<Date.now())
					item.now = "past";

			});
			$('.timeline').stop().animate({'marginTop': -nowIndex*120+176}, 500);
		}
		else
		{
			angular.forEach(presentations, function(item)
			{
				item.now = "";
			});
		}
		$scope.$digest();
	});

	$scope.gotoDay = function(day)
	{
		var index;
		$(presentations).each(function(i, item)
		{
			if (day==item.day)
			{
				index = i;
				return false;
			}
		});
		$('.timeline').stop().animate({'marginTop': -(day==0? nowIndex: index)*120+176}, 500);
	}
});

