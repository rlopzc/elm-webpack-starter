// Bootstrap dependencies
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';

// Assign jQuery to window
window.jQuery = jQuery;
window.$      = jQuery;

// To use Bootstrap Popovers/Tooltips
// https://getbootstrap.com/docs/4.1/components/popovers/
// https://getbootstrap.com/docs/4.1/components/tooltips/
// You need to initialize the popover but you need to think that this is a SPA,
// it may not be initalized correctly on document ready
