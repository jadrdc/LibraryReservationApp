var router = require('express').Router();
var BookController=require('../controller/bookcontroller');
var x=0;

router.get('/addBook',function(req,res,next)
{

/*    if(req.isAuthenticated()){
} else
{

    res.redirect('/login');
}*/  res.render('./books/addBook',{'error' : req.flash('error')});

});


router.post('/addBook',function(req,res,next)
{
/*  if(req.isAuthenticated()){*/
  var bookManager= new BookController();
     bookManager.saveBook(req.body.isbn ,req.body.title ,req.body.authors ,req.body.published_date ,req.body.loan_time ,req.body.stock_amount ,req.body.category,
       function(err,book){
         console.log(err);
        if(err)  req.flash('error','No se ha podido agregar el libro,intentelo mas tarde');
                res.redirect('/addBook');
     });

/* }  else {
     res.redirect('./accounts/login');
   }*/
});



router.get('/detailbooks',function(req,resp)
{

  var bookManager= new BookController();
      bookManager.findAllBooks(function(err,books)
      {
              resp.render('./books/detailbook',{books :books});
      });


});


router.post('/removebook',function (req,resp)
{

    var bookManager= new BookController();
    bookManager.removeBook(req.body._id,function(err,req){
      res.redirect('back');
    });
});




module.exports=router;
