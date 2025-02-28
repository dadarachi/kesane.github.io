function warningpopup() {
    var html = document.createElement("div");
    html.className = "stoped-service";
    var bold = document.createElement("b");
    bold.append("შეზღუდულია")
    html.append("ტექდათვალიერების თარიღისა და ფასის გაგების სერვისი დროებით ")
    html.append(bold)
    swal({
        content: html,
        text: " ",
        icon: "error",
        buttons: false,
        dangerMode: true,
    })
}

$(document).ready(function () {
    if (typeof Cookies('showModal') === 'undefined') {
        setTimeout(function () {
            $('.social-modal').fadeIn();
        }, 20000)
    }

    $(document).on("click", function (e) {
        $('.social-modal').fadeOut();
        Cookies.set('showModal', 'true', { expires: 1 });
    });

    function swipedetect(el, callback) {
        var touchsurface = el,
          swipedir,
          startX,
          startY,
          dist,
          distX,
          distY,
        threshold = 10, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
          elapsedTime,
          startTime,
          handleswipe = callback || function (swipedir) { };

        touchsurface.addEventListener(
          "touchstart",
          function (e) {
              var touchobj = e.changedTouches[0];
              swipedir = "none";
              dist = 0;
              startX = touchobj.pageX;
              startY = touchobj.pageY;
              startTime = new Date().getTime(); // record time when finger first makes contact with surface
              //e.preventDefault();
          },
          false
        );

        touchsurface.addEventListener(
          "touchmove",
          function (e) {
              //e.preventDefault(); // prevent scrolling when inside DIV
          },
          false
        );

        touchsurface.addEventListener(
          "touchend",
          function (e) {
              var touchobj = e.changedTouches[0];
              distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
              distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
              elapsedTime = new Date().getTime() - startTime; // get time elapsed
              if (elapsedTime <= allowedTime) {
                  // first condition for awipe met
                  if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                      // 2nd condition for horizontal swipe met
                      swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
                  } else if (
      Math.abs(distY) >= threshold &&
      Math.abs(distX) <= restraint
    ) {
                      // 2nd condition for vertical swipe met
                      swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
                  }
              }
              handleswipe(swipedir);
              //e.preventDefault();
          },
          false
        );
    }
    var el = document.querySelector("body");
    var direct = document.querySelector(".direction-el");
    swipedetect(el, function (swipedir) {
        var currentTransfrom = direct.getAttribute("data-transform");
        var calcPlus = parseInt(currentTransfrom) + 100;
        var calcMinus = parseInt(currentTransfrom) - 100;
        if (swipedir == "up") {
            if (currentTransfrom == -200) return;
            direct.setAttribute("data-transform", calcMinus);
            direct.style.transform = "translate3d(0," + calcMinus + "%,0)"
        }
        if (swipedir == "down") {
            if (currentTransfrom == 0) return;
            direct.setAttribute("data-transform", calcPlus);
            direct.style.transform = "translate3d(0," + calcPlus + "%,0)"
        }
        currentTransfrom = direct.getAttribute("data-transform");
        var val = Math.abs(parseInt(currentTransfrom));
        val = val / 100;
        $(".dots span.active").removeClass("active");
        $(".dots span").eq(val).addClass("active");
    });

    $("body").on("click", ".dots span", function () {
        var vm = $(this);
        var index = vm.index();
        $('.dots span').removeClass('active');
        vm.addClass('active');
        var direct = document.querySelector(".direction-el");
        direct.setAttribute("data-transform", index * -100);
        direct.style.transform = "translate3d(0," + index * -100 + "%,0)"
    });
})