let db = require('./src/config/dbConnection');

db.on("error" , console.log.bind(console, 'DB connection error'));
db.once("open" , ()=>{
  console.log("DB connection successfully!");
});

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var umlclassRouter = require('./routes/UMLclass');
var umlassociationRouter = require('./routes/UMLassociation');
var virtualworldRouter = require('./routes/VirtualWorld');

var app = express();

/**
 * CORS configuration.
*/
var cors = require("cors");
// app.use((req, res, next) => {
// 	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//     res.header("Access-Control-Allow-Origin", "*");
// 	//Quais são os métodos que a conexão pode realizar na API
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//     app.use(cors());
//     next();
// });
var corsOptions = {
  // origin: 'http://metasee-virtualworld.herokuapp.com/',
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(usersRouter);
app.use(umlclassRouter);
app.use(umlassociationRouter);
app.use(virtualworldRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
