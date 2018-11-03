// Styles
require('./assets/styles/main.scss');

// Include Bootstrap JS files
// Bootstrap dependencies (jQuery/popper) are defined in webpack.config.js commonConfig.plugins
require('bootstrap'); //Delete this if you don't need Bootstrap

// Elm
var Elm = require('./elm/Main.elm').Elm;
Elm.Main.init({});
