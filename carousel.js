//
//Yhteistyökaruselli
//
$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
});

//
//Quotes
//
var $status = $('.quotes-counter');
var totalCounter = 4; //hardcodettu slidejen määrä, koska kahden slicksliderin käyttäminen hajottaa sliderin funktioita 
$('.quote-slider').on('init reInit afterChange', function() {
  var currentCounter = $('.slick-current').attr("data-slick-index");
  currentCounter++ //nollaindeksin korjaus    
  $status.html( '<span class="current_slide">' + currentCounter + '</span> / <span class="total_slides"> ' + totalCounter + '</span>');
});


$(document).ready(function(){
  $('.quote-slider').slick({
    infinite:false,
    arrows: true,
    prevArrow:"<div class='quotes-prev'><i class='fas fa-long-arrow-alt-left' aria-hidden='true'></i></div>",
    nextArrow:"<div class='quotes-next'><i class='fas fa-long-arrow-alt-right' aria-hidden='true'></i></div>",
    appendArrows: '.slide-count'

  }

  )
})