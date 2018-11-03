// Styles
require('./assets/styles/main.scss');

// Vendor JS is imported as an entry in webpack.config.js

// Elm
var Elm = require('./elm/Main.elm').Elm;
Elm.Main.init({});
