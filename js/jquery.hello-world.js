//by including everything in the (function() {}) self-enclosed JavaScript pattern, we’re making sure that all the variables in our plugin will stay safely outside of the global namespace
(function ($) {

//$.fn is jQuery’s way of allowing you to define your plugin, which we’ve named helloWorld
  $.fn.helloWorld = function (options) {

    //Establish our default settings
    var settings = $.extend({

      text      : 'Hello, World!',
      color     : null,
      fontStyle : null,

      //complete = callback, we see our callback as our plugin is executed
      complete  : null

    }, options);

    //loops through all elemets that helloWorld plugin targets
    return this.each(function () {

      $(this).text(settings.text);

      if (settings.color) {
        $(this).css('color', settings.color);
      }

      if (settings.fontStyle) {
        $(this).css('font-style', settings.fontStyle);
      }

      if ($.isFunction(settings.complete)) {
        settings.complete.call(this);
      }

    });

  }

}(jQuery));
