
$('.quotes').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true
});



$('.eventbanner').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 2,
    
  adaptiveHeight: true ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
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



$('.logos').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 4,
  
  adaptiveHeight: true ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
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


/*
To prevent the flashing of unstyled content (FOUC) I created a class ".no-fouc"
which hides the slider.  When everything is ready to roll, I simply remove the
.no-fouc class from the slider section using the script below.  I placed the CSS snippet in the head of the HTML
page so that it's loaded before other things for obvious reasons.  What about folks with JS turned off?  
Well, I don't worry about them too much anymore.  Oh my.  I feel the heat from the flames already.  :) 
*/

$( document ).ready(function() {
$('.no-fouc').removeClass('no-fouc');
});





$('.photogallery').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 4,
  
  adaptiveHeight: true ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
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









function switchStyleSheets(theme){
  $('link[title="theme"]').attr('href', theme);
  }

$(document).ready(function(){
    
    
    $('#black').click(function(event){
        event.preventDefault();
        switchStyleSheets(
            'css/black.css'
        );
    });
    
            
    $('#default').click(function(event){
        event.preventDefault();
        switchStyleSheets(
            'css/default.css'        
        );
    });
    
    
    
    $('#orange').click(function(event){
        event.preventDefault();
        switchStyleSheets(
            'css/orange.css'        
        );
    });
        
    
    
    $('#green').click(function(event){
        event.preventDefault();
        switchStyleSheets(
            'css/green.css'
        );
    });
    
});
    
                  
    
    
    
    /* this changes font size of */

    var originalSize = $('div').css('font-size');
    // reset
    $(".resetMe").click(function(){
    $('div').css('font-size', originalSize); 

    });

    // Increase Font Size
    $(".increase").click(function(){
    var currentSize = $('div').css('font-size');
    var currentSize = parseFloat(currentSize)*1.2;
    $('div').css('font-size', currentSize);

    return false;
    });

    // Decrease Font Size
    $(".decrease").click(function(){
    var currentFontSize = $('div').css('font-size');
    var currentSize = $('div').css('font-size');
    var currentSize = parseFloat(currentSize)*0.8;
    $('div').css('font-size', currentSize);

    return false;
    });




    /*
      
    var img = $(".imgsbanner div");
    var h2 = $(".imgsbanner div h2");
    var h3 = $(".imgsbanner div h3");
    var t = new TimelineMax({paused:true});

    t.set(img,{display:"none"})
    t.set(h2,{display:"none"})
    t.set(h3,{display:"none"})

    $(img).each(function(index, element)
    {
      t.from(img[index], 1, {display:"block", autoAlpha:0, scale:5, ease:Sine.easeOut})
      t.from(h2[index], .5, {display:"block", autoAlpha:0, left:"-300px", ease:Sine.easeOut})
      t.from(h3[index], .5, {display:"block", autoAlpha:0, left:"-300px", ease:Sine.easeOut})
      t.to(img[index],1,{autoAlpha:0},"+=2");
     
    })
    
    t.play();
    t.repeat(-1);

    */


   var img = $(".imgsbanner div");
   var t = new TimelineMax({paused:true});

   t.set(img,{display:"none"})

   $(img).each(function(index, element)
   {
    t.from(img[index], 1, {display:"block", autoAlpha:0, scale:5, ease:Sine.easeOut})
    t.to(img[index],1,{autoAlpha:0},"+=5");
  })

  t.play();
  t.repeat(-1);




  var images = $(".imgsabs div");
  var t_new = new TimelineMax({paused:true});

  t_new.set(images,{display:"none"})

  $(images).each(function(index, element)
  {
    t_new.from(images[index], 1, {display:"block", autoAlpha:0,  ease:Sine.easeOut})
    t_new.to(images[index],1,{autoAlpha:0},"+=4");
 })

 t_new.play();
 t_new.repeat(-1);



