var mongoose = require('mongoose');
var Data = mongoose.model('Data');
var ObjectId = require('mongodb').ObjectId;

module.exports.getData = function(req,res){

    var offset = 0;
    var count =1;
    if(req.query && req.query.offset){
      offset = parseInt(req.query.offset,10)
    }
    if(req.query && req.query.count){
      count = parseInt(req.query.count,10)
    }

    Data
      .find()
      .skip(offset)
      .limit(count)
      .exec(function(err,data){
         console.log("data length ",data.length);
         res
           .json(data);
      });
  }

  module.exports.getDataOne = function(req,res){

    }

    module.exports.postDataOne = function(req,res){


  }
