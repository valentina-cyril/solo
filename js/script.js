/* preloader*/
$(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/**Team */


$(function(){
    $('#team-members').owlCarousel({
        items:2,
        autoplay: true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            }
        }
    });
});


/**progress bars */
$(function(){
    $('#progressbar').waypoint(function(){

        $('.progress-bar').each(function(){
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 2000);
        });

        this.destroy();
    }, {
        offset:'bottom-in-view'
    });
        
    
    
}) 
/**      Resposive tabs* */

$(function(){
    $("#services-tabs").responsiveTabs({
        animation:'slide'
    })

})



/****portfoilo */
$(window).on('load',function(){
    //call isotope
    $('#isotope-container').isotope({
     });
     //buttonclick filter
     $('#isotope-filters').on('click','button',function(){
         
        //get filter value
        var filterValue = $(this).attr('data-filter');
        //filter

        $('#isotope-container').isotope({
            filter:filterValue
            
        });

        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
     });

})

//magnifier
$(function(){
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
           enabled: true
        }
      });

})
//slider for testimonial

$(function(){
    $('#testimonial-slider').owlCarousel({
        items:1,
        autoplay: false,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
});

//counter
$(function(){
    $('.counter').counterUp({
        delay: 15,
        time: 3000,
    });
})

//slider for clients
$(function(){
    $('#clients-lists').owlCarousel({
        items:6,
        autoplay: true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            768:{
                items:6
            }
        }
        
    });
});

//map

 $(window).on('load',function(){
    //map variables

    //  var addressString = 'mutala';
    // var myLatlng = {lat:6.571840,lng:3.324130};

    // var map = new google.maps.Map(document.getElementById('map'),{
    //      zoom: 11,
    //      center: myLatlng,
    //  });

    //  var marker = new google.maps.Marker({
    //      position: myLatlng,     
    //      map: map,
    //      title: 'click to see address'

    //  });


    //  google.maps.event.addDomListener(window,'resize',function(){
    //      var center = map.getCenter();
    //      google.maps.event.trigger(map,'resize');
    //      map.setCenter(center)
    //  })





});



//show and hide
$(function () {

    showHideNav();

    $(window).scroll(function(){
        showHideNav();
    });

    function showHideNav() {

            if($(window).scrollTop() > 50 ) {

                $('nav').addClass('white-nav-top');
    
                $('.navbar-brand img').attr('src','img/logo/logo-dark.png');

                $('.btn-back-to-top').fadeIn();

            } else {
                $('nav').removeClass("white-nav-top");

                $('.navbar-brand img').attr('src','img/logo/logo.png');
                 
                $('.btn-back-to-top').fadeOut();
            }
   }   
    

});



////smooth scrolling
$(function(){

    $('a.smooth-scroll').click(function(event){
        event.preventDefault();
        ////getting section i d
        var section_id = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, 'easeInOutExpo')

    });

})
 
//mobile menu

$(function() {
    //show mobile
    $('#mobile-nav-open-btn').click(function(){
        $('#mobile-nav').css('height','100%')
    });
    $('#mobile-nav-close-btn,#mobile-nav a').click(function(){
        $('#mobile-nav').css('height','0%')
    });
});


////////////animation////////////a
$(function () {
    new WOW().init();
});


$(window).on('load', function () {
    $('#homeheading-1').addClass('animated fadeInDown');
    $('#homeheading-2').addClass('animated fadeInLeft');
    $('#hometxt').addClass('animated zoomIn');
    $('#homebtn').addClass('animated zoomIn');
    $('#arrow-down i').addClass('animated fadeInDown infinite');
    
});









































