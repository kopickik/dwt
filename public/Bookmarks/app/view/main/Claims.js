Ext.define('Bookmarks.view.main.Claims', {
    extend: 'Ext.panel.Panel',

    xtype:      'claimssearch',
    scrollable: true,

    defaults: {
        xtype: 'panel'
    },

    initComponent: function () {
        this.items = [
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
                        title:      'Hold Payment',
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
            }
        ];

        this.callParent();
    }
});