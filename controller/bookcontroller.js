var BookSchema=require('../models/book');


var BookController = function ()
{

 this.saveBook=function(ISBN ,title ,authors ,published_date ,loan_time ,stock_amount ,category,done)
 {
   var book= new BookSchema();
     book.ISBN=ISBN;
     book.title=title;
     book.authors=authors;
     book.published_date=published_date;
     book.loan_time=loan_time;
     book.stock_amount=stock_amount;
     book.category=category;
     book.save(done);
  };
  this.findBookByISBN=function(identification,next)
   {
        BookSchema.findOne({ISBN:ISBN},function(err,book)
       {
        next(err,book);
       });
   };

this.findAllBooks=function(next)
{
BookSchema.find({},next);
};





this.updateBook=function(isbn,title,authors,published_date,category,stock_amount,loan_time,next)
{


  BookSchema.findOneAndUpdate({ISBN :isbn}, {isbn : isbn  ,title : title ,authors : authors ,published_date : published_date ,category : category ,stock_amount : stock_amount,loan_time : loan_time} ,{upsert:false},next);


};


   this.findBookById=function(_id,next)
    {
         BookSchema.findById({_id:_id},function(err,book)
        {
         next(err,book);
        });
    };

  this.removeBook=function(ISBN,next)
       {
             BookSchema.findOneAndRemove({ISBN:ISBN},function(err,book)
            {
             next(err,book);
            });
        };
};

module.exports=BookController;
