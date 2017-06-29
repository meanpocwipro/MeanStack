var express = require('express');
var router = express.Router();
var ctrlData = require('../controllers/controllers.js');

router
    .route('/json')
    .get(ctrlData.getData);

router
    .route('/json/:id')
    .get(ctrlData.getDataOne);

router
    .route('/json/new')
    .post(ctrlData.postDataOne);


module.exports = router;
