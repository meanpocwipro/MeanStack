var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/test';

mongoose.connect(dburl);

mongoose.connection.on('connected',function(){
  console.log('mongoose connected to '+dburl);
});
mongoose.connection.on('disconnected',function(){
  console.log('mongoose disconnected ');
});
mongoose.connection.on('error',function(err){
  console.log('mongoose connection error '+error);
});

process.on('SIGINT',function(){
  mongoose.connection.close(function(){
    console.log('mongoose disconnected through app termination');
    process.exit(0);
  })
})

require('./data.model.js');
