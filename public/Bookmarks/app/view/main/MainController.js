/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Bookmarks.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function () {
        this.getTokenFromLocalStorage();
    },

    getTokenFromLocalStorage: function () {
        var token = localStorage.getItem('user-token');
        this.getViewModel().set('token', token);
    },

    onLogoutClick: function () {

        localStorage.removeItem('user-token');
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }

});
