var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send({msg:'hello',a:1})
});

router.get('/post11', function(req, res, next) {
  res.send({msg:'hello',a:1})
});

router.use('/user', require('./user'));
router.use('/test',require('./test'))

router.all('*', function(req, res, next) {
  next(createError(404,'그런 api 없어요1'));
});

module.exports = router;
