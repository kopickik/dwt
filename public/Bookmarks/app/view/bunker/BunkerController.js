/**
 * This class is the controller for the Abstract "container" view for the app.
 */
Ext.define('Bookmarks.view.bunker.BunkerController', {
    extend: 'Bookmarks.controller.AbstractViewController',

    alias: 'controller.bunker',

    init: function () {
    },

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
    },

    onAuthenticateFailure: function () {

    },

    onLogoutSuccess: function() {
        Bookmarks.view.bunker.Bunker.create();
    }

});
