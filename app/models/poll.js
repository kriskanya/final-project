/* jshint unused:false */

var pollCollection = global.nss.db.collection('polls');
var traceur = require('traceur');
var Base = traceur.require(__dirname + '/base.js');

class Poll{
  constructor(obj){
    this.title = obj.title;
    this.tags = obj.tags;
    this.question = obj.question;
    this.answers = obj.answers;
    this.date = obj.date;
  }

  static create(obj, fn){
    var temp = {};
    temp.title = obj.pollTitle;
    temp.tags = obj.tags;
    temp.question = obj.question;
    temp.answers = obj.answers;
    temp.date = new Date();
    var poll = new Poll(temp);
    pollCollection.save(poll, ()=>fn(poll));
  }

  static findAllPolls(fn){
    Base.findAll(pollCollection, Poll, allPolls=>{
      fn(allPolls);
    });
  }

  static findById(id, fn){
    Base.findById(id, pollCollection, Poll, fn);
  }

  save(fn){
    pollCollection.save(this, ()=>{
      fn();
    });
  }
}

module.exports = Poll;
