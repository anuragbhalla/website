# coding: utf-8

import requests
from requests_oauthlib import OAuth1

from settings import twitter


def get_statuses():
    params = ("screen_name={screen_name}&count=10&exclude_replies=true&"
              "include_entities=false&include_rts=false&trim_user=true")
    url_fmt = "{url}{resource}?{params}".format
    url = url_fmt(
        url=twitter.get("api_url"),
        resource="statuses/user_timeline.json",
        params=params.format(screen_name=twitter.get("screen_name"))
    )

    auth = OAuth1(
        twitter.get("consumer_key"),
        twitter.get("consumer_secret"),
        twitter.get("access_token"),
        twitter.get("access_token_secret"),
        signature_type="auth_header",
    )
    response = requests.get(url, auth=auth)
    return response.json()
