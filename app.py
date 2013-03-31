# coding: utf-8

import re
import uuid

from datetime import datetime

from flask import Flask, jsonify, request, render_template
from flaskext.babel import Babel
from flaskext.uploads import (UploadSet, configure_uploads, IMAGES,
                              UploadNotAllowed)

from decorators import cached
from errors import ImproperlyConfigured
from filters import humanize
from schedule import schedule
try:
    from settings import DEBUG, PORT, DEFAULT_LOCALE
except ImportError:
    msg = "Kurulum için lütfen README.md belgesini okuyun."
    raise ImproperlyConfigured(msg)
from utils import get_statuses

UPLOADED_PHOTOS_DEST = 'static/uploads'

app = Flask(__name__)
app.jinja_env.add_extension("jinja2htmlcompress.HTMLCompress")
app.jinja_env.filters["humanize"] = humanize
babel = Babel(app)

photos = UploadSet("photos", IMAGES,
                   default_dest=lambda l: UPLOADED_PHOTOS_DEST)
configure_uploads(app, photos)


@babel.localeselector
def get_locale():
    return request.accept_languages.best_match(("tr", "en"),
                                               default=DEFAULT_LOCALE)


on_event = datetime.utcnow().month == 3 and datetime.utcnow().day in (30, 31)


@app.route("/", methods=["GET"])
@cached(timeout=60 * 45,
        key="on-event/%s" if on_event else "before-event/%s")
def index():
    def day():
        if datetime.utcnow().month == 3:
            day = {30: 1, 31: 2}
            try:
                return day[datetime.utcnow().day]
            except KeyError:
                return 0
        return 0

    def current_talk():
        now = datetime.utcnow().strftime("%s")
        for talk in schedule:
            if talk["start"] <= now <= talk["end"]:
                return talk
        return None  # Explicit is better than implicit.

    return render_template("index.html", statuses=get_statuses(),
                           locale=get_locale(), on_event=on_event,
                           day=day(), current_talk=current_talk())


@app.route("/schedule.json", methods=["GET"])
@cached(timeout=60 * 60 * 5)
def schedule_():
    return jsonify(schedule=schedule)


@app.route("/upload", methods=["POST"])
def upload():
    email = request.form.get("email")
    data_to_64 = re.search(r"base64,(.*)", request.form.get("file")).group(1)
    decoded = data_to_64.decode("base64")
    path = "static/uploads/{}_{}.jpg".format(email, uuid.uuid1())
    with open(path, "w") as fobj:
        fobj.write(decoded)
    return jsonify(message=u"Görsel yüklendi.")

if __name__ == "__main__":
    import sys

    try:
        port = int(sys.argv[1])
    except (IndexError, ValueError):
        port = PORT
    app.run(port=port, debug=DEBUG)
