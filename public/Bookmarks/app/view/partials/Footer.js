Ext.define('Bookmarks.view.partials.Footer', {
    extend: 'Ext.Container',
    xtype: 'appFooter',
    id: 'app-footer',
    cls: 'app-footer',
    height: 84,
    margin: '0 0 12px',
    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function () {
        this.items = [{
            xtype: 'component',
            cls: 'app-footer-content',
            id: 'app-footer-content',
            html: '<p><strong>Copyright &copy; 2009 - 2012.  All rights reserved.<br/>| <a href="https://www.meridianrx.com" target="_blank">MeridianRx Website</a> |</strong><br/>This site is best viewed with a resolution of 1024x768 or higher and 96 DPI and<br/>best viewed in latest version of Internet Explorer 8.0+ (Please make sure Compatibility View is unchecked under Tool menu) and Firefox 3.0+.</p>',
            flex: 1
        }];

        this.callParent(arguments);
    }
})
