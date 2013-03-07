import requests

from requests_oauthlib import OAuth1
from werkzeug.contrib.cache import SimpleCache

from settings import twitter

cache = SimpleCache()


def get_statuses():
    statuses = cache.get("statuses")
    if statuses is not None:
        return statuses
    config = ("screen_name=jspyconf&count=5&exclude_replies=true&"
              "include_entities=false&include_rts=false&trim_user=true")
    url = "{}{}?{}".format(twitter.get("api_url"),
                           "statuses/user_timeline.json", config)

    auth = OAuth1(twitter.get("consumer_key"), twitter.get("consumer_secret"),
                  twitter.get("access_token"), twitter.get("access_token_secret"),
                  signature_type='auth_header')
    response = requests.get(url, auth=auth)
    statuses = cache.set("statuses", response.json(), timeout=5 * 60)
    return statuses
