Ext.define('Bookmarks.view.bunker.Bunker', {
    extend: 'Ext.container.Viewport',
    xtype: 'bunker',
    layout: {
        type: 'border',
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
    }],

    listeners: {
        afterrender: function(p) {
        }
    }
});
