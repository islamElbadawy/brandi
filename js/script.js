
$('.carousel').carousel();

$('.nav-pills>li').click(function(){
     $('.nav-pills>li').removeClass('active');
    $(this).addClass('active');

});

/*-- Works Filter --*/
$(function () {
    
    var filterList = {
    
      init: function () {
      
        // MixItUp plugin
        // http://mixitup.io
        $('#portfolio').mixItUp({
          selectors: {
            target: '.work-item',
            filter: '.filter' 
          },
          load: {
            filter: '.Branding, .Web, .LogoDesigne, .Photography'  
          }     
        });               
      
      }

    };
    
    // Run the show!
    filterList.init();
    
    
  }); 

 
 $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 50) {
            
            $('#navbar.navbar-default').addClass('scroll');
            
        } else {
            
            $('#navbar.navbar-default').removeClass('scroll');
        }
    });

 $('#navbar.navbar-default').onePageNav({
        scrollThreshold: 0.3, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        scrollSpeed: 850,
        filter: ':not(.external)'
  });


 $('html').niceScroll({
        
        cursorcolor: '#0eb493',
        cursorwidth: '10px',
        cursorzindex: '21',
        cursorborder: '1px solid #0eb493'
        
    });

