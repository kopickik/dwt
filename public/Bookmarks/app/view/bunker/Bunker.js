Ext.define('Bookmarks.view.bunker.Bunker', {
    extend: 'Ext.container.Viewport',
    xtype: 'bunker',
    requires: [
        'Bookmarks.view.bunker.BunkerController',
        'Bookmarks.view.partials.Header',
        'Bookmarks.view.partials.Footer'
    ],
    controller: 'bunker',
    layout: {
        type: 'border'
        //align: 'middle',
        //pack: 'center'
    },

    plugins: 'viewport',
    renderTo: Ext.getBody(),
    width: '100%',

    items: [{
        region: 'north',
        xtype: 'appHeader'
    }, {
        xtype: 'login'
    }, {
        region: 'south',
        xtype: 'appFooter'
    }],

    listeners: {
        afterrender: function(p) {
        }
    }
});
