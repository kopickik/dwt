Ext.define('Bookmarks.view.Header', {
    extend: 'Ext.Container',
    xtype: 'appHeader',
    id: 'app-header',
    cls: 'app-header',
    title: 'Atlas 0.6',
    height: 50,
    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function () {
        document.title = this.title;

        this.items = [{
            xtype: 'component',
            cls: 'app-header-logo',
            id: 'app-header-logo',
            height: 50,
            width: 250,
            margin: '0 10px 0 4px'
        }, {
            xtype: 'component',
            cls: 'app-header-title',
            id: 'app-header-title',
            html: this.title,
            flex: 1
        }];

        this.callParent(arguments);
    }

})
