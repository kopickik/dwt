Ext.define('Bookmarks.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    doLogin: function () {
        var me = this,
            view = this.getView(),
            form = view.down('form');

        Ext.Ajax.request({
            url: 'authenticate',
            method: 'POST',
            jsonData: form.getValues(),
            success: function (response) {
                var data = Ext.decode(response.responseText);
                if (data.token) {
                    view.destroy();
                    me.saveToken(data.token);
                    Ext.widget('app-main');
                }
            },
            failure: function () {
                me.clearToken();
                Ext.getCmp('usernameField').focus();
                Ext.Msg.alert('Error', 'Username or password are invalid.');
            }
        });
    },

    saveToken: function (token) {
        localStorage.setItem('user-token', token);
    },

    clearToken: function() {
        localStorage.removeItem('user-token');
    }
});
