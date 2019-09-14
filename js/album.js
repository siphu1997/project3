$(document).ready(function() {
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
    if (_this.width() < 540) {
      checkFilter($(this));
    }

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

  function checkFilter(params) {
    var _this = params;
    var rowFilter = $("#rowFilter");
    // if (_this.scrollTop() > rowFilter.offset().top + 200) {
    //   if (rowFilter.hasClass("show")) return;
    //   console.log("VAO");
    //   rowFilter.addClass("show");
    //   animateCSS("#rowFilter", "fadeInUp");
    // } else {
    //   if (!rowFilter.hasClass("show")) return;
    //   console.log("RA");
    //   animateCSS("#rowFilter", "fadeOutDown", function() {
    //     rowFilter.removeClass("show");
    //   });
    // }
    if (_this.scrollTop() > 1500) {
      if (rowFilter.hasClass("show")) {
        return;
      }
      rowFilter.addClass("show");
      animateCSS("#rowFilter", "fadeInUp");
    } else {
      if (!rowFilter.hasClass("show")) {
        // nav.css("height", "");
        return;
      }
      animateCSS("#rowFilter", "fadeOutDown", function() {
        rowFilter.removeClass("show");
      });
    }
  }

  function doReponsiveCol() {
    var width = $(window).width();
    var allCol = $("#ourAlbum2").children();
    if (width < 576) {
      $(allCol[1]).addClass("disableCol");
      $(allCol[2]).addClass("disableCol");
      $(allCol[3]).addClass("disableCol");
      return;
    }

    if (width < 760) {
      $(allCol[2]).addClass("disableCol");
      $(allCol[3]).addClass("disableCol");
      return;
    }

    if (width < 992 - 8) {
      $(allCol[3]).addClass("disableCol");
    }
  }
  doReponsiveCol();

  $(".nav-bar svg").click(function() {
    $(this).toggleClass("open");
    $(".nav-bar").toggleClass("open");
    $("body").toggleClass("overflowHd");
  });
  var data = [
    {
      id: 0,
      url: "./imgs/album/apartment.jpeg",
      category: "architecture apartment"
    },
    {
      id: 1,
      url: "./imgs/album/funiture_21.jpg",
      category: "furniture apartment"
    },
    {
      id: 2,
      url: "./imgs/album/architecture2.jpeg",
      category: "architecture apartment"
    },
    {
      id: 3,
      url: "./imgs/album/654.jpg",
      category: "furniture apartment"
    },
    {
      id: 4,
      url: "./imgs/album/architecture12a.jpeg",
      category: "architecture hotel"
    },
    {
      id: 5,
      url: "./imgs/album/architecture15.jpeg",
      category: "architecture hotel"
    },
    {
      id: 6,
      url: "./imgs/album/architecture19.jpeg",
      category: "architecture restaurant"
    },
    {
      id: 7,
      url: "./imgs/album/architecture21.jpeg",
      category: "furniture apartment"
    },
    {
      id: 8,
      url: "./imgs/album/funiture_aa.jpg",
      category: "furniture"
    },
    {
      id: 9,
      url: "./imgs/album/architecture111.jpeg",
      category: "architecture apartment"
    },
    {
      id: 10,
      url: "./imgs/album/architecture123.jpeg",
      category: "architecture apartment"
    },
    {
      id: 11,
      url: "./imgs/album/architecture221.jpeg",
      category: "architecture apartment hotel"
    },
    {
      id: 12,
      url: "./imgs/album/architecture345.jpeg",
      category: "architecture apartment hotel"
    },
    {
      id: 13,
      url: "./imgs/album/architecture411.jpeg",
      category: "furniture hotel"
    },
    { id: 14, url: "./imgs/album/furniture.jpeg", category: "furniture hotel" },
    {
      id: 15,
      url: "./imgs/album/furniture2.jpeg",
      category: "furniture hotel"
    },
    {
      id: 16,
      url: "./imgs/album/furniture3.jpeg",
      category: "furniture hotel"
    },
    {
      id: 17,
      url: "./imgs/album/furniture4.jpeg",
      category: "furniture hotel"
    },
    {
      id: 18,
      url: "./imgs/album/funiture_223.jpg",
      category: "furniture apartment"
    },
    {
      id: 19,
      url: "./imgs/album/furniture6.jpeg",
      category: "furniture restaurant"
    },
    { id: 20, url: "./imgs/album/furniture7.jpeg", category: "furniture" },
    {
      id: 21,
      url: "./imgs/album/furniture8.jpeg",
      category: "furniture hotel"
    },
    {
      id: 22,
      url: "./imgs/album/furniture19.jpeg",
      category: "furniture restaurant"
    },
    { id: 23, url: "./imgs/album/hotel.jpeg", category: "furniture" },
    {
      id: 24,
      url: "./imgs/album/house_123.jpeg",
      category: "architecture apartment hotel"
    },
    {
      id: 25,
      url: "./imgs/album/architecture22.jpeg",
      category: "architecture apartment"
    },
    {
      id: 26,
      url: "./imgs/album/restaurant4.jpeg",
      category: "furniture restaurant"
    },
    {
      id: 27,
      url: "./imgs/album/restaurant100.jpeg",
      category: "furniture restaurant"
    },
    {
      id: 28,
      url: "./imgs/album/apartment_22.jpg",
      category: "architecture apartment"
    },
    {
      id: 29,
      url: "./imgs/album/Restaurant5.jpeg",
      category: "furniture restaurant"
    },
    {
      id: 30,
      url: "./imgs/album/architecture4.jpeg",
      category: "architecture hotel"
    },
    {
      id: 31,

      url: "./imgs/album/restaurant.jpeg",
      category: "furniture restaurant"
    },
    {
      id: 32,
      url: "./imgs/album/apartment123511.jpg",
      category: "architecture apartment"
    },
    {
      id: 33,
      url: "./imgs/album/funiture_219.jpg",
      category: "furniture apartment"
    },
    {
      id: 34,
      url: "./imgs/album/apartment_98.jpg",
      category: "architecture apartment"
    },
    {
      id: 35,
      url: "./imgs/album/apartment2.jpeg",
      category: "architecture apartment"
    },
    {
      id: 36,
      url: "./imgs/album/funiture_76.jpg",
      category: "apartment"
    },
    {
      id: 37,
      url: "./imgs/album/funiture_123.jpg",
      category: "furniture apartment"
    },
    {
      id: 38,
      url: "./imgs/album/Restaurant3.jpeg",
      category: "furniture restaurant"
    },
    {
      id: 39,
      url: "./imgs/album/furniture5.jpeg",
      category: "furniture"
    },
    {
      id: 40,
      url: "./imgs/album/funiture_333.jpg",
      category: "furniture apartment"
    },
    {
      id: 41,
      url: "./imgs/album/funiture_665.jpg",
      category: "furniture"
    }
    // {
    //   id: 42,
    //   url: "./imgs/album/apartment987.jpg",
    //   category: "architecture apartment"
    // }
  ];

  // Create Control Filter
  function createFilter() {
    var control = $(".control-filter");
    var categories = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      let arrCate = element.category;
      arrCate = arrCate.split(" ");
      for (let j = 0; j < arrCate.length; j++) {
        const cate = arrCate[j];
        categories = [...categories, cate];
      }
    }
    var totalCategory = ["all", ...new Set(categories)];
    for (let i = 0; i < totalCategory.length; i++) {
      const element = totalCategory[i];
      control.append(`
      <div key-filter=${element} class="wow fadeInRight ${
        i === 0 ? "active" : ""
      }" data-wow-delay="${i / 5}s">${element}</div>
      `);
    }

    control.children().click(function() {
      control.children().removeClass("active");
      $(this).addClass("active");
      doFilter($(this).attr("key-filter"));
    });
  }
  createFilter();

  function doFilter(value) {
    filterInAlbum(value);
  }
  function filterInAlbum(value) {
    var ourAlbumCol = $("#ourAlbum2").children();
    var ctn = $("#containerImg");
    if (value === "all") {
      for (let i = 0; i < ourAlbumCol.length; i++) {
        const allItem = $(ourAlbumCol[i])
          .children()
          .children();
        allItem.removeClass("filterOut");
      }
      sortAlbum();
      return;
    }
    for (let i = 0; i < ourAlbumCol.length; i++) {
      const allItem = $(ourAlbumCol[i])
        .children()
        .children();
      for (let j = 0; j < allItem.length; j++) {
        const item = $(allItem[j]);
        if (!item.hasClass(value)) {
          // item.addClass("wow fadeOutDown");
          // new WOW().init();
          item.addClass("filterOut");
        } else {
          item.removeClass("filterOut");
        }
        // console.log("dang chya");
      }
    }

    sortAlbum();
  }

  var album = $("#ourAlbum");
  var itemAlbum = data.map(
    item =>
      `
    <div class="item ${item.category}">
      <img src="${item.url}"/>
    </div>
  `
  );

  // var itemAlbum2 = [];
  // for (let i = 0; i < 25; i++) {
  //   itemAlbum2.push(`
  //   <div class="item">
  //       <img src="https://source.unsplash.com/featured/?Architecture/${i}"/>
  //   </div>
  // `);
  // }

  function getMinCol() {
    var album2 = $("#ourAlbum2");
    var colOfAlbum = album2.children();
    var result = null;
    var temp = 999999;
    for (let i = 0; i < colOfAlbum.length; i++) {
      const element = colOfAlbum[i];
      if ($(element).hasClass("disableCol")) {
        continue;
      }

      if (
        $(element)
          .children()
          .height() < temp
      ) {
        temp = $(element)
          .children()
          .height();
        result = $(element).children();
      }
    }

    return result;
  }

  function getMaxCol() {
    var album2 = $("#ourAlbum2");
    var colOfAlbum = album2.children();
    var result = null;
    var temp = 0;
    for (let i = 0; i < colOfAlbum.length; i++) {
      const element = colOfAlbum[i];
      if (
        $(element)
          .children()
          .height() > temp
      ) {
        temp = $(element)
          .children()
          .height();
        result = $(element).children();
      }
    }

    return result;
  }

  function addItemAlbum() {
    var allItem = $("#containerImg").children();
    for (let i = 0; i < allItem.length; i++) {
      const col = getMinCol();
      col.append(allItem[i]);
      $(allItem[i]).addClass("wow fadeInUp");
    }
  }

  function addItemContainer(data) {
    var ctnImg = $("#containerImg");
    ctnImg.append(data);
  }

  addItemContainer(itemAlbum);
  $(window).on("load", function(e) {
    addItemAlbum();
  });

  function sortAlbum() {
    setTimeout(() => {
      doSortAlbum();
    }, 1000);
  }

  function doSortAlbum() {
    var minCol = getMinCol();
    var maxCol = getMaxCol();
    var distance = maxCol.height() - minCol.height();
    if (distance < 200) {
      return;
    }
    var lastElementOfMaxCol = null;
    for (let i = maxCol.children().length; i >= 0; i--) {
      const element = maxCol.children()[i - 1];
      if ($(element).height() > 0) {
        lastElementOfMaxCol = element;
        break;
      }
    }

    var minColHeightPlus = $(lastElementOfMaxCol).height() + minCol.height();
    var maxColHeightSub = maxCol.height() - $(lastElementOfMaxCol).height();
    if (minColHeightPlus - maxColHeightSub < 300) {
      console.log("tren");
      minCol.append(lastElementOfMaxCol);
      return doSortAlbum();
    } else {
      console.log("duoi");
      return;
    }
  }
  // setTimeout(() => {
  //   sortAlbum();
  // }, 2000);
  // WOW.prototype.addBox = function(element) {
  //   this.boxes.push(element);
  // };
  var wow = new WOW();
  wow.init();

  $(window).resize(function() {
    var width = $(this).width();
    // console.log(width);
    if (width < 576) {
      return;
    }

    if (width < 760) {
      sortTwoCol();
      return;
    }

    if (width < 992 - 8) {
      sortThreeCol();
    } else {
      var allCol = $("#ourAlbum2").children();
      $(allCol).removeClass("disableCol");
      doSortAlbum();
    }
  });

  function sortThreeCol() {
    var allCol = $("#ourAlbum2").children();
    $(allCol).removeClass("disableCol");
    $(allCol[3]).addClass("disableCol");
    var allItem = $(allCol[3])
      .children()
      .children();
    var j = 0;
    for (let i = 0; i < allItem.length; i++) {
      const item = allItem[i];
      if (j > 2) {
        j = 0;
      }
      $(allCol[j])
        .children()
        .append(item);
      j++;
    }
    doSortAlbum();
  }

  function sortTwoCol() {
    console.log("2 col");
    var allCol = $("#ourAlbum2").children();
    $(allCol[2]).addClass("disableCol");
    $(allCol[3]).addClass("disableCol");
    var allItem = $(allCol[2])
      .children()
      .children();
    var allItem2 = $(allCol[3])
      .children()
      .children();
    var j = 0;
    for (let i = 0; i < allItem.length; i++) {
      const item = allItem[i];
      if (j > 1) {
        j = 0;
      }
      $(allCol[j])
        .children()
        .append(item);
      j++;
    }
    var z = 0;
    for (let i = 0; i < allItem2.length; i++) {
      const item = allItem2[i];
      if (z > 1) {
        z = 0;
      }
      $(allCol[z])
        .children()
        .append(item);
      z++;
    }
  }
});
