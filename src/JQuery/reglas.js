import $ from 'jquery';
let castillo = document.getElementById('castillo');
let casa = document.getElementById('casa');
let caballero = document.getElementById('caballero');
let mago = document.getElementById('mago');
let troll = document.getElementById('troll');
$(function () {
  $('.color-panel').on('click', function (e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
  });
  $('.colors a').on('click', function (e) {
    e.preventDefault();
    var attr = $(this).attr('title');
    console.log(attr); //Probando archivo
    if (attr === 'color-red') {
      castillo.src = '../imgs/castillo rojo.png';
      casa.src = '../imgs/casa.png';
      caballero.src = '../imgs/Caballero_Rojo.png';
      mago.src = '../imgs/mago rojo izq.png';
      troll.src = '../imgs/troll rojo izq.png';
    }
    if (attr === 'color-blue') {
      castillo.src = '../imgs/castillo azul.png';
      casa.src = '../imgs/casa_azul.png';
      caballero.src = '../imgs/caballero azul izq.png';
      mago.src = '../imgs/mago azul izq.png';
      troll.src = '../imgs/troll azul izq.png';
    }
    $('head').append(
      '<link rel="stylesheet" href="../styles/' + attr + '.css">',
    );
  });
});
