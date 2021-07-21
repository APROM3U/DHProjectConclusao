const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/todosProdutos', function(req, res, next) {
  res.render('todosProdutos', { title: 'Produtos' });
});

module.exports = router;
