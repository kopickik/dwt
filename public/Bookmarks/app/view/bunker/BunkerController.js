/**
 * This class is the controller for the Abstract "container" view for the app.
 */
Ext.define('Bookmarks.view.bunker.BunkerController', {
    extend: 'Bookmarks.controller.AbstractViewController',

    alias: 'controller.bunker',

    init: function () {
    },

    messages: [
        'Login successful!', 'Something went wrong.'
    ],

    listen: {
        controller: {
            '*': {
                authenticateSuccess: 'onAuthenticateSuccess',
                authenticateFailure: 'onAuthenticateFailure',
                logout: 'onLogoutSuccess'
            }
        }
    },

    onAuthenticateSuccess: function() {
        this.getView().destroy();
        Ext.widget('app-main');
        Ext.getBody().unmask();
    },

    onAuthenticateFailure: function () {
        Ext.getBody().unmask();
        Ext.getCmp('usernameField').focus();
        Ext.Msg.alert('Error', 'Username or password invalid.').addCls('custom-error');
    },

    onLogoutSuccess: function() {
        Bookmarks.view.bunker.Bunker.create();
    }

});
