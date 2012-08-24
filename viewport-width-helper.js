/*
 * viewport-width-helper.js
 * https://github.com/brendanf/viewport-width-helper
 *
 * @author     Brendan Falkowski @ http://gravitydept.com
 * @requires   jQuery
 */

(function() {

    var viewport = jQuery('body');
    var elem = document.createElement('div');
    
    // Setup widget properties
    
    elem.id = 'viewport-width-helper';
    
    elem.style.position = 'fixed';
    elem.style.bottom = '0';
    elem.style.left = '50%';
    elem.style.zIndex = '9999';
    elem.style.width = '50px';
    elem.style.padding = '7px 0';
    elem.style.backgroundColor = '#000';
    elem.style.color = '#E8E8E8';
    elem.style.fontFamily = '"Helvetica Neue", sans-serif';
    elem.style.fontSize = '16px';
    elem.style.fontWeight = '300';
    elem.style.lineHeight = '1';
    elem.style.textAlign = 'center';
    
    elem.innerHTML = viewport.width();
    
    // Add widget to page
    
    viewport.append(elem);
    
    // Get widget reference
    
    var widget = $('#viewport-width-helper');
    
    // Monitor for browser resizing
    
    jQuery(window).resize(function() {
        widget.innerHTML = viewport.width();
    });
    
})();
