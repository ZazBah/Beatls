$('.menu-toggle-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav_02').toggleClass('visible').css({'animation-delay':'0.6s'});;
    $('.nav-menu').toggleClass('active');
})