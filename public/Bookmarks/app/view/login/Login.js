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
    width: 450,
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
            name: 'userName',
            fieldLabel: 'Username',
            width: '80%',
            allowBlank: false,
            maxLength: 128,
            enforceMaxLength: true
        }, {
            xtype: 'textfield',
            id: 'passwordField',
            name: 'password',
            fieldLabel: 'Password',
            width: '80%',
            allowBlank: false,
            inputType: 'password',
            maxLength: 128,
            enforceMaxLength: true,
            listeners: {
                specialkey: function (field, e) {
                    if (field.getValue() !== '' && Ext.getCmp('usernameField').getValue() !== '') {
                        if (e.getKey() === e.ENTER) {
                            // submit the form
                            Ext.getCmp('loginButton').fireEvent('click');
                        }
                    }
                }
            }
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Username and password are case sensitive.'
        }, {
            xtype: 'hiddenfield',
            id: 'client_id',
            name: 'client_id',
            value: '6VytS240mp4LICiUfzILcpxbZbPPsaXfWKbzG398dlk=',
            readOnly: true,
            fieldCls: 'x-item-disabled'
        }, {
            xtype: 'hiddenfield',
            id: 'grant_type',
            name: 'grant_type',
            value: 'password',
            readOnly: true,
            fieldCls: 'x-item-disabled'
        }],
        buttons: [{
            text: 'Login',
            id: 'loginButton',
            formBind: true,
            listeners: {
                click: 'doLogin'
            },
            iconCls: 'x-fa fa-check'
        }, {
            text: 'Login with Atlas Auth Server',
            id: 'AtlasLoginButton',
            iconCls: 'x-fa fa-globe',
            listeners: {
                click: 'doLoginAtlas'
            }
        }]
    }]

});
