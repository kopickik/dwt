// only ES5 allowed in this file
'use strict';
var babel = require('babel-core');
require('babel-register')({
    "presets": ["es2015"]
});

var server = require('./server.js');
