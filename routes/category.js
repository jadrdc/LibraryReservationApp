var router = require('express').Router();
var CategoryController=require('../controller/categorycontroller');

router.get('/category',function(req,res,next)
{

 if(req.isAuthenticated()   &&   req.user.adminuser==true ){
   res.render('./category/addCategory');

}
 else
{

    res.redirect('/login');
}
});



router.post('/category',function(req,res,next)
{

var categoryManager= new CategoryController();
 categoryManager.saveCategory(req.body,function(err,category)
{
  if(err) {
  req.flash('error','No se ha podido agregar el libro,intentelo mas tarde');
         res.redirect('/category');
       }
       else {
         res.redirect('/Category');
       }



})

});




module.exports=router;
