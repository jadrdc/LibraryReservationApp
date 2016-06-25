var mongose=require("mongoose");
var bcrypt= require("bcrypt-nodejs");
var Schema=mongose.Schema;


var BookSchema = new Schema({
   ISBN : String,
   title : String,
   authors : String,
   published_date :Date,
   loan_time : Number,
   stock_amount : Number,
   category :String
});

 module.exports=mongose.model('Book',BookSchema);
