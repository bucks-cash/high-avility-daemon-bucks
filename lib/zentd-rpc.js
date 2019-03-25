'use strict';

module.exports.bucksdaemon = require('./rpc/buckscash-rpc.js');
module.exports.bucksdaemonService = require('./rpc/service-rpc.js');

// These exports will be deprecated in a future version.
// Continue to use them at your own risk.
module.exports.Walletd = require('./rpc/service-rpc.js')
module.exports.Service = require('./rpc/service-rpc.js')
module.exports.Client = require('./rpc/buckscash-rpc.js')