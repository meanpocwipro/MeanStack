require('./api/data/db.js');
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var routes = require("./api/routes")
var app = express();

app.set('port',5000)
app.listen(app.get('port'),function(){
  console.log("listening on port "+app.get('port'));
});

app.use(function(req,res,next){
  console.log(req.method,req.url);
  next();
})
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',routes);
