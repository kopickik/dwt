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

    saveAccessToken: function (accessToken, refreshToken) {
        localStorage.setItem('access-token', accessToken);
        localStorage.setItem('refresh-token', refreshToken);
    },

    clearToken: function() {
        localStorage.removeItem('user-token');
        localStorage.removeItem('access-token');
    },
    // OAuth implementations
    doLoginAtlas: function() {
        var me = this,
            view = this.getView(),
            form = view.down('form');
        Ext.Ajax.request({
            url: 'http://vdimivsdp018:81/api/token',
            method: 'POST',
            jsonData: Ext.Object.toQueryString(form.getValues()),
            success: function (response) {
                var data = Ext.decode(response.responseText);
                if (data.access_token) {
                    view.destroy();
                    me.saveAccessToken(data.access_token, data.refresh_token);
                    Ext.widget('app-main');
                } else {
                    Ext.Msg.alert('Status', 'Access token not found in response. Please try logging in again.')
                }
            },
            failure: function () {
                me.clearToken();
                Ext.getCmp('usernameField').focus();
                Ext.Msg.alert('Error', 'Something went wrong.');
            }
        });
    }
});
