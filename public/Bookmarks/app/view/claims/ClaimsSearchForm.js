Ext.define('Bookmarks.view.claims.ClaimsSearchForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'claimsSearchForm',

    title: 'Claims Advanced Search',
    ui: 'slated',

    bodyPadding: 10,
    items: [{
            xtype: 'form',
            id: 'claimsSearchForm',
            cls: 'claimsSearchForm',
            items: [{
                xtype: 'container',
                ui: 'slated',
                layout: 'hbox',
                    //bind: '{modules}',
                items: [{
                    xtype: 'textfield',
                    width: 400,
                    id: 'claimsSearchMemberField',
                    name: 'claimsSearchMemberField',
                    fieldLabel: 'Member'
                }, {
                    xtype: 'datefield',
                    id: 'claimsSearchServiceDateField01',
                    name: 'claimsSearchServiceDateField01',
                    fieldLabel: 'Service Date',
                    flex: 2,
                    margin: '0 0 0 12'
                }, {
                    xtype: 'datefield',
                    id: 'claimsSearchServiceDateField02',
                    name: 'claimsSearchServiceDateField02',
                    fieldLabel: '',
                    flex: 1,
                    margin: '0 0 0 12'
                },{
                    xtype: 'displayfield',
                    flex: 6
                }, {
                    xtype: 'button',
                    text: 'Help',
                    listeners: {
                        // click: 'doClickHelp'
                    },
                    iconCls: 'x-fa fa-question-circle',
                    flex: 1
                }]
            }, {
                xtype: 'container',
                ui: 'slated',
                layout: 'hbox',
                items: [{
                    xtype: 'textfield',
                    id: 'claimsSearchPrescriberField',
                    name: 'claimsSearchPrescriberField',
                    fieldLabel: 'Prescriber',
                    width: 400
                },{
                    xtype: 'textfield',
                    id: 'claimsSearchProviderField',
                    name: 'claimsSearchProviderField',
                    fieldLabel: 'Provider',
                    flex: 5,
                    margin: '0 0 0 12'
                }, {
                    xtype: 'displayfield',
                    flex: 5
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                ui: 'slated',
                items: [{
                    xtype: 'textfield',
                    id: 'claimsSearchNDCField',
                    name: 'claimsSearchNDCField',
                    fieldLabel: 'NDC',
                    width: 400
                }, {
                    xtype: 'textfield',
                    id: 'claimsSearchGCNField',
                    name: 'claimsSearchGCNField',
                    fieldLabel: 'GCN',
                    flex: 5,
                    margin: '0 0 0 12'
                }, {
                    xtype: 'displayfield',
                    flex: 5
                }]
            }, {
                xtype: 'container',
                ui: 'slated',
                layout: 'hbox',
                items: [{
                    xtype: 'textfield',
                    id: 'claimsSearchRxField',
                    name: 'claimsSearchRxField',
                    fieldLabel: 'Rx Number',
                    width: 400
                }, {
                    xtype: 'combobox',
                    id: 'claimsSearchSortByField01',
                    name: 'claimsSearchSortByField01',
                    fieldLabel: 'Sort By',
                    flex: 0.5,
                    margin: '0 0 0 12'
                }, {
                    xtype: 'combobox',
                    id: 'claimsSearchSortByField02',
                    name: 'claimsSearchSortByField02',
                    fieldLabel: 'And',
                    flex: 0.5,
                    margin: '0 0 0 12'
                }, {
                    xtype: 'displayfield',
                    flex: 1
                }]

            }],
            buttons: [{
                text: 'Reset',
                id: 'claimsSearchResetButton',
                listeners: {
                    //click: 'doClaimsSearchReset'
                }
                //iconCls: 'x-fa fa-check'
            }, {
                text: 'Search',
                id: 'claimsSearchSearchButton',
                formBind: true,
                listeners: {},
                iconCls: 'x-fa fa-search'
            }]
        }]
});
