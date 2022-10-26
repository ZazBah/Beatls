$('.menu-toggle-btn').click(function(){
    $(this).toggleClass('ri-menu-line');
    $(this).toggleClass('ri-menu-4-fill');

    $('.nav-menu').toggleClass('active');
})