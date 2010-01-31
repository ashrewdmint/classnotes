# Classnotes

Store data in an element's class attribute; access jQuery data with `:data` selector.

## About

When writing JavaScript, sometimes you need to store data inside an element.
Conveniently, jQuery already handles this for you, but what if you want to set the
data in the HTML before the page loads? Custom attributes are a simple solution, but
they don't produce valid HTML. Even then, you still can't take advantage of jQuery's
data feature automatically.

Classnotes solves this problem by allowing you to set data inside of a class attribute:

    <span id="today" class="date:2009-01-30">Today</span>

This is the equivalent of `$('#today').data('date', '2009-01-30')`. Classnotes will
find any element with a class that contains key-value pairs separated by a colon, set
the appropriate data on the element, and then remove the special class.

Granted, putting data in the class attributes is still somewhat hacky, but I can't
really think of a better solution.

Classnotes also adds a new selector to jQuery, so you can select elements according to
their data. For example:

    $(':data(foo)')

This would return any element with a data key of "foo".

    $(':data(foo=bar)')

This would return any element with a data key of "foo" and a value of "bar".

## Acknowledgements

James Padolsey wrote code that was the basis for the `:data` selector in this plugin.  

*  http://james.padolsey.com/javascript/extending-jquerys-selector-capabilities/

## License

Copyright (c) 2010 Andrew Smith.

Dual licensed under the MIT and GPL licenses:

*  http://www.opensource.org/licenses/mit-license.php
*  http://www.gnu.org/licenses/gpl.html