'use strict';

var traceur = require('traceur');
var Poll = traceur.require(__dirname + '/../models/poll.js');
// var User = traceur.require(__dirname + '/../models/user.js');

exports.index = (req, res)=>{
  Poll.findAllPolls(polls=>{
    var mostRecentPoll = polls[(polls.length)-1];
    var mostRecentAnswers = mostRecentPoll.answers;
    var userId = req.user._id;
    res.render('polling/index', {userId: userId, polls:polls, poll: mostRecentPoll, answers: mostRecentAnswers, title: 'Polling Home'});
  });
};

exports.createAnswer = (req, res)=>{
  console.log('req.user-----');
  console.log(req.user);
  // User.findById(req.user, user=>{
  //   console.log(user);
  // });
};
