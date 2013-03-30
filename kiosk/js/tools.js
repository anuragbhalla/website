function validateEmail(email) 
{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

(function($)
{
	
	$.kargax = function(options)
	{
		options = $.extend({
			xhr: function()
			{
				xhr = new window.XMLHttpRequest();

				//Upload progress
				xhr.upload.onprogress = function(evt)
				{
					if (evt.lengthComputable)
						if(options.uploading)
							options.uploading(evt);
				}

				//Download progress
				xhr.onprogress = function(evt)
				{
					if (evt.lengthComputable)
						if(options.downloading)
							options.downloading(evt);
				}

				return xhr;
			}
		}, options);
		return $.ajax(options);
	}

})(jQuery);

(function () {
	var blockContextMenu, myElement;

	blockContextMenu = function (evt) {
		evt.preventDefault();
	};

	window = window;
	window.addEventListener('contextmenu', blockContextMenu);
})();