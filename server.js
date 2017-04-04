'use strict';

const apiai = require('apiai');
const express = require('express');
const bodyParser = require('body-parser');

const SkypeBot = require('./skypebot');
const SkypeBotConfig = require('./skypebotconfig');


const REST_PORT = (process.env.PORT || 5000);

const botConfig = new SkypeBotConfig(
    "725e3e5c57f94dfebdfa12d81527fa38",
    "en",
    "355a4537-d750-4064-a4b4-45416960b2e5",
    "iWvLUFBSdHbRUE9xAfn9tf0" 
);

const skypeBot = new SkypeBot(botConfig);

// console timestamps
require('console-stamp')(console, 'yyyy.mm.dd HH:MM:ss.l');

const app = express();
app.use(bodyParser.json());

app.post('/chat', skypeBot.botService.listen());

app.listen(REST_PORT, function () {
    console.log('Rest service ready on port ' + REST_PORT);
});