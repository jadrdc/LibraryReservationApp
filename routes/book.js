var router = require('express').Router();
var BookController=require('../controller/bookcontroller');
var x=0;

router.get('/addBook',function(req,res,next)
{

    if(req.isAuthenticated()){
  res.render('./books/addBook',{'error' : req.flash('error')});
} else
{

    res.redirect('/login');
}
});


router.post('/addBook',function(req,res,next)
{
  if(req.isAuthenticated()){
  var bookManager= new BookController();
     bookManager.saveBook(req.body.isbn ,req.body.title ,req.body.authors ,req.body.published_date ,req.body.loan_time ,req.body.stock_amount ,req.body.category,
       function(err,book){
         console.log(err);
        if(err)  req.flash('error','No se ha podido agregar el libro,intentelo mas tarde');
                res.redirect('/addBook');
     });
   }
   else {
     res.redirect('./accounts/login');
   }
});




module.exports=router;
