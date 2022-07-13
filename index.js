$(window).on("load", function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".cont").each(function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) { $(this).fadeTo(1000, 1); }
            } else {
                if ($(this).css("opacity") == 1) { $(this).fadeTo(2000, 0); }
            }
        });
    }).scroll();
});

$("#link1").on('click', function() {
    window.location = "https://balqislumbun.github.io/GiatMenembak/";
});

$("#link2").on('click', function() {
    window.location = "https://balqislumbun.github.io/TallyCountLumbun/";
});



/*https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win*/