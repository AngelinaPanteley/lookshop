$(document).ready(function() {
  $('#heading-slider').flexslider({
    animation: "slide"
  });

  $('#catalog-slider-1').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 220,
    itemMargin: 30,
    touch: false,
    slideshow: false
	});

  $('#catalog-slider-2').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 220,
    itemMargin: 30,
    touch: false,
    slideshow: false
  });

  $('#catalog-slider-3').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 220,
    itemMargin: 30,
    touch: false,
    slideshow: false
  });

  $('#catalog-slider-4').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 220,
    itemMargin: 30,
    touch: false,
    slideshow: false
  });

  $('#tab-container').easytabs();
});
