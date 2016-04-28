Ext.define('Bookmarks.model.User', {
    extend: 'Bookmarks.model.Base',

    fields: [
        'name',
        {name: 'organizationId', reference: 'Organization'},
        {name: 'projectId', reference: 'Project'}
    ]
});
