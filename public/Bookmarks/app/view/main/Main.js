Ext.define('Bookmarks.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',

        'Bookmarks.view.main.MainController',
        'Bookmarks.view.main.MainModel',
        'Bookmarks.controller.BaseController',
        'Bookmarks.view.claims.ClaimsSearchForm',
        'Bookmarks.view.claims.ClaimsSearchGrid'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: 'Atlas',
            flex: 0
        },
        iconCls: 'x-fa fa-globe',
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onLogoutClick',
            iconCls: 'x-fa fa-power-off'
        }]
    },
    tabBar: {
        flex: 1,
        id: 'main-tabs',
        layout: {
            align: 'stretch',
            overflowHandler: 'scroller'
        }
    },
    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 0,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'My Claims (bookmarks)',
        iconCls: 'x-fa fa-cog',
        id: 'tab1',
        items: [{
            xtype: 'gridpanel',
            ui: 'slated',
            title: 'Development Bookmarks',
            bind: '{bookmarks}',
            columns: [
                { text: 'Name', sortable: true, dataIndex: 'name', flex: 1 },
                { text: 'URL', sortable: true, dataIndex: 'url', flex: 1 }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                displayInfo: true,
                bind: {
                    store: '{bookmarks}'
                }
            }],
            viewConfig: { stripeRows: true },
            height: 400,
            scrollable: true
        }]
    }, {
        title: 'Claims Search',
        iconCls: 'x-fa fa-cog',
        id: 'claimsSearch',
        items: [{
            xtype: 'claimsSearchForm'
        }, {
            xtype: 'claimsSearchGrid'
        }]
    }, {
        title: 'My Benefits &amp; Coverage',
        iconCls: 'x-fa fa-cog',
        id: 'tab3',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Formulary',
        iconCls: 'x-fa fa-cog',
        id: 'tab4',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Pharmacy Search',
        iconCls: 'x-fa fa-cog',
        id: 'tab5',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Drug Search',
        iconCls: 'x-fa fa-cog',
        id: 'tab6',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Documents &amp; Forms',
        iconCls: 'x-fa fa-cog',
        id: 'tab7',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Contact',
        iconCls: 'x-fa fa-cog',
        id: 'tab8',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
