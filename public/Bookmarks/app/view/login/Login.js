Ext.define('Bookmarks.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Bookmarks.view.login.LoginModel',
        'Bookmarks.view.login.LoginController',

        'Ext.form.Panel',
        'Ext.ProgressBar',
        'Ext.Promise'
    ],

    controller: 'login',
    viewModel: 'login',
    closable: false,
    draggable: false,
    resizable: false,
    autoShow: true,
    width: 420,
    layout: 'card',

    header: {
        title: {
            bind: {
                text: '{formTitle}'
            }
        }
    },

    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            inputType: 'password'
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Username and password are case sensitive.'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'doLogin'
            },
            iconCls: 'x-fa fa-check'
        }]
    }]

});
