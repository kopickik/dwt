/*
* A generic observable object, useful for passing context between ViewControllers.
* 
* @private
*/

Ext.define('Bookmarks.Mediator', {
    singleton: true,
    mixins: ['Ext.mixin.Observable'],

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
    }
});
