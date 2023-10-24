$(function () {
  $(".banner__slider").slick({
    dots: true,
    slidesToShow: 1,
    prevArrow:
      ' <button type="button" class="slick-arrow_banner slick-prev_banner"><img src="icons/arrow_left.svg" alt="arrow_left"></button>',
    nextArrow:
      '  <button type="button" class="slick-arrow_banner slick-next_banner"><img src="icons/arrow_right.svg" alt="arrow_right"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          
        },
      },
    ],
  });

  //Tabs

  $(".tab").on("click", function (e) {
    e.preventDefault();

    //Delete class active
    $($(this).siblings()).removeClass("tab-active");
    $($(this).parent().siblings().find("div")).removeClass(
      "tabs-content_active "
    );

    $(this).addClass("tab-active");
    $($(this).attr("href")).addClass("tabs-content_active");
  });

  //Change color of heart

  $(".goods-item__heart").on("click", function () {
    $(this).toggleClass("goods-item__heart-active");
  });

  //second slider
  $(".goods-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class=" slide-arrow slick-prev"><img src="icons/arrow_left_black.svg" alt="arrow left"></button>',
    nextArrow:
      '<button type="button" class="slide-arrow slick-next"><img src="icons/arrow_right_black.svg" alt="arrow right"></button>',
  });

  //Активации плагина jQuery Form Styler
  $(".filter-style").styler();

  //раскрытие фильтра
  $(".aside-filter__item-title-drop, .filter-addparam").on(
    "click",
    function () {
      $(this).toggleClass("aside-filter__item-title-drop_active");
      $(this).next().slideToggle();
    }
  );

  //Активация Rangeslider
  $(".js-range-slider").ionRangeSlider();

  // Кнопки
  $(".chected-btn__label").on("click", function () {
    $(this).toggleClass("chected-btn__label_active");
  });

  //Две кнопки сверху второй страницы
  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-buttons_active");
    $(".catalog__filter-btnline ").removeClass(
      "catalog__filter-buttons_active"
    );
    $(".goods-item__wrapper").removeClass("goods-item__wrapper_list");
  });
  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass(" catalog__filter-buttons_active");
    $(".catalog__filter-btngrid").removeClass(
      " catalog__filter-buttons_active"
    );
    $(".goods-item__wrapper").addClass("goods-item__wrapper_list");
  });

  // Звездный рейтинг
  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    starWidth: "23px",
    normalFill: "#C4C4C4",
  });

  //Боковое меню
  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list_active");
  });
});
