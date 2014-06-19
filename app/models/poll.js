/* jshint unused:false */

var pollCollection = global.nss.db.collection('polls');
var traceur = require('traceur');
var Base = traceur.require(__dirname + '/base.js');

class Poll{
  constructor(obj){
    this.title = obj.title;
    this.tags = obj.tags;
    this.question = obj.question;
    this.answers = obj.answers;  //this is the admin's answers
    this.date = obj.date;
  }

  static create(obj, fn){
    var temp = {};
    temp.title = obj.pollTitle;
    temp.tags = obj.tags;
    temp.question = obj.question;

    temp.answers = {};
    for(var i=0;i<obj.answers.length;i++){
      temp.answers[obj.answers[i]] = 0;
    }

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

  addResponse(input, fn){
    //input is an array
    console.log('input-----');
    console.log(input);
    console.log(this);

    for(var i = 0; i < input.length; i++){
      this.answers[input[i]]++;
    }
    console.log('thisss');
    console.log(this);
    pollCollection.save(this, ()=>fn(this));
  }

  // instace method addResponse(answers){
  //   for(var i=0;i<answers.length;i++){
  //       this.answers.answers[i]++
  // }
  // this.save()
  // })
  save(fn){
    pollCollection.save(this, ()=>{
      fn();
    });
  }
}

module.exports = Poll;
