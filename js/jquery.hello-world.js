//by including everything in the (function() {}) self-enclosed JavaScript pattern, we’re making sure that all the variables in our plugin will stay safely outside of the global namespace
(function($) {

  //$.fn is jQuery’s way of allowing you to define your plugin, which we’ve named helloWorld
  $.fn.helloWorld = function( customText ) {

    // Future home of "Hello, World!"
    //change every 'this' with Hello, World!
    this.each(function(){
      return $(this).text( customText );
    });

  }

}(jQuery));
