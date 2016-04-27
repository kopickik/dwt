// Borrowed from https://github.com/12ftguru/extjs-ux-mediator
// Implements the mediator pattern to listen for / respond to generic view events
Ext.define('Bookmarks.mixins.Mediator', {
    extend: 'Ext.Mixin',
    requires: ['Bookmarks.Mediator'],
    mixinConfig: {
        id: 'mediator',
        before: {
            init: 'doInit'
        }
    },

    doInit: function () {
        var me = this;
        console.log('Initial Config', me.subscribe, me);
        if (Ext.isObject(me.subscribe)) {
            Ext.Object.each(me.subscribe, me.addSubscription, me);
        }
    },

    publish: function (){
        return Ext.Mediator.fireEvent.apply(Ext.mixins.Mediator, arguments);
    },

    addSubscription: function (name, fn) {
        var me = this;
        if (Ext.isString(fn)) {
            if (Ext.isFunction(me[fn])) {
                fn = me[fn]
            } else {
                // <debug>
                console.warn('Creating Unknown Subscription', fn);
                // </debug>
                fn = me.warnFn;
            }
        }
        if (!Ext.isString(name)) {
            name = name.toString();
        }
        me.addManagedListener(Ext.Mediator, name, fn, me);
    },

    warnFn: function () {
        console.warn('Unknown Subscription', arguments, this);
    }
});
