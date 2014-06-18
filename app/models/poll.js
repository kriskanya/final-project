var pollCollection = global.nss.db.collection('polls');

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
}

module.exports = Poll;
