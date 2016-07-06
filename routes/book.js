var router = require('express').Router();
var BookController=require('../controller/bookcontroller');
var CategoyController=require('../controller/categorycontroller');


router.get('/addBook',function(req,res,next)
{
 if(req.isAuthenticated()   &&   req.user.adminuser==true ){


     var categoryManager= new CategoyController();
          categoryManager.findAllCategory(function(err,categories)
        {

             res.render('./books/addBook',{'error' : req.flash('error'), categories :categories      });

        });



}
 else
{

    res.redirect('/login');
}
});


router.post('/addBook',function(req,res,next)
{
  if(req.isAuthenticated()  &&   req.user.adminuser==true   ){
  var bookManager= new BookController();
     bookManager.saveBook(req.body.isbn ,req.body.title ,req.body.authors ,req.body.published_date ,req.body.loan_time ,req.body.stock_amount ,req.body.category,
       function(err,book){
        if(err)  req.flash('error','No se ha podido agregar el libro,intentelo mas tarde');
                res.redirect('/addBook');
     });

 }  else {
     res.redirect('/login');
   }
});



router.get('/detailbooks',function(req,resp)
{
  if(req.isAuthenticated()  &&   req.user.adminuser==true   ){
  var bookManager= new BookController();
      bookManager.findAllBooks(function(err,books)
      {
              resp.render('./books/detailbook',{books :books});
      });
    }
    else
    {
        resp.redirect('/login');

    }


});


router.post('/removebook',function (req,resp)
{

    var bookManager= new BookController();
    bookManager.removeBook(req.body._id,function(err,req){
      resp.redirect('back');
    });
});





router.post('/updateBook',function(req,res)
{

var bookManager= new BookController();
  bookManager.updateBook(req.body.isbn,req.body.title,req.body.authors,
                          req.body.published_date,req.body.category,req.body.stock_amount
                          ,req.body.loan_time,function(err,book){

    res.redirect('/detailbooks');
  });
  });




router.get('/buybooks',function(req,res)
{
  var bookManager= new BookController();
       bookManager.findAllBooks(function(err,books)
     {


  res.render('./accounts/buybooks',{books:books});

     })
});























module.exports=router;
