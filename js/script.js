$(document).ready(function () {


$('.validate').each(function() {
    $(this).validate({

    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            minlength: 10
        },
  check: {
    required: true
  }
    },
    messages: {
        name: {
            required: "Wpisz swoje imię"
        },
        email: {
            required: "Email jest niepoprawny.",
            email: "Email jest niepoprawny."
        },
        phone: {
            required: "Ваш номер телефона обязателен к заполнению",
    minlength: $.validator.format( "В номере телефона должно быть 10 цифр." ),
        },
        check: {
            required: "Пожалуйста, поставьте галочку соглашения с нашей политикой конфиденциальности"
        }
    },
errorPlacement: function(error, input) {
  error.insertBefore(input);
}
});
$.extend( $.validator.messages, {
required: "Это поле необходимо заполнить.",
remote: "Пожалуйста, введите правильное значение.",
email: "Email jest niepoprawny.",
url: "Пожалуйста, введите корректный URL.",
date: "Пожалуйста, введите корректную дату.",
dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
number: "Пожалуйста, введите число.",
digits: "Пожалуйста, вводите только цифры.",
creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
equalTo: "Пожалуйста, введите такое же значение ещё раз.",
extension: "Пожалуйста, выберите файл с правильным расширением.",
maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
    });
});


(function( $ ){

$(function() {

  $('.validate').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
  var form = $(this),
        btn = form.find('.btn_submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
  form.find('.b-input-text , .b-textarea').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.b-input-text , .b-textarea').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
    $(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
    $(this).addClass('empty_field');
        }
      });
    }


    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
    checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
    lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  });
});

})( jQuery );



$("#tt1").mouseover(function () {
  $("#t1").addClass('active');
  $("#t2").removeClass('active');
  $("#t3").removeClass('active');
});

$("#tt2").mouseover(function () {
  $("#t2").addClass('active');
  $("#t1").removeClass('active');
  $("#t3").removeClass('active');  
});

$("#tt3").mouseover(function () {
  $("#t3").addClass('active');
  $("#t1").removeClass('active');
  $("#t2").removeClass('active');  
});

$(document).on('mouseover', function(event) {
  if (!$(event.target).closest(".b-main-block__list ul li a , .tab-pane").length) {
    $('.tab-pane').removeClass('active');
  }
  event.stopPropagation();
});



$('.b-slider-content .row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
/*    appendArrows: '.b-work-navs',
    appendDots: '.b-work-navs',*/
    variableWidth: false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.b-team-slider .row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
/*    appendArrows: '.b-work-navs',
    appendDots: '.b-work-navs',*/
    variableWidth: false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.b-gallery-slider .row > div').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        centerMode: false,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.menu-icon').click(function(){
  $('.b-nav , body').toggleClass('active');
  $('.menu-icon').toggleClass('active');
}); 

$(document).on('click', function(event) {
  if (!$(event.target).closest(".menu-icon , .b-nav").length) {
    $('.b-nav , body').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  event.stopPropagation();
});


function moveMenu(){
  if ($(window).width() < 992) {

        $('.b-nav').appendTo('.b-container');


         $(function(){ 

        $('.b-nav > ul > li.b-drop > a').click(function(event){
          $(this).next().toggleClass('active');
          $('.b-nav > ul > li.b-drop > a').toggleClass('active');
          event.preventDefault();
        }); 
           
        })            
  } else{
         $(function(){ 


        $('.b-nav').appendTo('.b-nav-container');
 
          
           
     })        
  }
}
moveMenu();

$(window).resize(function(){
    moveMenu();
});



function moveMenu2(){
  if ($(window).width() < 768) {
         $(function(){ 


$('.b-slider-content__xs .row').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
/*    appendArrows: '.b-work-navs',
    appendDots: '.b-work-navs',*/
    variableWidth: false
});


           
        })            
  } else{
         $(function(){ 

 
          
           
     })        
  }
}
moveMenu2();

$(window).resize(function(){
    moveMenu2();
});



});


