var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if(err){
    console.log(err);
    return;
  }

  const db = client.db("stock_market_db");

  app.get("/market_stock", function(req, res){
    const marketStockCollection = db.collection("market_stock");
    marketStockCollection.find().toArray(function(err, marketStock){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(marketStock);
    });
  })

  app.post("/market_stock", function(req, res){

    const marketStockCollection = db.collection("market_stock");
    const stockToSave = req.body;

    marketStockCollection.save(stockToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      console.log("Saved to DB!");

      res.status(201);
      res.json(stockToSave);
    })
  });

});

module.exports = app;
