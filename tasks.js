/* Sidebar Toggle */
$(document).ready(function () {
    $('.sidebarCollapse').on('click', function () {
        $('.sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
$(document).ready(function () {
    $('.sidebarCollapse_1').on('click', function () {
        $('.left_sidebar').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
/* End of sidebar toggle */
/* Full screen */
var elem = document.documentElement;
    function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    var x = document.getElementById("fullScreen");
    if (x.innerHTML === "fullscreen") {
        x.innerHTML = "fullscreen_exit";
    } else {
        x.innerHTML = "fullscreen";
    }
    }
    /* end of full screen */
    /* Change the icon of sidebar */
    function myFunction() {
        var x = document.getElementById("showMore");
        if (x.innerHTML === "toggle_off") {
            x.innerHTML = "toggle_on";
        } else {
            x.innerHTML = "toggle_off";
        }
        }
    function myFunctions() {
        var x = document.getElementById("showmore");
        if (x.innerHTML === "toggle_off") {
            x.innerHTML = "toggle_on";
        } else {
            x.innerHTML = "toggle_off";
        }
        }
    /* End of Change the icon of sidebar */
    /* Feather icon script */
    feather.replace()
    /* End of feather icon */

    /* Active class */
        /* For within Pages */
        $(".nav .sideactive a").click(function() {
            if ($(".nav .sideactive a").removeClass("active")) {
                $(this).removeClass("active");
            }
            $(this).addClass("active");
        });
            /* For different pages */
        jQuery(document).ready(function($){
                var path = window.location.pathname.split("/").pop();
    
                if(path == ''){
                    path = 'index.html';
                }
    
                var target = $('nav a[href="'+path+'"]');
                target.addClass('active');
            });
            /* End of active class */

        /* Datatable */
        
        /* end of datatable */
        
