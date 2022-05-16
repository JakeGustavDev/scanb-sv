const { useColors } = require('debug/src/browser');
var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/signin', function(req, res, next) {
  res.render('pages/signin');
});

router.post('/signin', function(req, res, next) {
  
});

router.get('/signup', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/logout', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
