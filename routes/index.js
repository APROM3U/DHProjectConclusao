const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST */
router.post('/', function(req, res, next) {
  const {body} = req;
  res.render('index', { title: 'Express', body });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Cadastro' });
});

module.exports = router;
