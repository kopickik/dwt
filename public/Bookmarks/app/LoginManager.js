/**
* This class manages the login process.
*/
Ext.define('Bookmarks.LoginManager', {
    config: {

        /**
         * @cfg {Class} model
         * The model class from which to create the "user" record from the login.
         * @type {[type]}
         */
        model: 'User',
        /**
         * session
         * @cfg {Ext.data.Session}
         */
        session: null
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    applyModel: function (model) {
        return model// && Ext.data.schema.Schema.lookupEntity(model);
    },

    login: function (options) {
        Ext.Ajax.request({
            url: 'authenticate',
            method: 'POST',
            jsonData: options.data,
            scope: this,
            callback: this.onLoginReturn,
            original: options
        });
    },

    onLoginReturn: function (options, success, response) {
        options = options.original;
        var session = this.getSession(),
            me = this;

        if (success) {
            console.log('Response:', response);
            var data = Ext.decode(response.responseText);
            if (data.token) {
                this.saveToken(data.token);
                Ext.widget('app-main');
            }
        }

        Ext.callback(options.failure, options.scope, [response, resultSet]);
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
    }

});
