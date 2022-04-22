// nav-bar
const navList = document.querySelector(".nav-bar ul");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".opneMenu");


openMenu.addEventListener("click",(e)=>{
  console.log(e);
});
closeMenu.addEventListener("click",close);
// slider
$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

