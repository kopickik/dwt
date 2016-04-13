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
        'Bookmarks.view.main.MainModel'
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
            title:   'Claims',
            iconCls: 'x-fa fa-home',
            items:   [
                {
                    xtype:       'gridpanel',
                    title:       'Claim History',
                    columns:     [
                        {text: 'Claim ID', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'Member Name', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'DoB', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'Status', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'Source', sortable: true, dataIndex: 'name', flex: 1}
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
                },
                {
                    title: 'Member Info',
                    items: [
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Name',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Address',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Gender',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Member ID',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Phone',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'DoB',
                            value:      'TBD',
                            flex:       1
                        }
                    ]
                },
                {
                    title: 'Prescriber Info',
                    items: [
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Name',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Address',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'NPI',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Member ID',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Phone',
                            value:      'TBD',
                            flex:       1
                        }
                    ]
                },
                {
                    title: 'Pharmacy Info',
                    items: [
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Name',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Phone',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Service Type',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Address',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Fax',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Pharmacy ID',
                            value:      'TBD',
                            flex:       1
                        }
                    ]
                },
                {
                    title: 'Claim Detail',
                    items: [
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Claim ID',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Pricing',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Source',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Formulary Detail Info',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Status',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Authorization ID',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Patient Segment info not in Member Section',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Drug Detail (NDC, GCN, TYPE, DAW, Copound, GPI, Qty)',
                            value:      'TBD',
                            flex:       1
                        }
                    ]
                },
                {
                    xtype:       'gridpanel',
                    title:       'Claim Reject Information',
                    columns:     [
                        {text: 'Reject Code', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'Reject Field Ind', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'Description', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'Secondary Message', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'Tertiary Message', sortable: true, dataIndex: 'name', flex: 1},
                        {text: 'Data Rejected', sortable: true, dataIndex: 'name', flex: 1}
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
                },
                {
                    xtype:      'textareafield',
                    fieldLabel: 'Notes',
                    value:      'PaymentHold',
                    flex:       1
                },
                {
                    title: 'Audit Log Info',
                    items: [
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Log ID',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Log item Source (User, system)',
                            value:      'TBD',
                            flex:       1
                        },
                        {
                            xtype:      'textfield',
                            fieldLabel: 'Logged Item Date',
                            value:      'TBD',
                            flex:       1
                        }
                    ]
                }
            ]
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
