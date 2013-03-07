from flask import Flask, render_template

from utils import get_statuses

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", statuses=get_statuses())

if __name__ == "__main__":
    app.run(debug=True)
