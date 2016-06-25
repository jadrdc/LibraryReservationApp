/*Import of Libraries*/
var express=require('express');
var bodyParser= require('body-parser');
var ejs=require('ejs');
var ejsmate=require('ejs-mate');
var session=require('express-session');
var cookieParser=require('cookie-parser');
var flash=require('express-flash');

// User routing
var userrouting=require('./routes/user');

/*Global Configuration Values*/
var parameter=require('./global/parameters')

/*App Object*/
var app=express();
//Add MiddleWare
app.engine('ejs',ejsmate);
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(session(
  {
  resave:true,
  saveUnitialized:true,
  secret:parameter.secretkey
}));

app.use(flash());


app.use(userrouting);




// Global Connection to Databaseññ
parameter.mongoose.connect(parameter.database,function(err)
{
  if(err) {
  console.log('Unable to Connect due to '+err)
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
