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

  $(".nav-bar svg").click(function() {
    $(this).toggleClass("open");
    $(".nav-bar").toggleClass("open");
    $("body").toggleClass("overflowHd");
  });

  new WOW().init();
});
