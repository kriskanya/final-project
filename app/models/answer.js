var answerCollection = global.nss.db.collection('answers');
var traceur = require('traceur');
var Base = traceur.require(__dirname + '/base.js');

class Answer{
  constructor(obj){
    this.userId = obj.userId;
    this.pollId = obj.pollId;
    this.answers = obj.answers;
  }

  static create(obj, fn){
    var temp = {};
    temp.userId = obj.userId;
    temp.pollId = obj.pollId;
    temp.answers = obj.answers;
    var answer = new Answer(temp);
    answerCollection.save(answer, ()=>fn(answer));
  }

  static findAll(fn){
    Base.findAll(answerCollection, Answer, allAnswers=>{
      fn(allAnswers);
    });
  }

  static findById(id, fn){
    Base.findById(id, answerCollection, Answer, fn);
  }

  save(fn){
    answerCollection.save(this, ()=>{
      fn();
    });
  }
}
