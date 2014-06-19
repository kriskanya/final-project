'use strict';

var traceur = require('traceur');
// var Answer = traceur.require(__dirname + '/../models/answer.js');
var Poll = traceur.require(__dirname + '/../models/poll.js');

exports.createAnswer = (req, res)=>{
  // Poll.findById(req.body.pollId, poll=>{  //find the poll in the db

  //grab the pollid, grab the poll, add one to the count based on the answer that they had, then send it back to Mongo

    //var userAnswers = {};    //blank object
    // userAnswers.userId = req.user._id;
    //userAnswers.answers = req.body.answers;  //push the req.body data into the new object
    //userAnswers.pollId = req.body.pollId;

    Poll.findById(req.body.pollId, p=>{
      p.addResponse(req.body.answers, (poll)=>res.send(poll));  //add a response
    });  //grab the poll object
    //redirect to poll results

    // userAnswers.pollId = poll._id;

    // poll.userAnswers = userAnswers;    //add the userAnswer object to the poll object in the db

    // Answer.create(userAnswers, answer=>{
    //   answer.save(()=>res.send({}));
    // });
  // });
};
