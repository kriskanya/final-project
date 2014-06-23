'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.newIndex = (req, res)=>{
  res.render('home/newIndex', {title: 'New Index'});
};
