$('.content').slick({
    centerMode: true,
    centerPadding: '90px',
    prevArrow: '<img src="arrowimg/Arrow_left.svg">',
    nextArrow: '<img src="arrowimg/Arrow_right.svg">',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  });