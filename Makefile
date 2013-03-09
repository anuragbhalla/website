default:: extract update compile

extract::
	@pybabel extract -F babel.cfg -o translations/messages.pot .
update::
	@pybabel update -i translations/messages.pot -d translations
compile::
	@pybabel compile -f -d translations
