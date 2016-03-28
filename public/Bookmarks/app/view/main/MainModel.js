/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Bookmarks.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Bookmarks',
        loremIpsum: '<p>Eum id scripta lucilius, ad corrumpit inciderint vituperatoribus pri. Quo nonumes perfecto te, agam ullum percipitur eos ex, te tation detracto mandamus vix. Animal mentitum has ea. Eum eu mazim dicit principes, pro ad amet melius placerat. An sed ancillae invidunt conceptam. Sit odio meis illum ei, sea aliquando vulputate ei, vel ea utinam debitis denique.</p>'
        // token: will be set later
    },

    stores: {
        bookmarks: {
            autoLoad: true,
            fields: ['name', 'url'],
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
                }
            }
        }
    }

});
