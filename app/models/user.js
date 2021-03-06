'use strict';

var userCollection = global.nss.db.collection('users');
// var traceur = require('traceur');
// var Base = traceur.require(__dirname + '/base.js');
var bcrypt = require('bcrypt');
var Mongo = require('mongodb');
var _ = require('lodash');

class User {
  constructor(){
    this.local = {
      email: String,
      password: String
    };
    this.facebook = {
      id: String,
      token: String,
      email: String,
      displayName: String
    };
    this.twitter = {
      id: String,
      token: String,
      displayName: String,
      username: String
    };
  }

  save(fn){
    userCollection.save(this, ()=>fn());
  }

  // generating a hash
  generateHash(password){
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }

  // checking if password is valid
  validPassword(password){
      return bcrypt.compareSync(password, this.local.password);
  }

  changePassword(obj, fn){
    var isMatch = bcrypt.compareSync(obj.oldPassword, this.local.password);
    if(isMatch){
      this.local.password = this.generateHash(obj.newPassword);
      fn(null);
    }else{
      fn('err');
    }
  }

  static findByTwitterId(id, fn){
    userCollection.findOne({'twitter.id':id}, (err, user)=>{
      fn(err, user);
    });
  }

  static findByFacebookId(id, fn){
    userCollection.findOne({'facebook.id':id}, (err, user)=>{
      fn(err, user);
    });
  }

  static findByEmail(email, fn){
    userCollection.findOne({'local.email': email}, (err, user)=>{
      fn(err, user);
    });
  }

    static findById(id, fn){
    if(typeof id === 'string'){
      if(id.length !== 24){fn(null); return;}
      id = Mongo.ObjectID(id);
    }
    if(!(id instanceof Mongo.ObjectID)){fn(null); return;}

    userCollection.findOne({_id:id}, (e,u)=>{
      if(u){
        u = _.create(User.prototype, u);
        fn(null, u);
      }else{
        fn(e,u);
      }
    });
  }
}

module.exports = User;
