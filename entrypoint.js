// only ES5 allowed in this file
'use strict';
require('babel-register')({
    "presets": ["es2015"]
});

var server = require('./server.js');
