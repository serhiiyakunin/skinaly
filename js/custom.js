 $(window).load(function () {
    $('.before-after').twentytwenty({
      before_label: 'Without skinali', // Set a custom before label
      after_label: 'With skinali' // Set a custom after label
    });
    $('.before-slider').slick({
      draggable: false,
      dots: true,
      dotsClass: "before-slider__dots",
      prevArrow: $(".arrow-left"),
      nextArrow: $(".arrow-right")
    });
   $('.menu-button').on('click', function () {
     $('.menu').toggleClass('menu_active')
   });
  
    //        Select setting 
    $('.select').on('click', function () {
      $('.select__dropdown').toggleClass('select__dropdown_open')
    });
    $('.select__option').on('click', function () {
      var value = $(this).attr('data-value');
      $('#select-type').val(value)
      $('.select_checked').text(value)
      
    });
    $("a[href*='#'").on('click', function () {
      var href = $(this).attr("href")

      switch(href) {
        case "#offer":
          $("html, body").animate({ scrollTop: $(href).offset().top - 200 + "px"});
          return false
        case "#features":
          $("html, body").animate({ scrollTop: $(href).offset().top - 50 + "px"});
          return false
        case "#catalog":
          $("html, body").animate({ scrollTop: $(href).offset().top - 50 + "px"});
          return false
        case "#price":
          $("html, body").animate({ scrollTop: $(href).offset().top - 50 + "px"});
          return false
        case "#before":
          $("html, body").animate({ scrollTop: $(href).offset().top - 50 + "px"});
          return false
        case "#discount":
          $("html, body").animate({ scrollTop: $(href).offset().top - 200 + "px"});
          return false
        case "#factory":
          $("html, body").animate({ scrollTop: $(href).offset().top - 50 + "px"});
          return false
  
      } 
    });
   $("input[type='tel']").mask("+38(099) 999-99-99");
   
  //  Show the map only when scrolled to it
   var reviews = $('.reviews');
   var reviewsTop = reviews.offset().top;
   $(window).bind('scroll', function () {
     var windowTop = $(this).scrollTop();
     if (windowTop > reviewsTop) {
       $('#map').html('<iframe src="https://www.google.com/maps/d/embed?mid=1t_d8Wrq7HK3g0-hAmlTfmwr5DEM&ehbc=2E312F" width="100%"height="480"></iframe>')
       $(window).unbind('scroll')
     }
   })
  });