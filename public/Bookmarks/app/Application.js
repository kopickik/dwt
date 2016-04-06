/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Bookmarks.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Bookmarks',

    stores: [
        // TODO: add global / shared stores here
    ],

    views: ['login.Login', 'main.Main'],

    launch: function () {
        var loggedIn;

        loggedIn = localStorage.getItem('user-token');
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
    }
});
