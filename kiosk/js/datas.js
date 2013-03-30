// Localization
var text = {
	'en': {
		'schedule': 'Schedule',
		'souvenir': 'Souvenir',
		'live': 'Live',
		'day': 'Day',
		'now': 'Now',
		'send': 'Send',
		'close': 'Close',
		'your_email': 'Your E-mail',
		'are_you_sure': 'Are you sure? Your photo will be saved.'
	},
	'tr': {
		'schedule': 'Programı',
		'souvenir': 'Hatırası',
		'live': 'Canlı',
		'day': 'Gün',
		'now': 'Şuan',
		'send': 'Gönder',
		'close': 'Kapat',
		'your_email': 'E-posta Adresiniz',
		'are_you_sure': 'FOTOĞRAFI KAYDETMEK İSTİYOR MUSUNUZ?'
	}
}

// Calendar section
var presentations = 
[
    {
      "start": "1364628600",
      "saloon": 1,
      "end": "1364630400",
      "avatar": "/static/img/organizators/cihann.jpg",
      "title": "A\u00e7\u0131l\u0131\u015f Konu\u015fmas\u0131",
      "is_sponsor": false,
      "company": "Edfor",
      "day": 1,
      "name": "Cihan Okyay"
    },
    {
      "start": "1364630400",
      "saloon": 1,
      "end": "1364633100",
      "avatar": "/static/img/speakers/byk.jpg",
      "title": "Standardized real-time events with EventSource",
      "is_sponsor": false,
      "company": "Disqus",
      "day": 1,
      "name": "Burak Yi\u011fit Kaya"
    },
    {
      "start": "1364634000",
      "saloon": 1,
      "end": "1364636700",
      "avatar": "/static/img/speakers/emrahayanoglu.jpg",
      "title": "Python ve Ruby ile Ger\u00e7ek Zamanl\u0131 Web Uygulamalar\u0131",
      "is_sponsor": false,
      "company": "STM",
      "day": 1,
      "name": "Emrah Ayano\u011flu"
    },
    {
      "start": "1364637600",
      "saloon": 1,
      "end": "1364640300",
      "avatar": "/static/img/speakers/jamesrosen.jpg",
      "title": "Tools for JavaScript Development Happiness",
      "is_sponsor": false,
      "company": "Zendesk",
      "day": 1,
      "name": "James A. Rosen"
    },
    {
      "start": "1364643900",
      "saloon": 1,
      "end": "1364645700",
      "avatar": "/static/img/speakers/kadirpekel.jpg",
      "title": "Python ile Bir De\u011fi\u015fim Hikayesi",
      "is_sponsor": true,
      "company": "MetGlobal",
      "day": 1,
      "name": "Kadir Pekel"
    },
    {
      "start": "1364646600",
      "saloon": 1,
      "end": "1364649300",
      "avatar": "/static/img/speakers/timbranyen.jpg",
      "title": "The Holy Grail: Client &amp; Server",
      "is_sponsor": false,
      "company": "Matchbox",
      "day": 1,
      "name": "Tim Branyen"
    },
    {
      "start": "1364650200",
      "saloon": 1,
      "end": "1364652900",
      "avatar": "/static/img/speakers/nathan.jpg",
      "title": "Mindful Simplicity - Building a Modern Single Page App",
      "is_sponsor": false,
      "company": "Zendesk",
      "day": 1,
      "name": "Nathan Rapheld"
    },
    {
      "start": "1364653800",
      "saloon": 1,
      "end": "1364656500",
      "avatar": "/static/img/speakers/ozgur_vatansever.jpg",
      "title": "Python Optimizasyon ve Performans T\u00fcyolar\u0131",
      "is_sponsor": false,
      "company": "Markafoni",
      "day": 1,
      "name": "\u00d6zg\u00fcr Vatansever"
    },
    {
      "start": "1364630400",
      "saloon": 2,
      "end": "1364635800",
      "avatar": "",
      "title": "TBA",
      "is_sponsor": false,
      "company": "Koding",
      "day": 1,
      "name": "Devrim Ya\u015far"
    },
    {
      "start": "1364636700",
      "saloon": 2,
      "end": "1364640300",
      "avatar": "/static/img/speakers/altan.jpg",
      "title": "JavaScript ve PhoneGap ile Mobil Uygulama Geli\u015ftirmek",
      "is_sponsor": false,
      "company": "Yemeksepeti",
      "day": 1,
      "name": "Altan Y\u0131lmaz"
    },
    {
      "start": "1364644800",
      "saloon": 2,
      "end": "1364650200",
      "avatar": "/static/img/speakers/serdar.jpg",
      "title": "Deneyimli Programc\u0131lar i\u00e7in Django'ya Giri\u015f",
      "is_sponsor": false,
      "company": "Markafoni",
      "day": 1,
      "name": "Serdar Dalg\u0131\u00e7"
    },
    {
      "start": "1364652000",
      "saloon": 2,
      "end": "1364657400",
      "avatar": "/static/img/speakers/taylanpince.jpg",
      "title": "Neredeyim Ben? Django ve Lokasyon Servisleri",
      "is_sponsor": false,
      "company": "Hipo",
      "day": 1,
      "name": "Taylan Pince"
    },
    {
      "start": "1364713200",
      "saloon": 1,
      "end": "1364715900",
      "avatar": "/static/img/speakers/fatiherikli.jpg",
      "title": "Django ORM Optimizasyonu",
      "is_sponsor": false,
      "company": "MetGlobal",
      "day": 2,
      "name": "Fatih Erikli"
    },
    {
      "start": "1364716800",
      "saloon": 1,
      "end": "1364719500",
      "avatar": "/static/img/speakers/tayfun.jpg",
      "title": "API Design and Implementation Using MongoDB and Tastypie",
      "is_sponsor": false,
      "company": "Markafoni",
      "day": 2,
      "name": "Tayfun \u015een"
    },
    {
      "start": "1364720400",
      "saloon": 1,
      "end": "1364723100",
      "avatar": "/static/img/speakers/kenneth.jpg",
      "title": "Python for Humans",
      "is_sponsor": false,
      "company": "Heroku",
      "day": 2,
      "name": "Kenneth Reitz"
    },
    {
      "start": "1364726700",
      "saloon": 1,
      "end": "1364728500",
      "avatar": "",
      "title": "TBA",
      "is_sponsor": true,
      "company": "Koding",
      "day": 2,
      "name": "Devrim Ya\u015far"
    },
    {
      "start": "1364729400",
      "saloon": 1,
      "end": "1364732100",
      "avatar": "/static/img/speakers/vigo.jpg",
      "title": "Merhaba Sinatra!",
      "is_sponsor": false,
      "company": "Fontronik",
      "day": 2,
      "name": "U\u011fur \u00d6zy\u0131lmazel"
    },
    {
      "start": "1364733000",
      "saloon": 1,
      "end": "1364735700",
      "avatar": "/static/img/speakers/chaals.jpg",
      "title": "Programming with Yandex tools",
      "is_sponsor": false,
      "company": "Yandex",
      "day": 2,
      "name": "Charles McCathieNevile"
    },
    {
      "start": "1364736600",
      "saloon": 1,
      "end": "1364739300",
      "avatar": "/static/img/speakers/osmanyuksel.jpg",
      "title": "JavaScript Web Uygulamalar\u0131 ile Arama Motorlar\u0131n\u0131n Aras\u0131ndaki Husumeti Gidermek",
      "is_sponsor": false,
      "company": "Sonsuzd\u00f6ng\u00fc",
      "day": 2,
      "name": "Osman Y\u00fcksel"
    },
    {
      "start": "1364713200",
      "saloon": 2,
      "end": "1364718600",
      "avatar": "/static/img/speakers/muratcorlu.jpg",
      "title": "JavaScript Sourcemaps 101",
      "is_sponsor": false,
      "company": "sahibinden.com",
      "day": 2,
      "name": "Murat \u00c7orlu"
    },
    {
      "start": "1364727600",
      "saloon": 2,
      "end": "1364733000",
      "avatar": "",
      "title": "TBA",
      "is_sponsor": false,
      "company": "Koding",
      "day": 2,
      "name": "Chris Thorn"
    },
    {
      "start": "1364734800",
      "saloon": 2,
      "end": "1364737500",
      "avatar": "/static/img/speakers/kadirpekel.jpg",
      "title": "Kurtulur muyum bunal\u0131mdan, hamakta sallansam",
      "is_sponsor": false,
      "company": "MetGlobal",
      "day": 2,
      "name": "Kadir Pekel"
    }
  ]

function compare(a,b) {
  if (a.start < b.start)
     return -1;
  if (a.start > b.start)
    return 1;
  return 0;
}

presentations.sort(compare);