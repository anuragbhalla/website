default:: extract update compile

extract::
	@pybabel extract -F babel.cfg -o translations/messages.pot .
update::
	@pybabel update -i translations/messages.pot -d translations
compile::
	@pybabel compile -f -d translations

css::
	@cd html && git pull && cp css/main.css ../static/css/main.css && cd ..
	@echo main.css güncellendi.
