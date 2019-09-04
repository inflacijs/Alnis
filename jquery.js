$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:7000,
    animateOut:'fadeOut',
    animateIn:'fadeIn',
    smartSpeed:10000,
    dotsSpeed: 1000,
    // dotsContainer: '#carousel-custom-dots',
    
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// Just trying to add zoom!
// $(".zoom1").on("load",
// function(){
//     $('.zoom1').animate({height:'+=100',width:'+=100'}, 5000);
// });

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});