Ext.define('Bookmarks.view.bunker.Bunker', {
    extend: 'Ext.container.Container',
    xtype: 'bunker',
    layout: {
        type: 'vbox',
        align: 'middle',
        pack: 'center'
    },

    plugins: 'viewport',
    renderTo: Ext.getBody(),
    width: '100%',

    items: [{
        xtype: 'login'
    }],

    listeners: {
        afterrender: function(p) {
        }
    }
});
