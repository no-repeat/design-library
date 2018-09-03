const Button = require('./lib/button/lib/index.js');
const Icon = require('./lib/icon/lib/index.js');

const Vext = { Button: Button.default, Icon: Icon.default };

Vext.version = '0.0.14';

module.exports.default = module.exports = Vext;
