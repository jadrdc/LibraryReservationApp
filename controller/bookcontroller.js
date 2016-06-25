var BookSchema=require('../models/book');


var BookController = function ()
{

 this.saveUser=function(ISBN ,title ,authors ,published_date ,loan_time ,stock_amount ,category)
 {
   var book= new Book();
     book.ISBN=ISBN;
     book.title=title;
     book.authors=authors;
     book.published_date=published_date;
     book.loan_time=loan_time;
     book.stock_amount=stock_amount;
     book.category=category;
     book.save();
  };
  this.findBookByISBN=function(identification,next)
   {
        BookSchema.findOne({ISBN:ISBN},function(err,book)
       {
        next(err,book);
       });
   }

   this.findBookById=function(_id,next)
    {
         BookSchema.findById({_id:_id},function(err,book)
        {
         next(err,book);
        });
    }

  this.removeUser=function()
       {
             BookSchema.findOneAndRemove(({ISBN:ISBN},function(err,book)
            {
             next(err,book);
            });
        }
};
module.exports=BookController;
