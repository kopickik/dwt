Ext.define('Bookmarks.view.partials.Header', {
    extend: 'Ext.Container',
    xtype: 'appHeader',
    id: 'app-header',
    cls: 'app-header',
    title: 'Atlas Dev',
    height: 84,
    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function () {
        document.title = this.title = 'MeridianRx Member Portal';

        this.items = [{
            xtype: 'component',
            cls: 'app-header-logo',
            id: 'app-header-logo',
            width: 250,
            height: 42,
            margin: '0 13px'
        }, {
            xtype: 'component',
            cls: 'app-header-title',
            id: 'app-header-title',
            html: this.title,
            flex: 1
        }, {
            xtype: 'component',
            cls: 'app-header-welcome',
            id: 'app-header-welcome',
            html: '<p>Welcome to MeridianRx<br/>Tech Support: 1-866-984-6462<br/>Help Desk Email: <a href="mailto:pharmacist@meridianrx.com">pharmacist@meridianrx.com</a></p>',
            padding: '0 13px 0 0'
        }];

        this.callParent(arguments);
    }

})
