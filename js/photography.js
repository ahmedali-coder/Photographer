/* global $, alert, console */
$(function ()
{
    'use strict';
    var lastScrollTop = 0;
    $(document).on('scroll', function ()
    {
        var currentScrollTop = $(this).scrollTop();
        if(currentScrollTop > lastScrollTop)
        {
            $('nav').slideUp(200);
        }
        else
        {
            $('.navbar').slideDown(200);
        }
        lastScrollTop = currentScrollTop;
    });
////////////////////////////////////
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    $(window).resize(function()
    {
      if ($(window).width() <= 992)
      {  
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 2,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
      else
      {
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }     
    });
///////////////////////////////////////
    $('.Q-A .questions .question-no i').click(function ()
    {
      $(this).siblings('p').slideToggle(),
      $(this).toggleClass('fa-angle-down').toggleClass('fa-angle-up')
    });
    new WOW().init();
    $("body").niceScroll
    ({
      cursorcolor: "#2b3439",
      cursorwidth: "10px",
      cursorborder: "none",
      zindex: "2",
      scrollspeed: 150,
      mousescrollstep: 100,
    });
});