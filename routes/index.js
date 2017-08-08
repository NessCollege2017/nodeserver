var express = require('express');
var router = express.Router();

/* GET form page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Welcome home!'});
});

router.post("/", function(req, res){
  var bodyParams = req.body;

  res.json(bodyParams);
})

router.get('/api', function(req, res){
  res.json({result: 'ApiResult'});
})

router.get('/hodor', function(req, res) {
  var q = req.query;
  print(q);
  res.render('hodor', {name:'hodor', friend:'aria', title:'hodor'});
});

module.exports = router;
