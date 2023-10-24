window.addEventListener("DOMContentLoaded", function () {
  //click on the cards
  const cards = document.querySelectorAll(".goods__item");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("goods__item_active");
    });
  });
  //slider
  $(document).ready(function () {
    $(".goods__wrapper").slick({
      slidesToShow: 3,
      infinite: true,
      prevArrow:
        '<button type="button" class="slick-prev"><img src="icons/prevarroy.svg" alt="prevArrow"></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="icons/nextarrow.svg" alt="nextArrow"></button>',

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
          },
        },
        {
          breakpoint: 774,
          settings: {
            arrows: false,
            slidesToShow: 2,
            arrows: true,
            autoplaySpeed: 4000,
          },
        },
        {
          breakpoint: 629,
          settings: {
            arrows: false,
            slidesToShow: 2,
            autoplaySpeed: 3000,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "10px",
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ],
    });
  });

  //Modals
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      scroll = calcScroll();

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        modal.classList.add("animated", "fadeInDown");
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener("click", () => {
      ChangeStyleModal();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        ChangeStyleModal();
      }
    });
    function ChangeStyleModal() {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  }
  bindModal(
    ".about__adress-link",
    ".popup_block-adress",
    ".block-adress__close"
  );
  bindModal(
    ".promo__mainblock_btnblack",
    ".popup_block-call",
    ".block-call_back"
  );
  //функция для расчета ширины скролла (в таком случае не будет скачков при открытии модалки)
  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
  //hamburger
  const btnCloseHumberger = document.querySelector(".hamburger"),
    list = document.querySelector(".menu-items");

  btnCloseHumberger.addEventListener("click", () => {
    btnCloseHumberger.classList.toggle("hamburger_active");
    list.classList.toggle("menu-items_active");
    spanTwo.style.display = "none";
  });
});
