var optimist = require('optimist');
var restc = require('../restc');
var _ = require('underscore');

module.exports.command = 'bucket-list';

module.exports.usage = function(args) {
    var opts = 
        optimist( args )
        .options( 'h', {
            alias : 'help',
            describe : 'options for bucket-list command'
        })
        .usage(
            'list all bucket in cluster\n' +
            'Usage: $0 [OPTIONS] bucket-list [OPTIONS]'
        );
    return opts
}

module.exports.run = function( cluster, options ) {
    var req = _.extend( {}, cluster )
    restc.bucketList(
        req, options,
        function(json) { options.log(json); }
    );
}



