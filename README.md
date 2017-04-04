# apiai-skype-bot

Before you start the bot you need install the dependencies using 
`npm install`.

Make sure you define the following environment variables: APIAI_ACCESS_TOKEN, APIAI_LANG (should be 'en'), APP_ID and APP_SECRET 
(the final two will be provided by the Microsoft Bot Framework).

Note: if deploying direct to Heroku you will be prompted supply these, however 
if you are deploying to Azure you will need to create these as keys in the application settings.

You can start the bot locally with `node app.js`. By default the server will
be listening on port 5000.
So service endpoint will be "https://localhost.com:5000/chat"

Web.config included to allow deployment to Azure. App.json allows for direct deployment to Heroku. 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
