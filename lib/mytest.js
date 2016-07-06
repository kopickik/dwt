'use strict';

var text = require('./modules/simple.js');
var moment = require('moment');
var result = text('capital markets');

console.log(result + ' ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
