var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Espirita.xyz', author: 'Leandro Cesar' });
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre | Espirita.xyz', author: 'Leandro Cesar' });
});


module.exports = router;
