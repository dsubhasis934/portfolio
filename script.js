$(document).ready(() => {
    // change nav color while scroll
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $(".navber").addClass("sticky");
        } else {
            $(".navber").removeClass("sticky");
        }
        if (this.scrollY > 300) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });
    // slide up window script
    $(".scroll-up-btn").click(() => {
        $('html').animate({ scrollTop: 0 });
    });

    // show mobile menu after click hamburger icon
    $(".menu-btn").click(() => {
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
    // typing animated script
    var typed = new Typed(".typing", {
        strings: ["Frontend developer", "Freelancer", "Backend developer", "UI/UX designer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend developer", "Freelancer", "Backend developer", "UI/UX designer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true, //if we decleare loop then it never stop swiping
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            }
        },


    });
});