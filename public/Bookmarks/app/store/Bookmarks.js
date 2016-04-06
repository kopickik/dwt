Ext.define('Bookmarks.store.Bookmarks', {
    extend: 'Ext.data.Store',

    alias: 'store.bookmarks',

    fields: [{
            name: 'name', type: 'auto'
        }, {
            name: 'url', type: 'string',
            convert: function(value) { return '<a href="' + value + '" target="_blank">' + value + '</a>'}
        }
    ],

    proxy: {
        type: 'rest',
        api: {
            read: '/api/bookmarks'
        },
        headers: {
            'Authorization': 'Bearer {token}'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            
        }
    }
});
