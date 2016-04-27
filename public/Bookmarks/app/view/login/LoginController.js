Ext.define('Bookmarks.view.login.LoginController', {
    extend: 'Bookmarks.controller.AbstractViewController',
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
                    me.fireEvent('authenticateSuccess');
                    view.destroy();
                    me.saveToken(data.token);
                    Ext.widget('app-main');
                }
            },
            failure: function () {
                me.fireEvent('authenticateFailure');
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
        var hardCodedToken = 'x19uLOFz_xzbNut3hx_Q4FKtYsXGOgjAmZ_-zl8JCtYFzAE52x1eZcHDybTCEiyky9GXcR1BjaX_yiYnGS81HsuDEEY25kkvTJl1p8ejvhcfa3fjYZD2kg8fr_jWr14y3ZRxGZal4Z4hAR6ArjrLGsvWCS-psG1rIzqqTLcnruobKO-wd9x4Zu7OFrByBKEKX5F6MA_JgRmcdVEncaB7H5DBNqOzQrRoV6X3f37V-P6QAwpTAqnJxp7j8lr3AwVAe8NLp-UnK_5Gofip03TkNfGCzxxGOUvxIKbUtIUOtf7o-yK935L6YkUaWUVQsZrPehT9WcFrM5EFfp968aLhhAamvF7XrpveD6qhVCrq3XngpepbK3tQNXYTzmU-qGG2-wOyOne4Ajwoc5HS4OEYeo1x8NRpQZLn1VFOLZ7nk4P_2K2UmSKLfimvedHCfhD6i-Ffq7-yXToWX1uV6GKGebYvvXkESJYuJmKvMrhjfPDwUx66ahVWvz5LYYckll9sTq-WuA';
        this.saveAccessToken(hardCodedToken, 'fakeRefreshToken');
        this.getView().down('form').destroy();
        Ext.widget('app-main');
        // var me = this,
        //     view = this.getView(),
        //     form = view.down('form');
        // Ext.Ajax.request({
        //     url: 'http://vdimivsdp018:81/api/token',
        //     method: 'POST',
        //     jsonData: Ext.Object.toQueryString(form.getValues()),
        //     success: function (response) {
        //         var data = Ext.decode(response.responseText);
        //         if (data.access_token) {
        //             view.destroy();
        //             me.saveAccessToken(data.access_token, data.refresh_token);
        //             Ext.widget('app-main');
        //         } else {
        //             Ext.Msg.alert('Status', 'Access token not found in response. Please try logging in again.')
        //         }
        //     },
        //     failure: function () {
        //         me.clearToken();
        //         Ext.getCmp('usernameField').focus();
        //         Ext.Msg.alert('Error', 'Something went wrong.');
        //     }
        // });
    }
});
