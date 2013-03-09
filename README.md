# JsPyConf 2013 Web Sitesi

## Kurulum

```sh
$ git clone git://github.com/jspyconf/website.git
$ cd website/
$ virtualenv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
$ cp settings.py.dist settings.py
$ python app.py
$ firefox http://127.0.0.1:5000/
```

## Çeviriler

Eğer yeni çeviriler eklendiyse:

```sh
$ make extract
```

Yeni çevirilecek kısmları mevcut dillerin `messages.po` dosyasına eklemek için:

```sh
$ make update
```

Çevirileri yaptıktan sonra derleyip, kullanılabilir hale getirmek için:

```sh
$ make compile
```

Bütün işlemleri tek seferde yapmak için:

```sh
$ make
```
