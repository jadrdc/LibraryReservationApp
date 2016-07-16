var moongose=require('moongose');
var Schema= moongose.Schema;

var ShoppingCart = new Schema(
{
   user :{ type : Schema.Types.ObjectId , ref : 'User'}
   order_date {type : Date}

});
