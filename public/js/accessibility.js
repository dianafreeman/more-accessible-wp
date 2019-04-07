(function($) {

    $('#dyslexia-toggle').click(function() {
        $('p').toggleClass('openDyslexic');
        $('a').toggleClass('openDyslexic');
        $('h1').toggleClass('openDyslexic');
        $('h3').toggleClass('openDyslexic');
        $('h4').toggleClass('openDyslexic');
        $('ul').toggleClass('openDyslexic');

    });

})(jQuery); // end on document load;