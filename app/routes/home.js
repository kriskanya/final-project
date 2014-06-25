'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Pollitic: Index'});
};

exports.newIndex = (req, res)=>{
  res.render('home/newIndex', {title: 'New Index'});
};

exports.lookup = (req, res, next)=>{
    res.locals.user = req.user;

    console.log('RESSS LOCALS USER');
    console.log(req.user);

    next();
};

exports.bounce = (req, res, next)=>{
  if(res.locals.user){
    next();
  }else{
    res.redirect('/');
  }
};
