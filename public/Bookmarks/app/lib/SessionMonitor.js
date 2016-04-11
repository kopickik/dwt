/**
* Session Monitor task, alerts the user that their session will expire in 60 seconds and provides
* the logout or continue working options.  If the countdown timer expires, the user is 
* automatically logged out & redirected to the login screen.
*/
Ext.define('Bookmarks.lib.SessionMonitor', {
    singleton: true,

    interval: 1000 * 10,// run every 10 seconds
    lastActive: null,
    maxInactive: 1000 * 60 * 1,// 1 minute
    remaining: 0,
    ui: Ext.getBody(),

    /**
    * Dialog to display expiration message and countdown timer
    */
    window: Ext.create('Ext.window.Window', {
        bodyPadding: 5,
        closeable: false,
        closeAction: 'hide',
        modal: true,
        resizable: false,
        title: 'Session Timeout Warning',
        width: 400,
        items: [{
            xtype: 'container',
            frame: true,
            html: 'Your session automatically expires after 20 minutes of inactivity.<br/><br/>If you want to continue working, click \'Continue Working\'.'
        }, {
            xtype: 'label',
            text: ''
        }],
        buttons: [{
            text: 'Continue Working',
            iconCls: 'x-fa fa-battery-full',
            handler: function () {
                Ext.TaskManager.stop(Bookmarks.lib.SessionMonitor.countdownTask);
                Bookmarks.lib.SessionMonitor.window.hide();
                Bookmarks.lib.SessionMonitor.start();
                Ext.Ajax.request({
                    url: 'user/poke.action'
                });
            }
        }, {
            text: 'Logout',
            iconCls: 'x-fa fa-battery-2',
            handler: function () {
                Ext.TaskManager.stop(Bookmarks.lib.SessionMonitor.countdownTask);
                Bookmarks.lib.SessionMonitor.window.hide();
                // find and invoke doLogout
                Ext.ComponentQuery.query('#logoutButton')[0].fireEvent('click');
            }
        }]
    }),

    /**
    * Sets up a timer task to monitor for mousemove/keydown events and 
    * a countdown timer task to be used by the 60 second countdown dialog.
    */
    constructor: function (config) {
        var me = this;

        // session monitor task
        this.sessionTask = {
            run: me.monitorUI,
            interval: me.interval,
            scope: me
        };

        this.countdownTask = {
            run: me.countdown,
            interavl: 1000,
            scope: me
        };
    },

    /**
    * Simple method to register with mousemove and keydown events.
    */
    captureActivity: function (eventObj, el, eventOptions) {
        this.lastActive = new Date();
    },

    /**
    * Monitors the UI to determine if you've exceeded the inactivity threshold.
    */
    monitorUI: function () {
        var now = new Date();
        var inactive = (now - this.lastActive);

        if (inactive >= this.maxInactive) {
            this.stop();
            this.window.show();
            this.remaining = 60;// seconds remaining.
            Ext.TaskManager.start(this.countdownTask);
        }
    },

    /**
    * Starts the session timer task and registers mouse/keyboard activity event monitors.
    */
    start: function () {
        this.lastActive = new Date();
        this.ui = Ext.getBody();

        this.ui.on('mousemove', this.captureActivity, this);
        this.ui.on('keydown', this.captureActivity, this);

        Ext.TaskManager.start(this.sessionTask);
    },

    /**
    * Stops the session timer task and unregisters the mouse/keyboard activity event monitors.
    */
    stop: function () {
        Ext.TaskManager.stop(this.sessionTask);
        this.ui.un('mousemove', this.captureActivity, this);// garbage disposal
        this.ui.un('keydown', this.captureActivity, this);
    },

    /**
    * Countdown function updates the message label in the user dialog which displays
    * the seconds remaining prior to session expiration.  If the counter expires, you're logged out.
    */
    countdown: function () {
        this.window.down('label').update('Your session will expire in ' + this.remaining + 'second' + ((this.remaining === 1) ? '.' : 's .'));

        --this.remaining;

        if (this.remaining < 0) {
            this.window.down('button[action="onLogoutClick"]').handler();
        }
    }

});
