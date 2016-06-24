/*Import of Libraries*/
var express=require('express');
var requesthandler= require('body-parser');
var ejs=require('ejs');
var ejsmate=require('ejs-mate');
// User routing
var userrouting=require('./routes/user');

/*Global Configuration Values*/
var parameter=require('./global/parameters')

/*App Object*/
var app=express();

//Add Routes to App
app.use(userrouting);
app.engine('ejs',ejsmate);
app.set('view engine','ejs');









// Global Connection to Database
parameter.mongoose.connect(parameter.database,function(err)
{
  if(err) {
  console.log('Unable to Connect due to '+parameter.database)
  }
  else {

    console.log('Connected')
  }
});




app.listen(parameter.port,function(err)
{
  if(err)throw err;
  	console.log("The Server is Running");
});
