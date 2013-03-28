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
        "name": "Cihan Okyay",
        "title": "Açılış Konuşması",
        "company": "Edfor",
        "start": str_to_timestamp("09:30", day=1),
        "end": str_to_timestamp("10:00", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/byk.jpg",
        "name": "Burak Yiğit Kaya",
        "title": "Standardized real-time events with EventSource",
        "company": "Disqus",
        "start": str_to_timestamp("10:00", day=1),
        "end": str_to_timestamp("10:45", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/emrahayanoglu.jpg",
        "name": "Emrah Ayanoğlu",
        "title": "Python ve Ruby ile Gerçek Zamanlı Web Uygulamaları",
        "company": "STM",
        "start": str_to_timestamp("11:00", day=1),
        "end": str_to_timestamp("11:45", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/kenneth.jpg",
        "name": "Kenneth Reitz",
        "title": "Python for Humans",
        "company": "Heroku",
        "start": str_to_timestamp("12:00", day=1),
        "end": str_to_timestamp("12:45", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/kadirpekel.jpg",
        "name": "Kadir Pekel",
        "title": "Python ile Bir Değişim Hikayesi",
        "company": "MetGlobal",
        "start": str_to_timestamp("13:45", day=1),
        "end": str_to_timestamp("14:15", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": True
    },
    {
        "avatar": "/static/img/speakers/timbranyen.jpg",
        "name": "Tim Branyen",
        "title": "The Holy Grail: Client &amp; Server",
        "company": "Matchbox",
        "start": str_to_timestamp("14:30", day=1),
        "end": str_to_timestamp("15:15", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/nathan.jpg",
        "name": "Nathan Rapheld",
        "title": "Mindful Simplicity - Building a Modern Single Page App",
        "company": "Zendesk",
        "start": str_to_timestamp("15:30", day=1),
        "end": str_to_timestamp("16:15", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/ozgur_vatansever.jpg",
        "name": "Özgür Vatansever",
        "title": "Python Optimizasyon ve Performans Tüyoları",
        "company": "Markafoni",
        "start": str_to_timestamp("16:30", day=1),
        "end": str_to_timestamp("17:15", day=1),
        "day": 1,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "",
        "name": "Devrim Yaşar",
        "title": "TBA",
        "company": "Koding",
        "start": str_to_timestamp("10:00", day=1),
        "end": str_to_timestamp("11:30", day=1),
        "day": 1,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/altan.jpg",
        "name": "Altan Yılmaz",
        "title": "JavaScript ve PhoneGap ile Mobil Uygulama Geliştirmek",
        "company": "Yemeksepeti",
        "start": str_to_timestamp("11:45", day=1),
        "end": str_to_timestamp("12:45", day=1),
        "day": 1,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/serdar.jpg",
        "name": "Serdar Dalgıç",
        "title": "Deneyimli Programcılar için Django'ya Giriş",
        "company": "Markafoni",
        "start": str_to_timestamp("14:00", day=1),
        "end": str_to_timestamp("15:30", day=1),
        "day": 1,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/taylanpince.jpg",
        "name": "Taylan Pince",
        "title": "Konum Bazlı Veri Nasıl Saklanır, Aranır ve Görselleştirilir?",
        "company": "Hipo",
        "start": str_to_timestamp("16:00", day=1),
        "end": str_to_timestamp("17:30", day=1),
        "day": 1,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/fatiherikli.jpg",
        "name": "Fatih Erikli",
        "title": "Django ORM Optimizasyonu",
        "company": "MetGlobal",
        "start": str_to_timestamp("10:00", day=2),
        "end": str_to_timestamp("10:45", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/tayfun.jpg",
        "name": "Tayfun Şen",
        "title": "API Design and Implementation Using MongoDB and Tastypie",
        "company": "Markafoni",
        "start": str_to_timestamp("11:00", day=2),
        "end": str_to_timestamp("11:45", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/jamesrosen.jpg",
        "name": "James A. Rosen",
        "title": "JavaScript Tools for Developer Happiness",
        "company": "Zendesk",
        "start": str_to_timestamp("12:00", day=2),
        "end": str_to_timestamp("12:45", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "",
        "name": "Devrim Yaşar",
        "title": "TBA",
        "company": "Koding",
        "start": str_to_timestamp("13:45", day=2),
        "end": str_to_timestamp("14:15", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": True
    },
    {
        "avatar": "/static/img/speakers/vigo.jpg",
        "name": "Uğur Özyılmazel",
        "title": "Merhaba Sinatra!",
        "company": "Fontronik",
        "start": str_to_timestamp("14:30", day=2),
        "end": str_to_timestamp("15:15", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/chaals.jpg",
        "name": "Charles McCathieNevile",
        "title": "Programming with Yandex tools",
        "company": "Yandex",
        "start": str_to_timestamp("15:30", day=2),
        "end": str_to_timestamp("16:15", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/osmanyuksel.jpg",
        "name": "Osman Yüksel",
        "title": "JavaScript Web Uygulamaları ile Arama Motorlarının Arasındaki Husumeti Gidermek",
        "company": "Sonsuzdöngü",
        "start": str_to_timestamp("16:30", day=2),
        "end": str_to_timestamp("17:15", day=2),
        "day": 2,
        "saloon": 1,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/muratcorlu.jpg",
        "name": "Murat Çorlu",
        "title": "JavaScript Sourcemaps 101",
        "company": "sahibinden.com",
        "start": str_to_timestamp("10:00", day=2),
        "end": str_to_timestamp("11:30", day=2),
        "day": 2,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "",
        "name": "Chris Thorn",
        "title": "TBA",
        "company": "Koding",
        "start": str_to_timestamp("14:00", day=2),
        "end": str_to_timestamp("15:30", day=2),
        "day": 2,
        "saloon": 2,
        "is_sponsor": False
    },
    {
        "avatar": "/static/img/speakers/kadirpekel.jpg",
        "name": "Kadir Pekel",
        "title": "Kurtulur muyum bunalımdan, hamakta sallansam",
        "company": "MetGlobal",
        "start": str_to_timestamp("16:00", day=2),
        "end": str_to_timestamp("16:45", day=2),
        "day": 2,
        "saloon": 2,
        "is_sponsor": False
    },
]
