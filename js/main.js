var isLoaded = false;
$(window).on("load", function() {
  isLoaded = true;
});

setTimeout(() => {
  checkLoad();
}, 3000);
function checkLoad() {
  if (isLoaded) {
    $(".loading").addClass("closeLoading");
    $(".lds-ellipsis").css("display", "none");
    $("#slider1").trigger("play.owl.autoplay", [7000]);
    $("body").css("overflow-y", "");
  } else {
    console.log("wait loading");
    setTimeout(() => {
      checkLoad();
    }, 1000);
  }
}

$(document).ready(function() {
  // const logo = document.querySelectorAll(".loading path");
  // for (let i = 0; i < logo.length; i++) {
  //   const element = logo[i];
  //   console.log(element.getTotalLength());
  // }

  // function add animate
  function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add("animated", animationName);

    function handleAnimationEnd() {
      node.classList.remove("animated", animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      if (typeof callback === "function") callback();
    }

    node.addEventListener("animationend", handleAnimationEnd);
  }

  // START ====> init Slider 1
  let dataSlider1 = [
    {
      bgUrl: "./imgs/building3.jpg",
      title: "modern hotel in HCM 1",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia alias, ab qui corrupti, voluptatem totam nam laborum iure, recusandae porro repellat! Enim tempora delectus voluptatem sit expedita asperiores necessitatibus ipsam!"
    },
    {
      bgUrl: "./imgs/build4.jpg",
      title: "modern hotel in HCM 2",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia alias, ab qui corrupti, voluptatem totam nam laborum iure, recusandae porro repellat! Enim tempora delectus voluptatem sit expedita asperiores necessitatibus ipsam!"
    },
    {
      bgUrl: "./imgs/building1.jpg",
      title: "modern hotel in HCM 3",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia alias, ab qui corrupti, voluptatem totam nam laborum iure, recusandae porro repellat! Enim tempora delectus voluptatem sit expedita asperiores necessitatibus ipsam!"
    },
    {
      bgUrl: "./imgs/154713068712087.jpg",
      title: "modern hotel in HCM 4",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia alias, ab qui corrupti, voluptatem totam nam laborum iure, recusandae porro repellat! Enim tempora delectus voluptatem sit expedita asperiores necessitatibus ipsam!"
    }
  ];
  let slider1 = $("#slider1");

  let items = dataSlider1.map(
    item => `
  <div class="item slow" style="background-image: url(${item.bgUrl});">
    <div class="item__background">
      <div class="container">
        <h1>${item.title}</h1>
        <p>
          ${item.content}
        </p>
        <button>Read more</button>
      </div>
    </div>
  </div>
  `
  );
  slider1.append(items);

  var owlSlider = $("#slider1");
  owlSlider.owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    items: 1,
    touchDrag: false,
    mouseDrag: false,
    // autoplay: true,
    // autoplayTimeout: 8000,
    animateOut: "flipOutY",
    animateIn: "fadeInRight",
    onChanged: onChanged,
    onTranslate: onTranslate,
    onTranslated: onTranslated
  });

  function fixOwlCurrentIdx(event) {
    let current = event.item.index + 1 - event.relatedTarget._clones.length / 2;
    let itemsCount = event.item.count;

    if (current > itemsCount || current == 0) {
      current = itemsCount - (current % itemsCount);
    }

    return current - 1;
  }

  function onChanged(event) {
    var numberOfItem = event.item.count;
    var currentIndex = fixOwlCurrentIdx(event);
    updateCurrentNumber(currentIndex + 1);
    updateNumberOfSlide(numberOfItem);
    // setAnimateTitle();
  }

  function updateCurrentNumber(value) {
    $(".brand-panel__current-number").text(`0${value}`);
  }
  function updateNumberOfSlide(value) {
    $("#numberSlider").text(`0${value}`);
  }

  var timeOutTranslate = null;
  function onTranslate() {
    let currentActiveH1 = $("#slider1 .active h1")[0];
    let currentActiveP = $("#slider1 .active p")[0];
    let currentActiveBtn = $("#slider1 .active button")[0];
    let currentActiveCon = $("#slider1 .active .container");
    currentActiveCon.css("border-right-width", "");

    timeOutTranslate = setTimeout(() => {
      currentActiveH1.classList.remove("animated", "fadeInLeft");
      currentActiveP.classList.remove("animated", "fadeInLeft");
      currentActiveBtn.classList.remove("animated", "fadeInLeft");
      timeOutTranslate = null;
    }, 1000);
  }

  var timeOutTranslated = null;
  function onTranslated() {
    timeOutTranslated = true;
    let currentActiveCon = $("#slider1 .active .container");
    let currentActiveH1 = $("#slider1 .active h1")[0];
    let currentActiveP = $("#slider1 .active p")[0];
    let currentActiveBtn = $("#slider1 .active button")[0];
    // animateCSS("#slider1 .active .container", "fadeIn");
    // border-right-width: 0.1em;

    currentActiveCon.css("border-right-width", "3px");
    setTimeout(() => {
      currentActiveH1.classList.add("animated", "fadeInLeft");
    }, 100);

    function handleAnimationEndH1() {
      currentActiveP.classList.add("animated", "fadeInLeft");
    }

    function handleAnimationEndP() {
      currentActiveBtn.classList.add("animated", "fadeInLeft");
    }
    function handleAnimationEndBtn() {
      currentActiveH1.removeEventListener("animationend", handleAnimationEndH1);

      currentActiveP.removeEventListener("animationend", handleAnimationEndP);

      currentActiveBtn.removeEventListener(
        "animationend",
        handleAnimationEndBtn
      );
      setTimeout(() => {
        timeOutTranslated = null;
      }, 10);
    }

    currentActiveH1.addEventListener("animationend", handleAnimationEndH1);
    currentActiveP.addEventListener("animationend", handleAnimationEndP);
    currentActiveBtn.addEventListener("animationend", handleAnimationEndBtn);
  }

  var timeOutAutoPlay = null;

  function openAutoPlay() {
    owlSlider.trigger("play.owl.autoplay");
  }
  function stopAutoPlay() {
    timeOutAutoPlay = null;
    owlSlider.trigger("stop.owl.autoplay");
    timeOutAutoPlay = setTimeout(openAutoPlay, 5000);
  }

  var isNavClick = null;
  $(".sestion-slider__next").click(function() {
    if (isNavClick || timeOutTranslate || timeOutTranslated) return;
    stopAutoPlay();
    isNavClick = setTimeout(() => {
      owlSlider.trigger("next.owl.carousel");
      isNavClick = null;
    }, 100);
  });

  $(".sestion-slider__prev").click(function() {
    if (isNavClick || timeOutTranslate || timeOutTranslated) return;

    stopAutoPlay();
    isNavClick = setTimeout(() => {
      owlSlider.trigger("prev.owl.carousel");
      isNavClick = null;
    }, 100);
  });
  // do 1 first
  onTranslated();
  // END ====>  init Slider 1

  // START ====> init Carousel Project
  let carouselProject = $("#carouselProject");

  let dataCarousel = [
    {
      url: "./imgs/house4.jpeg",
      category: "Architecture",
      title: "Restaurant in HCM"
    },
    {
      url: "./imgs/house.jpg",
      category: "Architecture",
      title: "Residence in Ha Noi"
    },
    {
      url: "./imgs/album/furniture2.jpeg",
      category: "Furniture",
      title: "Furniture in apartment"
    },
    {
      url: "./imgs/house1.jpeg",
      category: "Architecture",
      title: "Aparment in Sai Gon"
    },
    {
      url: "./imgs/NARROW URBAN HOUSES LIST.jpeg",
      category: "Architecture",
      title: "Villa in Dalat"
    },
    {
      url: "./imgs/album/architecture221.jpeg",
      category: "Architecture",
      title: "Aparment in Sai Gon"
    },
    {
      url: "./imgs/album/furniture19.jpeg",
      category: "Furniture",
      title: "Aparment in Sai Gon"
    }
  ];

  let itemCarousel = dataCarousel.map(
    item =>
      `
      <div
        class="item wow flipInY"
      >
        <div
          class="item__img"
          style="background-image: url('${item.url}')"
        ></div>
        <div class="item__background">
          <h3>${item.title}</h3>
          <h4>${item.category}</h4>
          <div class="item__more" onclick={window.location.href="./projectDetail.html"}>
            <i class="fas fa-plus-circle"></i>
          </div>
        </div>
      </div>
    `
  );

  carouselProject.append(itemCarousel);

  carouselProject.owlCarousel({
    loop: true,
    margin: 0,
    dots: false,

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      },
      1440: {
        items: 4
      }
    }
  });

  $(".project__next").click(function() {
    isNavClick = setTimeout(() => {
      carouselProject.trigger("next.owl.carousel");
    }, 100);
  });

  $(".project__prev").click(function() {
    isNavClick = setTimeout(() => {
      carouselProject.trigger("prev.owl.carousel");
    }, 100);
  });

  // END ====> init Carousel Project
  var nav = $(".nav-bar");
  $(window).scroll(function() {
    animationInAbout();
    // myAnimationClass();
    // myAnimationClass();
    var _this = $(this);
    if (_this.scrollTop() > 800) {
      if (nav.hasClass("nav-bar--fixedNav")) {
        return;
      }
      nav.addClass("nav-bar--fixedNav");
      animateCSS(".nav-bar", "fadeInDown");
    } else {
      if (!nav.hasClass("nav-bar--fixedNav")) {
        // nav.css("height", "");
        return;
      }
      animateCSS(".nav-bar", "fadeOutUp", function() {
        nav.removeClass("nav-bar--fixedNav");
      });
    }
  });

  // Set lazy animation
  function animationInAbout() {
    var elAbout = [
      $(".about_architecture"),
      $(".about_int"),
      $(".about_planing")
    ];
    if (elAbout[elAbout.length - 1].hasClass("runAni")) {
      return;
    }

    var scrollTop = $(window).scrollTop() + window.innerHeight;
    for (let i = 0; i < elAbout.length; i++) {
      const element = elAbout[i];

      if (element.offset().top < scrollTop) {
        element.addClass("runAni");
      }
    }
  }

  // wow zoomInUp
  // Set wow for client logo
  var timeDelayOfClientLogo = 0;
  $(".client .item").each(function(index, element) {
    $(this).addClass("wow zoomInUp");
    $(this).attr("data-wow-delay", timeDelayOfClientLogo + "s");
    timeDelayOfClientLogo += 0.1;
  });

  // function myAnimationClass() {
  //   var allEl = $(".m-lz-fadeIn");
  //   if ($(allEl[allEl.length - 1]).hasClass("animated")) {
  //     return;
  //   }

  //   var scrollTop = $(window).scrollTop() + window.innerHeight;
  //   for (let i = 0; i < allEl.length; i++) {
  //     const element = $(allEl[i]);

  //     if (element.offset().top + 300 < scrollTop) {
  //       var allClass = element[0].classList;
  //       var typeFade = allClass[allClass.length - 1].split("--")[1];
  //       console.log(typeFade);

  //       element.addClass(`animated ${typeFade}`);
  //     }
  //   }
  // }

  // All handle click
  $(".nav-bar svg").click(function() {
    $(this).toggleClass("open");
    $(".nav-bar").toggleClass("open");
    $("body").toggleClass("overflowHd");
  });

  new WOW().init();
});
