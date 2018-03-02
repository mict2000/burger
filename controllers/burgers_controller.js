//Pull in required dependencies
var express = require('express');
var router = express.Router();

//Import model (burger.js) to use database functions
var burger = require('../models/burger.js');


router.get('/', function(req, res){
  
//grab data from burger table
  burger.selectAll(function(data){
    for(var i=0;i<data.length; i++){
      info.brgr.push(data[i]);
    }
}

//send to the index.handlebars
      res.render('index', info);
    });    
  });

//create routes and associated logic
router.post('/create', function(req, res){
  burger.insertOne([req.body.burgerInput], function(){
    res.redirect('/');
  });
});

router.put('/update/:id', function(req, res){
  burger.updateOne([req.body.devoured], [req.params.id], function(){
    res.redirect('/');
  });
});

module.exports = router;