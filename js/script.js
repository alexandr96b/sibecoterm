$(document).ready(function () {

$('.b-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: '<span class="b-arrow b-arrow-next icon-arrow-right"></span>',
    prevArrow: '<span class="b-arrow b-arrow-prev icon-arrow-left"></span>',    
    appendArrows: '.b-main-nav__container',
    appendDots: '.b-main-nav__container',
    variableWidth: false
});



$('.b-about-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: '.b-about-nav',
    nextArrow: '<span class="b-arrow b-arrow-next icon-arrow-right"></span>',
    prevArrow: '<span class="b-arrow b-arrow-prev icon-arrow-left"></span>', 
    appendDots: '.b-about-nav',
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.b-certificate-slider .row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: '<span class="b-arrow b-arrow-next icon-sm-arrow__right"></span>',
    prevArrow: '<span class="b-arrow b-arrow-prev icon-sm-arrow__left"></span>',     
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
        slidesToShow: 2,
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




$('.menu-icon').click(function(){
  $('.b-header-right , body').toggleClass('active');
  $('.menu-icon').toggleClass('active');
}); 

$(document).on('click', function(event) {
  if (!$(event.target).closest(".menu-icon , .b-header-right").length) {
    $('.b-header-right , body').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  event.stopPropagation();
});


function moveMenu(){
  if ($(window).width() < 767) {

        $('.b-header-top__container').appendTo('.b-header-right');

           
  } else{
         $(function(){ 


        $('.b-header-top__container').appendTo('.b-header-top__wrapper');
 
          
           
     })        
  }
}
moveMenu();

$(window).resize(function(){
    moveMenu();
});



// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,
        disableDefaultUI: false,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(52.244809, 104.150545), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.

    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
        position: new google.maps.LatLng(52.244809, 104.150545),
        map: map 
    });

}


});


