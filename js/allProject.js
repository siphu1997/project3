$(document).ready(function() {
  //// NAV
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
  // NAV
  var nav = $(".nav-bar");
  $(window).scroll(function() {
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
  //END NAV

  // All handle click
  $(".nav-bar svg").click(function() {
    $(this).toggleClass("open");
    $(".nav-bar").toggleClass("open");
    $("body").toggleClass("overflowHd");
  });
  var ctnAllProject = $("#allProject");
  var numberOfItemShow = 8;
  var data = [
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
    },
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
    },
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
    },
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
    },
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
    },
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

  var item = data.map((item, index) => {
    if (index >= numberOfItemShow) {
      return;
    }
    return `
          <div
            class="item wow zoomInDown col-md-6 col-lg-4 col-xl-3 px-0"
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
        `;
  });
  ctnAllProject.append(item);

  $("#btnShowMore").click(function() {
    var newItem = data.map((item, index) => {
      if (index >= numberOfItemShow + 4) {
        return;
      }

      if (index < numberOfItemShow) {
        return;
      }

      return `
              <div
                class="item wow zoomInUp col-md-6 col-lg-4 col-xl-3 px-0"
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
            `;
    });
    ctnAllProject.append(newItem);
    console.log(newItem.filter(item => item !== undefined).length);

    if (newItem.filter(item => item !== undefined).length <= 0) {
      return;
    }
    window.scrollBy(0, (window.innerHeight / 100) * 75);
    numberOfItemShow += 4;
  });

  new WOW().init();
});
