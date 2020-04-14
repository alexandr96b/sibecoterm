$(document).ready(function () {



function moveMenu2(){
  if ($(window).width() < 768) {
         $(function(){ 

           
        })            
  } else{
         $(function(){ 
              setTimeout(function() {
                  $('.b-main-item').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 600);
              setTimeout(function() {
                  $('.b-main-content__left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 600);              
              setTimeout(function() {
                  $('.b-desc-col').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1000); 
              setTimeout(function() {
                  $('.b-title , .b-info-col , .b-main-bottom__wrapper').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1000);                                          
              setTimeout(function() {
                  $('.b-block-left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 1000);

              setTimeout(function() {
                  $('.b-block-right').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 2200);

              setTimeout(function() {
                  $('.block-left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 2200);
              setTimeout(function() {
                  $('.block-right').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 2400);              

                                        
           
     })        
  }
}
moveMenu2();

$(window).resize(function(){
    moveMenu2();
});


});



