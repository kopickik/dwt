'use strict';

var Harness = new Siesta.Harness.Browser.ExtJS();

Harness.configure({
    title: 'My Siesta Tests!'
});

Harness.start({
    group: 'Unit tests',
    hostPageUrl: '../index.html?unittest',
    items: [
        'unit-tests/unit1.t.js'
    ]
}, {
    group: 'Application tests',
    items: []
});
