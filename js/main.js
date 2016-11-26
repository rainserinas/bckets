$(function() {
    attachListenerHeaderNavbar();
    attachListenerHamburgerMenu();
    slicktInitialiaze();
});


function attachListenerHeaderNavbar() {
	function navSlide() {
       var scroll_top = $(window).scrollTop();
       var url = window.location.href;
        if (scroll_top >= 150) { 
       		$("#header").addClass('sticky');
        }else{
            $("#header").removeClass('sticky');
        } 
   }
   $(window).scroll(navSlide);
}
function attachListenerHamburgerMenu() {
    //Open Hamburger Menu
    $( ".hamburger i" ).click(function() {
        $('#mySidenav').css('width','100%');
        $('body').css('background-color','rgba(0,0,0,0.4)');
    });
    //Close Hamburger Menu
    $( ".closebtn,.mobile-login" ).click(function() {
        $('#mySidenav').css('width','0');
        $('body').css('background-color','#fff');
    });
}
function slicktInitialiaze() {
    $('.image-slide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        touchMove: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    });  
}