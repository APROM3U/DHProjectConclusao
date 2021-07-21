const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Cadastro' });
});

module.exports = router;
