Ext.define('Bookmarks.store.Claims', {
    extend: 'Ext.data.Store',

    alias: 'store.claims',

    fields: ['claimNum', 'meridianRxId', 'memberName', 'carrier', 'account', 'lob', 'ndc', 'medication',
            'serviceDate', 'status', 'rxNum', 'ncpdpid', 'pharmacyName', 'prescriberNpi', 'prescriberName'
    ],

    proxy: {
        type: 'rest',
        api: {
            read: '/api/claims'
        },
        headers: {
            'Authorization': 'Bearer {token}'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            
        }
    }
});
