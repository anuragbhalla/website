# coding: utf-8

from flask import Flask, jsonify, request, render_template
from flaskext.babel import Babel

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


app = Flask(__name__)
app.jinja_env.add_extension("jinja2htmlcompress.HTMLCompress")
app.jinja_env.filters["humanize"] = humanize
babel = Babel(app)


@babel.localeselector
def get_locale():
    return request.accept_languages.best_match(("tr", "en"),
                                               default=DEFAULT_LOCALE)


@app.route("/", methods=["GET"])
@cached(timeout=60 * 60)
def index():
    return render_template("index.html", statuses=get_statuses(),
                           locale=get_locale())


@app.route("/schedule.json", methods=["GET"])
@cached(timeout=60 * 60 * 5)
def schedule_():
    return jsonify(schedule=schedule)

if __name__ == "__main__":
    import sys

    try:
        port = int(sys.argv[1])
    except (IndexError, ValueError):
        port = PORT
    app.run(port=port, debug=DEBUG)
