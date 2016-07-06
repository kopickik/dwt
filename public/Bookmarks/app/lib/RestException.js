Ext.define('Bookmarks.lib.RestException', {
    singleton: true,

    exception : function(proxy, response, operation) {
        var titleMsg = '';
        var action = '';
        var msg = '';
        var fn = this.reload;
        if (operation) {
            switch (operation.action) {
                case 'read':
                    action = 'read';
                    break;
                case 'create':
                case 'update':
                    action = "save";
                    break;
                case 'destroy':
                    action = 'delete';
                    break;
                default:
                    action = operation.action;
            }
        }

        if (response) {
            //console.log(response);
            switch (response.status) {
                case 401:
                case 403:
                    titleMsg = "Error " + response.status + ' ' + response.statusText;
                    //msg = response.responseText;
                    msg = '<br/>Triggered by:<br/>' + response.request.method + ' ' + response.request.url;
                    break;
                case 200:
                    break;
                default:
                    return false;
            }
            Ext.Msg.show({
                title : titleMsg,
                message : msg,
                cls: 'Notification error',
                icon : Ext.Msg.ERROR,
                buttons : Ext.Msg.OK,
                fn : Ext.emptyFn
            });
        }
        // // Client / Server communication error
        // if (response.status == 0) {
        //     msg = this.msg01 + this.msg02 + action + this.msg03 + this.msg04 + this.msg05;
        // } else if (response.status != 200) {
        //     // Unexpected error from server
        //     msg = this.msg06 + response.status + this.msg07 + action + this.msg03 + this.msg04
        //     + this.msg05;
        // } else if (operation.error == "UNSIGNED") {
        //     // Session expired
        //     msg = this.msg07;
        // } else {
        //     // Unhandled error, we show the message
        //     msg = this.msg08 + action + ":<br/>" + operation.error + "</br>" + this.msg09;
        //     fn = null;
        // }
        // Ext.Msg.show({
        //     title : "Error",
        //     message : msg,
        //     icon : Ext.Msg.ERROR,
        //     buttons : Ext.Msg.OK,
        //     fn : fn
        // });
    },
    reload : function() {
        document.location.reload();
    },

    getParameterByName: function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },

    clearTokensAndReturnToLogin: function () {
        localStorage.removeItem('user-token');
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');
        document.location.reload();
    }

});
