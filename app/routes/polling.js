'use strict';

exports.index = (req, res)=>{
  res.render('polling/index', {title: 'Polling Home'});
};
