$('.ecuador .block').slick({
    dots: true,
    arrows: false, 
});
$('.catalog_rose .row').slick({    
    dots: false,
    arrows: true,  
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,            
            dots: false
          }
        },
        {
          breakpoint: 1420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        } ,
        {
            breakpoint: 703,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }         
      ]  
});
$('.causes .causes_block').slick({
    dots: false,
    arrows: false,    
});
$(".causes .causes_block").on('afterChange', function(event, slick, currentSlide){
  $(".causes .causes_counter span").text(currentSlide + 1);
});
$('.reviews .reviews_block').slick({
    dots: false,
    arrows: false, 
    slidesToShow: 1,
    slidesToScroll: 1,
});
$( function() {
  $( ".question_list" ).accordion({
    active: false,
    collapsible: true,
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });
} );                           