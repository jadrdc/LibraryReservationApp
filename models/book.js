var mongose=require("mongoose");
var bcrypt= require("bcrypt-nodejs");
var Schema=mongose.Schema;


var BookSchema = new Schema({
   ISBN :{ type : String, unique : true},
   title : String,
   authors : String,
   published_date :Date,
   loan_time : Number,
   stock_amount : Number,
   category :{ type : Schema.Types.ObjectId , ref : 'Category'}},
   left_books:Number
});

 module.exports=mongose.model('Book',BookSchema);
