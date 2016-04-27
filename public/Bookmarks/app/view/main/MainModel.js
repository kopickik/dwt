/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Bookmarks.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: ['MyCustomProxy', 'MyPagingStore', 'Bookmarks.lib.RestException'],

    data: {
        name: 'Bookmarks',
        loremIpsum: '<p>Eum id scripta lucilius, ad corrumpit inciderint vituperatoribus pri. Quo nonumes perfecto te, agam ullum percipitur eos ex, te tation detracto mandamus vix. Animal mentitum has ea. Eum eu mazim dicit principes, pro ad amet melius placerat. An sed ancillae invidunt conceptam. Sit odio meis illum ei, sea aliquando vulputate ei, vel ea utinam debitis denique.</p>'
        // token: will be set later
    },

    stores: {
        modules: {
            type: 'store',
            remoteSort: true,
            enablePaging: true,
            pageSize: 2,
            lastOptions: {start: 0, limit: 2, page: 1},
            id: 'modules',
            autoLoad: {
                params: {
                    start: 0,
                    limit: 2
                }
            },
            fields: [
                'Name', 'ID'
            ],
            proxy: {
                type: 'rest',
                api: {
                    //read: 'http://vdimivsdp018:81/api/Application/modules'
                    read: 'http://localhost:62598/api/v1/claims'
                },
                headers: {
                    'Authorization': 'Bearer {access_token}',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                listeners: {
                    exception: function (proxy, response, operation) {
                        Bookmarks.lib.RestException.exception(proxy, response, operation);
                    }
                }
            }
        },
        bookmarks: {
            type: 'store',
            remoteSort: true,
            enablePaging: true,
            pageSize: 5,
            lastOptions: {start: 0, limit: 5, page: 1},
            id: 'bookmarks',
            autoLoad: {
                params: {
                    start: 0,
                    limit: 5
                }
            },
            fields: [
                {
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
                    exception: function (operation, proxy, response) {
                        console.log(response);
                        Bookmarks.lib.RestException.exception(operation, proxy, response);
                    }
                }
            }
        }
    }

});
