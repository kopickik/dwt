/**
 * This class is the base class for all entities in the application.
 */
Ext.define('Bookmarks.model.Base', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }],

    schema: {
        namespace: 'Bookmarks.model',
        proxy: {
            url: '{prefix}/{entityName:uncapitalize}',
            pageParam: '',
            startParam: '',
            limitParam: ''
        }
    }
});
