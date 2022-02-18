$(document).ready(function () {
  //Вывод блока с ценой в конфигураторе
  $('.configurate-item').click(function () {
    $.ajax({
      url: '../price-block-info.html',
      cache: false,
      success: function (html) {
        $(".stick-block").html(html);
      }
    });
  });

  $('.configurate-contre__minus').click(function () {
    $.ajax({
      url: '../price-block-info.html',
      cache: false,
      success: function (html) {
        $(".stick-block").html(html);
      }
    });
  });

  $('.configurate-contre__plus').click(function () {
    $.ajax({
      url: '../price-block-info.html',
      cache: false,
      success: function (html) {
        $(".stick-block").html(html);
      }
    });
  });

  $('.corps-block').click(function () {
    var inputCheck = $(this).find('.corps-block__input').prop("checked");

    if (inputCheck == false) {

    } else if (inputCheck == true) {
      $.ajax({
        url: '../price-block-info.html',
        cache: false,
        success: function (html) {
          $(".stick-block").html(html);
        }
      });
    };
  });
  
  $('.configurate-radio__wrapper').click(function () {
    var inputCheck = $(this).find('.configurate-radio__input').prop("checked");

    if (inputCheck == false) {

    } else if (inputCheck == true) {
      $.ajax({
        url: '../price-block-info.html',
        cache: false,
        success: function (html) {
          $(".stick-block").html(html);
        }
      });
    };
  });
});
