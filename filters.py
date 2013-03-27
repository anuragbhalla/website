# coding: utf-8

from datetime import datetime

from flaskext.babel import gettext


def humanize(value):
    if isinstance(value, basestring):
        value = datetime.strptime(value, "%a %b %d %H:%M:%S +0000 %Y").date()
    return naturalday(value)


def naturalday(value):
    today = datetime.utcnow().date()
    delta = value - today
    if delta.days == 0:
        return gettext(u"bugün")
    elif delta.days == -1:
        return gettext(u"dün")
    elif delta.days < -1:
        return gettext(u"%(days)d gün önce", days=abs(delta.days))
    return value
