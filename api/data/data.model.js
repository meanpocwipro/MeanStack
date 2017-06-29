var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  role : String
});

mongoose.model('Data',dataSchema);
