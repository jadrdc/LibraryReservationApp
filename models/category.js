var moongose=require('mongose');
var Schema=mongose.Schema;


var CategorySchema=new Schema(
  {
    name :String
  }
);

module.exports=mongose.model('Category',CategorySchema);
