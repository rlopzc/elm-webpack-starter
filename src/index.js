// Styles
require('./assets/styles/main.scss');

// Include Bootstrap JS files
// Bootstrap dependencies (jQuery/popper) are defined in webpack.config.js commonConfig.plugins
require('bootstrap'); //Delete this if you don't need Bootstrap

// Elm
const { Elm } = require('./elm/Main.elm');
Elm.Main.init({});
