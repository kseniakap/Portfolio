const hamburger = document.querySelector(".hamburger");
menu = document.querySelector(".menu");
closeElem = document.querySelector(".menu__close");
hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});
// changing the color of favicons
$(window).scroll(function () {
  if ($(this).scrollTop() > $(".promo").height()) {
    $(".sidepanel").addClass("sidepanel_active");
  } else {
    $(".sidepanel").removeClass("sidepanel_active");
  }
});

//Проценты
const procent = document.querySelectorAll(".reting-procent");
line = document.querySelectorAll(".reting-line span");

procent.forEach((item, i) => {
  line[i].style.width = item.innerHTML;
  
});
