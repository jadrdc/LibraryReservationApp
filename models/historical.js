var mongose=require("mongoose");
var bcrypt= require("bcrypt-nodejs");
var Schema=mongose.Schema;
var Book = require('./book');
var User=require('./user');

var HistoricalSchema = new Schema ({
  book : [Book],
  user : [User],
   rented_date : Date ,
  returning_date : Date
});

module.exports=mongose.model('Historial',HistoricalSchema);
