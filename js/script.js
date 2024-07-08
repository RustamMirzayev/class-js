window.addEventListener("DOMContentLoaded", () => {
  class AutoCard {
    constructor(src, alt, title, descrp, price, parentElement) {
      (this.src = src),
        (this.alt = alt),
        (this.title = title),
        (this.descrp = descrp),
        (this.price = price),
        (this.parentElement = document.querySelector(parentElement)),
        this.changeToUSD();
    }

    changeToUSD() {
      this.price = (this.price / 10500).toFixed(2);
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descrp}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> $</div>
                    </div>
                </div>
            `;
      this.parentElement.append(element);
    }
  }

//   Audi
  new AutoCard(
    "img/tabs/audi.jpg",
    "audi",
    "Audi",
    "Немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi. Штаб-квартира расположена в городе Ингольштадт (Германия).",
    "100000000",
    ".menu .container"
  ).render();

//   Mers
  new AutoCard(
    'img/tabs/merc.jpg"',
    "merc",
    "Mercedes",
    "Немецкий производитель легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств, входящая в состав немецкого концерна. Является одним из самых узнаваемых автомобильных брендов во всём мире",
    "30000000",
    ".menu .container"
  ).render();

//   Bmw
  new AutoCard(
    "img/tabs/bmw.jpg",
    "bmw",
    "BMW",
    "Немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Председателем компании с 2006 по 2015 год был Норберт Райтхофер, с мая 2015 года — Харальд Крюгер, а с 18 июля 2019 года — Оливер Ципсе.",
    "35000000",
    ".menu .container"
  ).render()
});
