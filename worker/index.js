var CronJob = require('cron').CronJob;
const fetchGithub = require('./task/fetch-github.js');

var job = new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');
job.start();