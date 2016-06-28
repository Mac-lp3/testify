'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    let stream = fs.createReadStream(__dirname + '/../public/template.html');

    stream.pipe(res);

});

module.exports = router;
