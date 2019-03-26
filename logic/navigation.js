$(document).ready(function() {

    $("#mobile-nav").hide();

    var clickCounter = 0;

    $("#mobile-menu").click(function() {
        clickCounter = clickCounter + 1;
        if(clickCounter % 2 == 1 ) {
            $("#mobile-nav").slideDown();
        }else {
            $("#mobile-nav").slideUp();
        }

    })

})