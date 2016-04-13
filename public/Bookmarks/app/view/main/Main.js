Ext.define('Bookmarks.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype:  'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',

        'Bookmarks.view.main.MainController',
        'Bookmarks.view.main.MainModel',
        'Bookmarks.view.main.Claims'
    ],

    controller: 'main',
    viewModel:  'main',
    plugins:    'viewport',
    ui:         'navigation',

    tabBarHeaderPosition: 1,
    titleRotation:        0,
    tabRotation:          0,

    header:           {
        layout:  {
            align: 'stretchmax'
        },
        title:   {
            text: 'Bookmarks',
            flex: 0
        },
        iconCls: 'x-fa fa-twitter',
        items:   [{
            xtype:   'button',
            text:    'Logout',
            margin:  '10 0',
            handler: 'onLogoutClick',
            iconCls: 'x-fa fa-power-off'
        }]
    },
    tabBar:           {
        flex:   1,
        layout: {
            align:           'stretch',
            overflowHandler: 'none'
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
        tabConfig:   {
            plugins:          'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width:     120
                }
            }
        }
    },

    items: [
        {
            title:   'Home',
            iconCls: 'x-fa fa-home',
            // the following grid shares a store with the classic version's grid as well
            items:   [{
                xtype:       'gridpanel',
                title:       'Bookmarks',
                bind:        '{bookmarks}',
                columns:     [
                    {text: 'Name', sortable: true, dataIndex: 'name', flex: 1},
                    {text: 'URL', sortable: true, dataIndex: 'url', flex: 1}
                ],
                dockedItems: [{
                    xtype:       'pagingtoolbar',
                    dock:        'bottom',
                    displayInfo: true,
                    bind:        {
                        store: '{bookmarks}'
                    }
                }],
                viewConfig:  {stripeRows: true},
                height:      400,
                scrollable:  true
            }]
        },
        {
            xtype:   'claimssearch',
            title:   'Claims',
            iconCls: 'x-fa fa-home'
        },
        {
            title:   'Users',
            iconCls: 'x-fa fa-bluetooth',
            bind:    {
                html: '{loremIpsum}'
            }
        }, {
            title:   'Groups',
            iconCls: 'x-fa fa-users',
            bind:    {
                html: '{loremIpsum}'
            }
        }, {
            title:   'Settings',
            iconCls: 'x-fa fa-cog',
            bind:    {
                html: '{loremIpsum}'
            }
        }]
});
