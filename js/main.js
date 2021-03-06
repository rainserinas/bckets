$(function() {
    attachListenerHeaderNavbar();
    attachListenerHamburgerMenu();
    attachListenerSelectedCategory();
    attachListenerCloseChat();
    attachListenerOpenChat();
    attachListenerOpenPrivateMsg(); 
    slicktInitialiaze();
});
function attachListenerOpenPrivateMsg() {
    $( ".msg-list-holder .msg-list .body ul li" ).click(function() {
        $('.msg-private-holder').show();
        $('.msg-list-holder').hide();
    });
}
function attachListenerOpenChat() {
    $( ".chat-circle-holder" ).click(function() {
        $('.msg-list-holder').show('slow');
    });
}
function attachListenerCloseChat() {
    $( ".close-chat" ).click(function() {
        $('.msg-list-holder').hide('slow');
         $('.msg-private-holder').hide('slow');
    });
}
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
    $('.modal-btn').click(function() {
        $('.slick-dots li button').trigger('click')
    });
}


function attachListenerSelectedCategory() {
    $( ".cat1,.cat2,.cat3,.cat4,.cat5,.cat6,.cat7,.cat8,.cat9" ).click(function() {
        $(this).toggleClass("selected");
    });
}
