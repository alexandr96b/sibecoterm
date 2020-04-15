$(document).ready(function () {



function moveMenu2(){
  if ($(window).width() < 768) {
         $(function(){ 

           
        })            
  } else{
         $(function(){ 
              setTimeout(function() {
                  $('.animate-top').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1500);
              setTimeout(function() {
                  $('.animate-left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 1500);              
              setTimeout(function() {
                  $('.animate-right').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 2000); 
              setTimeout(function() {
                  $('.animate-down').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInDown',
                    offset: 0
                  });
              }, 1500);                                                        

                                        
     })        
  }
}
moveMenu2();

$(window).resize(function(){
    moveMenu2();
});


});



