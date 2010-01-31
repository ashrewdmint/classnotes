/*
 * Classnotes - jQuery plugin
 * Store data in an element's class attribute; access jQuery data with :data selector
 *
 * Copyright (c) 2010 Andrew Smith
 * Examples and documentation at: http://github.com/ashrewdmint/classnotes
 * 
 * Version: 1.0.0 (01/30/2010)
 * Requires: jQuery v1.3+
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($){
  // :data selector
  // Example usage: $(':data(key=value)')
  // Adapted from [http://james.padolsey.com/javascript/extending-jquerys-selector-capabilities/]
  $.extend($.expr[':'],{
    data: function(element, index, match) {
      // No data in parentheses
      if (! match[3]) {
        // If we find a property with "jQuery" in its name, this element has jQuery data
        $.each(element, function(key, value) {
          if (key.match(/jquery/i)) {
            return true;
          }
        });
      // Data in parentheses
      } else {
        var key   = match[3].split('=')[0];
        var value = match[3].split('=')[1];
        
        if (key && value) {
          return $(element).data(key) == value;
        } else {
          return typeof($(element).data(key)) != 'undefined';
        }
      }
      return false;
    }
  });
  
  // Setup ready event
  $(document).ready(function() {
    // Find all elements whose class contains ":"
    $('[class*=":"]').each(function(index, el) {
      var classes = $(el).attr('class').split(' ');
      
      // Go through each of this element's classes
      $.each(classes, function(i, cls) {
        // Is this class a key-value pair?
        if (cls.indexOf(':') >= 0) {
          // Find the key and value
          var data = cls.split(':');
          var key   = data[0];
          var value = data[1];
          
          if (key && value) {
            // Set data
            $.data(el, key, value);
            // Remove class
            $(el).removeClass(cls);
          }
        }
      }); // end each classes
    });   // end each class
  });     // end ready
})(jQuery);