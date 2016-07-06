var moongose=require('mongoose');
var Schema=moongose.Schema;


var CategorySchema=new Schema(
  {
    name :String
  }
);

module.exports=moongose.model('Category',CategorySchema);
