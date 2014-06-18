'use strict';

var traceur = require('traceur');
var Poll = traceur.require(__dirname + '/../models/poll.js');

exports.new = (req, res)=>{
  res.render('polling/new', {title: 'Create New Poll'});
};

exports.create = (req, res)=>{
  Poll.create(req.body, poll=>{
    res.redirect('/', {poll:poll});
  });
};
