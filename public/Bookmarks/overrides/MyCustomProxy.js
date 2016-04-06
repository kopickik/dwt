Ext.define( 'MyCustomProxy', {
    extend : 'Ext.data.proxy.Rest',
    alias: 'proxy.mycustomproxy',

    requires: ['Ext.data.*'],
    loaded : false,
    fullResultSet : null,

    buildRequest: function( operation ) {
            var request = this.callParent( arguments );

            return request;
    },

    doRequest: function( operation, callback, scope ) {
        if ( this.loaded ) {
            this.getSubResultSet( operation, callback, scope );
            return;
        }
        this.callParent( arguments );
    },

    processResponse: function( success, operation, request, response, callback, scope ) {
        var reader, result;

        if ( success === true ) {
            reader = this.getReader( );
            // Apply defaults to incoming data only for read operations.
            // For create and update, there will already be a client-side record
            // to match with which will contain any defaulted in values.
            reader.applyDefaults = operation.action === 'read';

            result = reader.read( this.extractResponseData( response ) );

            if ( result.success !== false ) {
                // see comment in buildRequest for why we include the response
                // object here
                Ext.apply( operation, {
                        response : response,
                        resultSet : result
                });
                operation.commitChanges( result.records );
                operation.setCompleted( );
                operation.setSuccessful( );
                this.fullResultSet = this.cloneResultSet( operation.resultSet );
                this.loaded = true;
            }
            else {
                operation.setException( result.message );
                this.fireEvent( 'exception', this, response, operation );
            }
        } else {
            this.setException( operation, response );
            this.fireEvent( 'exception', this, response, operation );
        }
        // this callback is the one that was passed to the 'read' or 'write'
        // function above
        /*
         * if (typeof callback == 'function') { callback.call(scope || me,
         * operation); }
         */
        this.getSubResultSet( operation, callback, scope );

        this.afterRequest( request, success );
    },

    read : function( operation, callback, scope ) {
        if ( this.loaded ) {
            this.getSubResultSet( operation, callback, scope );
            return;
        }
        this.callParent( arguments );
    },

    getSubResultSet: function (operation, callback, scope) {
        var resultSet = this.cloneResultSet(this.fullResultSet);
        operation.resultSet = resultSet;
        var records = resultSet.records;
        var sorters = operation.sorters;
        var groupers = operation.groupers;
        var filters = operation.filters;

        operation.setCompleted();

        // Apply filters, sorters, and start/limit options
        if (resultSet.success) {
            if (filters.length && filters) {
                records = resultSet.records = Ext.Array.filter(records, Ext.util.Filter.createFilterFn(filters));
                resultSet.total = records.length;
            }
            if (groupers.length && groupers) {
                sorters = sorters ? sorters.concat(groupers) : sorters;
            }
            if (sorters.length && sorters) {
                resultSet.records = Ext.Array.sort(records, Ext.util.Sortable.createComparator(sorters));
            }
            if (operation.start !== undefined && operation.limit !== undefined) {
                if (operation.start >= resultSet.total) {
                    resultSet.success = false;
                    resultSet.count = 0;
                    resultSet.records = [];
                } else {
                    resultSet.records = Ext.Array.slice(resultSet.records, operation.start + operation.limit);
                    resultSet.count = resultSet.records.length;
                }
            }
        }
        if (resultSet.success) {
            operation.setSuccessful();
        } else {
            this.fireEvent('exception', me, null, operation);
        }
        Ext.callback(callback, scope || me, [ operation ]);
    },

    cloneResultSet : function( resultSet ) {
        var config = {
                records : Ext.Array.clone( resultSet.records ),
                count : resultSet.count,
                loaded : resultSet.loaded,
                success : resultSet.success,
                total : resultSet.total
            };
        return new Ext.data.ResultSet( config );
    }
});
