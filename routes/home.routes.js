var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next) {
    res.status(200).json({
          message: 'Success',
          obj: {'user':"ABC"}
      })
  });

  module.exports = router;