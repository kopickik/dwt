Ext.define('Bookmarks.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Bookmarks.view.login.LoginModel',
        'Bookmarks.view.login.LoginController'
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
            id: 'usernameField',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            inputType: 'password',
            listeners: {
                specialkey: function (field, e) {
                    if (field.getValue() !== '') {
                        if (e.getKey() === e.ENTER) {
                            // submit the form!
                            Ext.getCmp('loginButton').fireEvent('click');
                        }
                    }
                }
            }
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Username and password are case sensitive.'
        }],
        buttons: [{
            text: 'Login',
            id: 'loginButton',
            formBind: true,
            listeners: {
                click: 'doLogin'
            },
            iconCls: 'x-fa fa-check'
        }]
    }]

});
