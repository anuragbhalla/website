# coding: utf-8

from datetime import datetime


def str_to_timestamp(date_str, day):
    if day == 1:
        dt = "2013-03-30"
    elif day == 2:
        dt = "2013-03-31"
    else:
        raise ValueError
    return datetime.strptime("{:s} {:s}".format(dt, date_str),
                             "%Y-%m-%d %H:%M").strftime("%s")

schedule = [
    {
        "avatar": "/static/img/organizators/cihann.jpg",
        "name": u"Cihan Okyay",
        "title": u"Açılış Konuşması",
        "company": u"Edfor",
        "start": str_to_timestamp("09:30", day=1),
        "end": str_to_timestamp("10:00", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/byk.jpg",
        "name": u"Burak Yiğit Kaya",
        "title": u"Standardized real-time events with EventSource",
        "company": u"Disqus",
        "start": str_to_timestamp("10:00", day=1),
        "end": str_to_timestamp("10:45", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/emrahayanoglu.jpg",
        "name": u"Emrah Ayanoğlu",
        "title": u"Python ve Ruby ile Gerçek Zamanlı Web Uygulamaları",
        "company": u"STM",
        "start": str_to_timestamp("11:00", day=1),
        "end": str_to_timestamp("11:45", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/jamesrosen.jpg",
        "name": u"James A. Rosen",
        "title": u"Tools for JavaScript Development Happiness",
        "company": u"Zendesk",
        "start": str_to_timestamp("12:00", day=1),
        "end": str_to_timestamp("12:45", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/kadirpekel.jpg",
        "name": u"Kadir Pekel",
        "title": u"Python ile Bir Değişim Hikayesi",
        "company": u"MetGlobal",
        "start": str_to_timestamp("13:45", day=1),
        "end": str_to_timestamp("14:15", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": True
    },
    {
        "avatar": "/static/img/speakers/timbranyen.jpg",
        "name": u"Tim Branyen",
        "title": u"The Holy Grail: Client &amp; Server",
        "company": u"Matchbox",
        "start": str_to_timestamp("14:30", day=1),
        "end": str_to_timestamp("15:15", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/nathan.jpg",
        "name": u"Nathan Rapheld",
        "title": u"Mindful Simplicity - Building a Modern Single Page App",
        "company": u"Zendesk",
        "start": str_to_timestamp("15:30", day=1),
        "end": str_to_timestamp("16:15", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/ozgur_vatansever.jpg",
        "name": u"Özgür Vatansever",
        "title": u"Python Optimizasyon ve Performans Tüyoları",
        "company": u"Markafoni",
        "start": str_to_timestamp("16:30", day=1),
        "end": str_to_timestamp("17:15", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "",
        "name": u"Devrim Yaşar",
        "title": u"TBA",
        "company": u"Koding",
        "start": str_to_timestamp("10:00", day=1),
        "end": str_to_timestamp("11:30", day=1),
        "day": 1,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/altan.jpg",
        "name": u"Altan Yılmaz",
        "title": u"JavaScript ve PhoneGap ile Mobil Uygulama Geliştirmek",
        "company": u"Yemeksepeti",
        "start": str_to_timestamp("11:45", day=1),
        "end": str_to_timestamp("12:45", day=1),
        "day": 1,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/serdar.jpg",
        "name": u"Serdar Dalgıç",
        "title": u"Deneyimli Programcılar için Django'ya Giriş",
        "company": u"Markafoni",
        "start": str_to_timestamp("14:00", day=1),
        "end": str_to_timestamp("15:30", day=1),
        "day": 1,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/taylanpince.jpg",
        "name": u"Taylan Pince",
        "title": u"Neredeyim Ben? Django ve Lokasyon Servisleri",
        "company": u"Hipo",
        "start": str_to_timestamp("16:00", day=1),
        "end": str_to_timestamp("17:30", day=1),
        "day": 1,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/fatiherikli.jpg",
        "name": u"Fatih Erikli",
        "title": u"Django ORM Optimizasyonu",
        "company": u"MetGlobal",
        "start": str_to_timestamp("10:00", day=2),
        "end": str_to_timestamp("10:45", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/tayfun.jpg",
        "name": u"Tayfun Şen",
        "title": u"API Design and Implementation Using MongoDB and Tastypie",
        "company": u"Markafoni",
        "start": str_to_timestamp("11:00", day=2),
        "end": str_to_timestamp("11:45", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/kenneth.jpg",
        "name": u"Kenneth Reitz",
        "title": u"Python for Humans",
        "company": u"Heroku",
        "start": str_to_timestamp("12:00", day=2),
        "end": str_to_timestamp("12:45", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "",
        "name": u"Devrim Yaşar",
        "title": u"TBA",
        "company": u"Koding",
        "start": str_to_timestamp("13:45", day=2),
        "end": str_to_timestamp("14:15", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": True
    },
    {
        "avatar": "/static/img/speakers/vigo.jpg",
        "name": u"Uğur Özyılmazel",
        "title": u"Merhaba Sinatra!",
        "company": u"Fontronik",
        "start": str_to_timestamp("14:30", day=2),
        "end": str_to_timestamp("15:15", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/chaals.jpg",
        "name": u"Charles McCathieNevile",
        "title": u"Programming with Yandex tools",
        "company": u"Yandex",
        "start": str_to_timestamp("15:30", day=2),
        "end": str_to_timestamp("16:15", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/osmanyuksel.jpg",
        "name": u"Osman Yüksel",
        "title": u"JavaScript Web Uygulamaları ile Arama Motorlarının Arasındaki Husumeti Gidermek",
        "company": u"Sonsuzdöngü",
        "start": str_to_timestamp("16:30", day=2),
        "end": str_to_timestamp("17:15", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/muratcorlu.jpg",
        "name": u"Murat Çorlu",
        "title": u"JavaScript Sourcemaps 101",
        "company": u"sahibinden.com",
        "start": str_to_timestamp("10:00", day=2),
        "end": str_to_timestamp("11:30", day=2),
        "day": 2,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "",
        "name": u"Chris Thorn",
        "title": u"TBA",
        "company": u"Koding",
        "start": str_to_timestamp("14:00", day=2),
        "end": str_to_timestamp("15:30", day=2),
        "day": 2,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/kadirpekel.jpg",
        "name": u"Kadir Pekel",
        "title": u"Kurtulur muyum bunalımdan, hamakta sallansam",
        "company": u"MetGlobal",
        "start": str_to_timestamp("16:00", day=2),
        "end": str_to_timestamp("16:45", day=2),
        "day": 2,
        "saloon": 2,
        "is_sponsor": False
    },
]
