AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 60, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




$(document).ready(function () {
  $('#user-menu').hide();
  $('#search').hide();
  $('#login').addClass('d-none');
  var havelogin = false;

  $('#user-btn').click(function () {
    if (havelogin === true) {
      $('#user-menu').slideToggle();
      $('#search').slideUp();
    } else if (havelogin === false) {
      $('#login').removeClass('d-none');
    }
  });

  $('#login-btn').click(() => {
    havelogin = true;
    $('#login').addClass('d-none');
  });

  $('#logout').click(function () {
    havelogin = false;
    $('#user-menu').hide();
  })

  $('#search-btn').click(function () {
    if (havelogin === true) {
      $(this).toggleClass('bx-x');
      $('#search').slideToggle();
      $('#user-menu').slideUp();
    } else if (havelogin === false) {
      $('#login').removeClass('d-none');
    }
  });

  $('#close-btn').click(function () {
    $('#login').addClass('d-none');
  });

  $('#month-label').click(function (e) { 
    e.preventDefault();
    $(this).addClass('bg-danger');
    $('#year-label').removeClass('bg-danger');
    $("input[type=radio]")[0].checked = true;
  });
  $('#year-label').click(function (e) { 
    e.preventDefault();
    $(this).addClass('bg-danger');
    $('#month-label').removeClass('bg-danger');
    $("input[type=radio]")[1].checked = true;
  });
});


// ad swiper
var swiper = new Swiper(".ad-Swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
  loop:true,
});

// tag swiper
var swiper = new Swiper(".tag-Swiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// 日曆套件
(function () {
  Datepicker.locales['zh-CN'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    today: "Today",
    clear: "Clear",
    titleFormat: "y年MM月",
    format: "yyyy/mm/dd",
    weekStart: 0
  }
})();
const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  autohide:true,
  language: 'zh-CN',
}); 