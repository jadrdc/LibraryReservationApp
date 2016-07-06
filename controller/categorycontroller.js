var CategorySchema=require('../models/category');


var CategoyController = function ()
{

 this.saveCategory=function(req,done)
 {
   var category= new CategorySchema();
       category.name=req.name;
       category.save(done);
  };

 this.findAllCategory=function(next)
{
CategorySchema.find({},next);
};
   this.findCategoryById=function(_id,next)
    {
         CategorySchema.findById({_id:_id},function(err,category)
        {
         next(err,category);
        });
    };

  this.removeCategory=function(id,next)
       {
             BookSchema.findOneAndRemove({_id:id},function(err,category)
            {
             next(err,category);
            });
        };
};

module.exports=CategoyController;
