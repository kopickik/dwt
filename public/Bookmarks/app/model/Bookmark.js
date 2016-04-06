Ext.define('Bookmark', {
    extend: 'Ext.data.Model',

    fields: [{
            name: 'name', type: 'auto'
        }, {
            name: 'url', type: 'string',
            convert: function(value) { return '<a href="' + value + '" target="_blank">' + value + '</a>' }
        }
    ]
});
