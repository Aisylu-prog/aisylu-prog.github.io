const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close');
      closeHamburger = document.querySelector('.menu__link');

hamburger.addEventListener('click', () => { /* callbackfunction */
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => { /* callbackfunction */
    menu.classList.remove('active');
});

closeHamburger.addEventListener('click', () => { /* callbackfunction */
    menu.classList.remove('active');
});


  /*  smooth scroll */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
   });

/*    $("a[href='#promo']").click(function() {
      const _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top+"px"});
        return false;
   }); */

