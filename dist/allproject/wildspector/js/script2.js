window.addEventListener("DOMContentLoaded", function () {
  //Cards
  class GoodsCard {
    constructor(src, alt, price, descr, size, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.price = price;
      this.descr = descr;
      this.size = size;

      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }
    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "goods__item";
        element.classList.add(this.element);
        element.style.display = "inline-block";
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
          <img class="goods__item-img" src=${this.src} alt=${this.alt}/>
          <div class="goods__item-price">${this.price} ₽</div>
          <div class="goods__item-descr">${this.descr}</div>
      `;
      element.addEventListener("click", () => {
        element.classList.toggle("goods__item_active");
        element.innerHTML = `
        <img class="goods__item-img" src=${this.src} alt=${this.alt}/>
        <div class="goods__item-grayblock">
        <div class="goods__item-size">
          Размеры: ${this.size.a} x ${this.size.b} x ${this.size.c} см
        </div>
      </div>
      <div class="goods__item-price">
        <span>Цена</span>
        ${this.price}
        <div>₽</div>
        <span>руб/м²</span>
      </div>
      <div class="goods__item-descr">
      ${this.descr}
      </div>
      
  `;
      });

      this.parent.append(element);
    }
  }
  const getResources = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch${url}, status${res.status}`);
    }
    return await res.json();
  };
  getResources("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, price, descr, size }) => {
      new GoodsCard(
        img,
        altimg,
        price,
        descr,
        size,
        ".catalog__wrapper"
      ).render();
    });
  }); 
});
