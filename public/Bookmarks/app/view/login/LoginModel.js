Ext.define('Bookmarks.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.login',

    data: {
        formTitle: '<span class=\'x-fa fa-lock\'></span> MERLIN Development Login - This is NOT PRODUCTION'
    },

    stores: {
        users: {
            model: 'User',

            autoLoad: false,

            session: true
        }
    }
});
