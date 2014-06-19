'use strict';

var traceur = require('traceur');
var Poll = traceur.require(__dirname + '/../models/poll.js');
// var Answer = traceur.require(__dirname + '/../models/answer.js');

exports.index = (req, res)=>{
  Poll.findAllPolls(polls=>{
    var mostRecentPoll = polls[(polls.length)-1];
    var mostRecentAnswers = mostRecentPoll.answers;
    var userId = req.user._id;
    res.render('polling/index', {userId: userId, polls:polls, poll: mostRecentPoll, answers: mostRecentAnswers, title: 'Polling Home'});
  });
};

// exports.createAnswer = (req, res)=>{
//   Poll.findById(req.body.pollId, poll=>{  //find the poll in the db
//
//     var userAnswers = {};    //blank object
//     userAnswers.userId = req.user._id;
//     userAnswers.answers = req.body.answers;  //push the req.body data into the new object
//     userAnswers.pollId = poll._id;
//     poll.userAnswers = userAnswers;    //add the userAnswer object to the poll object in the db
//
//     Answer.create(userAnswers, answer=>{
//       answer.save(()=>res.send({}));
//       // poll.save(()=>res.send({}));  //save in the db, send back an empty object - remember that the redirect must be done in the browser code for an ajax call
//     });
//   });
// };

exports.show = (req, res)=>{
  Poll.findById(req.params.pollId, poll=>{
    console.log('req.params...');
    console.log(req.params);
    var currentPoll = poll;
    var userAnswers = poll.userAnswers.answers;
    res.render('polling/show', {poll: currentPoll, userAnswers: userAnswers, title: 'Poll Show Page'});
  });
};
