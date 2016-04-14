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
                        xtype: 'container',
                        title: 'Claim Search',
                        items: [
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Claim ID',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Member ID',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype: 'button',
                                        text:  'Search',
                                        scale: 'medium'
                                    },
                                    {
                                        xtype: 'component',
                                        html:  '<a href="#">Advanced Search</a>'
                                    }
                                ]
                            },
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Last Name',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'First Name',
                                        value:      'TBD'
                                    },
                                    {
                                        title:  'Date Picker',
                                        margin: '0 20 0 0',
                                        items:  {
                                            xtype: 'datepicker'
                                        }
                                    }
                                ]
                            },
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
                            }
                        ]
                    },
                    {
                        title: 'Member Info',
                        items: [
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Name',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Address',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Gender',
                                        value:      'TBD'
                                    }
                                ]
                            },
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Member ID',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Phone',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'DoB',
                                        value:      'TBD'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Prescriber Info',
                        items: [
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Name',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Address',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'NPI',
                                        value:      'TBD'
                                    }]
                            },
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Member ID',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Phone',
                                        value:      'TBD'
                                    }]
                            }
                        ]
                    },
                    {
                        title: 'Pharmacy Info',
                        items: [
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Name',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Phone',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Service Type',
                                        value:      'TBD'
                                    }]
                            },
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Address',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Fax',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Pharmacy ID',
                                        value:      'TBD'
                                    }]
                            }
                        ]
                    },
                    {
                        title: 'Claim Detail',
                        items: [
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Claim ID',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Pricing',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Source',
                                        value:      'TBD'
                                    }]
                            },
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Formulary Detail Info',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Status',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Authorization ID',
                                        value:      'TBD'
                                    }]
                            },
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Patient Segment info not in Member Section',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Drug Detail (NDC, GCN, TYPE, DAW, Copound, GPI, Qty)',
                                        value:      'TBD'
                                    }]
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
                        value:      'PaymentHold'
                    },
                    {
                        title: 'Audit Log Info',
                        items: [
                            {
                                xtype:  'container',
                                layout: 'hbox',
                                margin: '0 0 10 0',
                                items:  [
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Log ID',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Log item Source (User, system)',
                                        value:      'TBD'
                                    },
                                    {
                                        xtype:      'textfield',
                                        fieldLabel: 'Logged Item Date',
                                        value:      'TBD'
                                    }]
                            }
                        ]
                    }
                ]
            }
        ];

        this.callParent();
    }
});
