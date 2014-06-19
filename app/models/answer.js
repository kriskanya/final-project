var answerCollection = global.nss.db.collection('answers');
var traceur = require('traceur');
var Base = traceur.require(__dirname + '/base.js');
var Mongo = require('mongodb');
var _ = require('lodash');

class Answer{
  constructor(obj){
    this.userId = obj.userId;
    this.pollId = obj.pollId;
    this.answers = obj.answers;
  }

  static create(obj, fn){
    var temp = {};
    temp.userId = obj.userId;
    temp.pollId = Mongo.ObjectID(obj.pollId);
    temp.answers = obj.answers;
    var answer = new Answer(temp);
    answerCollection.save(answer, ()=>fn(answer));
  }

  static findAnswersByPollId(obj, fn){
    obj = Mongo.ObjectID(obj);
    console.log('find poll by id');
    console.log(obj);
    answerCollection.find({pollId:obj}).toArray((e, objs)=>{
      objs = objs.map(o=>_.create(Answer.prototype, o));
      console.log('objs');
      console.log(objs);

      fn(objs);
    });
  }



  // collection.find({userId:userId}).toArray((e,objs)=>{
  //   objs = objs.map(o=>_.create(model.prototype, o));
  //   fn(objs);

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

module.exports = Answer;
