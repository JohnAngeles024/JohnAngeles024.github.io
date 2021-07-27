$( document ).ready(function() {

    $(".nav__hamburger").click(function(){
        $(".nav__wrapper").slideToggle(1000);
      });
      
    });


    $(document).ready(function() {
      var a = $(".header").offset().top;

      $(document).scroll(function(){
          if($(this).scrollTop() > a)
          {   
             $('.header').css({"background":"black"});
             $('.header').fadeIn("5000")
            
          } else {
             $('.header').css({"background":"none"});
             
          }
      });
  });