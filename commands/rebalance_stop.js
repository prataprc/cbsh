var optimist = require('optimist');
var restc = require('../restc');
var _ = require('underscore');

module.exports.command = 'rebalance-stop';

module.exports.usage = function(args) {
    var opts = 
        optimist( args )
        .options( 'h', {
            alias : 'help',
            describe : 'options for server-list command'
        })
        .usage(
            'stop current cluster rebalancing\n' +
            'Usage: $0 [OPTIONS] rebalance-stop [OPTIONS]'
        );
    return opts
}

module.exports.run = function( cluster, options ) {
    var req = _.extend( {}, cluster )
    restc.rebalanceStop( 
        req, options,
        function(res, data) {}
    );
}


