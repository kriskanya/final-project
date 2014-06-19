'use strict';

var traceur = require('traceur');
var Answer = traceur.require(__dirname + '/../models/answer.js');
var Poll = traceur.require(__dirname + '/../models/poll.js');

exports.createAnswer = (req, res)=>{
  Poll.findById(req.body.pollId, poll=>{  //find the poll in the db

    var userAnswers = {};    //blank object
    userAnswers.userId = req.user._id;
    userAnswers.answers = req.body.answers;  //push the req.body data into the new object
    userAnswers.pollId = poll._id;
    // poll.userAnswers = userAnswers;    //add the userAnswer object to the poll object in the db

    Answer.create(userAnswers, answer=>{
      answer.save(()=>res.send({}));
    });
  });
};
