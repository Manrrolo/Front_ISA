import $ from 'jquery';

$(function () {
  $('.toggle').on('click', function () {
    if ($('.item').hasClass('active')) {
      $('.item').removeClass('active');
    } else {
      $('.item').addClass('active');
    }
  });
  $('.color-panel').on('click', function (e) {
    e.preventDefault();
    $('.color-changer_2').toggleClass('color-changer_2-active');
  });
});
