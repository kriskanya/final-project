'use strict';

var traceur = require('traceur');
var Poll = traceur.require(__dirname + '/../models/poll.js');

exports.index = (req, res)=>{
  Poll.findAllPolls(polls=>{
    var mostRecentPoll = polls[(polls.length)-1];
    var mostRecentAnswers = mostRecentPoll.answers;
    res.render('polling/index', {polls:polls, poll: mostRecentPoll, answers: mostRecentAnswers, title: 'Polling Home'});
  });
};
