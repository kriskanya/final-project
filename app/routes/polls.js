'use strict';

var traceur = require('traceur');
var Poll = traceur.require(__dirname + '/../models/poll.js');

exports.index = (req, res)=>{
  Poll.findAllPolls(polls=>{
    console.log('console log polls');
    console.log(polls[(polls.length)-1].answers);
    res.render('polling/index', {polls:polls, title: 'Polling Home'});
  });
};
