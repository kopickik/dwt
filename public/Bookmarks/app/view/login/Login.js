Ext.define('Bookmarks.view.login.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',

    requires: [
        'Bookmarks.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    plugins: 'viewport',

    layout: 'center',

    items: [{
        title: 'Login Window',
        width: 400,
        border: '1px',
        borderColor: '#232323',
        items: {
            xtype: 'form',
            bodyPadding: 10,
            reference: 'form',
            items: [{
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                fieldLabel: 'Password',
                allowBlank: 'false',
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
                }
            }]
        }
    }]
});
