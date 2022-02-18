$(document).ready(function () {

  $('.header-up__search-icon').click(function () {
    $('.search-line').slideDown();
  });

  $('.search-line__close').click(function () {
    $('.search-line').slideUp();
  });

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var searchLineOpen = $(".search-line"); // тут указываем ID элемента
    if (!searchLineOpen.is(e.target) // если клик был не по нашему блоку
      &&
      searchLineOpen.has(e.target).length === 0) { // и не по его дочерним элементам
      searchLineOpen.slideUp();
    }
  });


  $('.cart').click(function () {
    $('.cart-block').addClass('cart-block--open');
  });

  $('.cart-block__close').click(function () {
    $('.cart-block').removeClass('cart-block--open');
  });

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var cartOpen = $(".cart-block"); // тут указываем ID элемента
    if (!cartOpen.is(e.target) // если клик был не по нашему блоку
      &&
      cartOpen.has(e.target).length === 0) { // и не по его дочерним элементам
      cartOpen.removeClass('cart-block--open');
    }
  });

  $('.burger').click(function () {
    $('.mob-menu').addClass('mob-menu--open');
  });

  $('.mob-menu__close').click(function () {
    $('.mob-menu').removeClass('mob-menu--open');
  });

  $('.header-down__link').click(function () {
    $('.mob-menu').removeClass('mob-menu--open');
  })

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var mobMenuOpen = $(".mob-menu"); // тут указываем ID элемента
    if (!mobMenuOpen.is(e.target) // если клик был не по нашему блоку
      &&
      mobMenuOpen.has(e.target).length === 0) { // и не по его дочерним элементам
      mobMenuOpen.removeClass('mob-menu--open');
    }
  });


  var swiper = new Swiper('.first-slider', {
    simulateTouch: false,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.first-slider__arrow--next',
      prevEl: '.first-slider__arrow--prev',
    },
    pagination: {
      el: '.first-slider__pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.gallery-slider', {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.gallery-slider__arrow--next',
      prevEl: '.gallery-slider__arrow--prev',
    },
    autoplay: {
      delay: 3000,
    },
  });


  //  $('.type-pc-har__question').mouseenter(function () {
  //    $(this).find('.type-pc-har__hint').slideDown();
  //    $(this).addClass('relative');
  //  });
  //  $('.type-pc-har__question').mouseleave(function () {
  //    $(this).find('.type-pc-har__hint').slideUp();
  //    $(this).removeClass('relative');
  //  });
  //
  //
  //  $('.type-pc-har__close').click(function () {
  //    $(this).closest('.type-pc-har__hint').hide(300);
  //    $(this).closest('.type-pc-har__question').removeClass('relative');
  //  });

  $('.performance-tabs__item').click(function () {
    var tabs_id = $('#' + $(this).attr('rel'));
    $('.performance-tabs__item').removeClass('performance-tabs__item--active');
    $('.performance__tab-content').hide();
    $('.performance-table__progres').animate({
      right: '100%',
      opacity: '0',
    }, 1200);
    $(tabs_id).show();
    $(tabs_id).find('.performance-table__row').find('.performance-table__progres').animate({
      right: '0',
      opacity: '1',
    }, 1200);
    $(this).addClass('performance-tabs__item--active');
  })

  //select
  //  $(".filter__select").selectmenu();

  //Модалка

  $('.show_popup').click(function () {
    var popup_id = $('#' + $(this).attr('rel'));
    $(popup_id).show();
    $(popup_id).find('.my-modal').addClass('modal-open');
    $('html').addClass('hiden');
  })
  $('.close-popup').click(function () {
    $(this).closest(".my-modal").removeClass('modal-open');
    $(this).closest(".modal-container").hide();
    $('html').removeClass('hiden');
  });

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var modalOpen = $(".modal-open"); // тут указываем ID элемента
    if (!modalOpen.is(e.target) // если клик был не по нашему блоку
      &&
      modalOpen.has(e.target).length === 0) { // и не по его дочерним элементам
      modalOpen.closest('.modal-container').hide();
      $('html').removeClass('hiden');
    }
  });

  $('.configurate-item').click(function () {
    $(this).closest('.configurate-block__grid').find('.configurate-item').removeClass('configurate-item--active');
    $(this).addClass('configurate-item--active');
  });


  // поле счетчик
  $('.configurate-contre__plus').click(function () {
    var number = $(this).closest('.configurate-contre').find('.configurate-contre__number');
    number.val(parseInt(number.val()) + 1);
    number.change();
    var numberConfigurate = $(this).closest('.configurate-contre').find('.configurate-contre__number').val();
    if (numberConfigurate > 0) {
      $(this).closest('.configurate-contre').addClass('configurate-contre--active');
    }
    return false;
  });

  $('.configurate-contre__minus').click(function () {
    var number = $(this).closest('.configurate-contre').find('.configurate-contre__number');
    var count = parseInt(number.val()) - 1;
    count = count < 1 ? 0 : count;
    number.val(count);
    number.change();
    var numberConfigurate = $(this).closest('.configurate-contre').find('.configurate-contre__number').val();
    if (numberConfigurate == 0) {
      $(this).closest('.configurate-contre').removeClass('configurate-contre--active');
    }
    return false;
  });

  // поле счетчик - конец

  $('.configurate-tabs').click(function () {
    var tabs_id2 = $('#' + $(this).attr('rel'));
    $(this).closest('.configurate-block__down').find('.configurate-tab-content').hide();
    $(this).closest('.configurate-block__down').find(tabs_id2).show();
  })

  $('.category-tabs__tab').click(function () {
    $('.category-tabs__tab').removeClass('category-tabs__tab--active');
    $(this).addClass('category-tabs__tab--active');
    var tabs_id3 = $('#' + $(this).attr('rel'));
    $('.container-tab-wrap').hide();
    $(tabs_id3).show();
  });


  $(".animate-field").focus(function () {

    $(this).parent(".form-modal__row").each(function () {
      $(".form-modal__description", this).css({
        "line-height": "16px",
        "font-size": "10px",
        "top": "-8px"
      })
      $(".form-modal__border", this).css({
        "border-color": "rgba(16, 17, 18, 1)",
        "border-bottom-color": "rgba(16, 17, 18, 1)"
      })
      $("input", this).css({
        "opacity": "1"
      })
      $("textarea", this).css({
        "opacity": "1"
      })
    });
  }).blur(function () {
    if ($(this).val() == "") {
      $(this).parent(".form-modal__row").each(function () {
        $(".form-modal__description", this).css({
          "line-height": "24px",
          "font-size": "18px",
          "top": "10px"
        })
        $(".form-modal__border", this).css({
          "border-color": "rgba(16, 17, 18, 0)",
          "border-bottom-color": "rgba(16, 17, 18, 0.3)"
        })
        $("input", this).css({
          "opacity": "0"
        })
        $("textarea", this).css({
          "opacity": "0"
        })
      });
    }
  });

  $("input[type=tel]").inputmask("9 (999) 999-9999");

  // Плавающие меню
  $(window).scroll(function () {
    if ($(this).scrollTop() > 15) {
      $('.header-up').addClass('fixed');
    } else if ($(this).scrollTop() < 15) {
      $('.header-up').removeClass('fixed');
    }
  });

  $(".stick-block").stick_in_parent({
    offset_top: 60,
    recalc_every: true,
  });

  $(window).scroll(function () {
    var
      top = $(window).scrollTop(),
      bottom = 0,

      trigger_top = 0,

      elem = $('.performance__tab-content'),
      elem_top = null;
    if (top) {
      bottom += top;
      bottom += window.innerHeight;

      trigger_top += top;
      trigger_top += window.innerHeight / 2;

      if (elem) {
        elem_top = elem.offset().top;

        //console.log( top, bottom );
        //console.log( elem_top, trigger_top );

        if ((trigger_top + 40) >= elem_top && (trigger_top - 40) <= elem_top) {
          console.log('reached');
          $(elem).removeClass('none-progres')

        } else {
          console.log('leave');

        }

      }

    }

  });

});


///*Яндекс карта*/
//ymaps.ready(init);
//var myMap,
//  myPlacemark;
///*Здесь надо указывать координаты центра карты*/
//function init() {
//  myMap = new ymaps.Map("map", {
//    center: [55.835472568913204, 37.38712749999999],
//    zoom: 15,
//    controls: ['geolocationControl']
//  });
//
//  myMap.behaviors.disable([
//    'scrollZoom',
//  ]);
//  /*Здесь надо указывать адрес до балуна и настраивать местоположение и размеры*/
//  myPin = new ymaps.GeoObjectCollection({}, {
//    iconLayout: 'default#image',
//    iconImageHref: 'img/balun.svg',
//    iconImageSize: [60, 48],
//    iconImageOffset: [-18, -40]
//  });
//  /*Здесь указывать кодинаты для местоположения метки*/
//  myPlacemark = new ymaps.Placemark([55.835472568913204, 37.38712749999999], {});
//
//  myPin.add(myPlacemark);
//  myMap.geoObjects.add(myPin);
//};