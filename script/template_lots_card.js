function loadCurrentLot() {
  var lot = JSON.parse(localStorage.getItem("currentLot"));
  var imgSrcText = getImgSrcText(lot.images);
  var imgDivText = getImgDivText(lot.images);
  var interierLiText = getLiText(lot.interier);
  var exteriorLiText = getLiText(lot.exterior);
  var safatyLiText = getLiText(lot.safaty);
  var descriptionLiText = getLiText(lot.description);
  return `
    <section>

      <div class="lot__information">
      <!-- Full size images -->
        
        <div class="lot__slider">
          ${imgDivText}

          <!-- Previous and next buttons -->
          <a class="lot__slider-prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="lot__slider-next" onclick="plusSlides(1)">&#10095;</a>

          <!-- Mini size images -->

          <div class="lot__slider-mini">
            ${imgSrcText}
          </div>
        </div>

        <div class="lot__details">
          <h2 class="lot__model">${lot.maker} ${lot.model}</h2>
          <p id="lot__vin">${lot.vin}</p>
          <div class="lot__details-item">
            <p class="lot__start-price"><i class="fas fa-money-bill"></i>${lot.price} ${lot.currency}</p>
            <p class="lot__item-year"><i class="far fa-calendar-times"></i>${lot.year}</p>
            <p class="lot__colour"><i class="fas fa-paint-brush"></i>${lot.colour}</p>
            <p class="lot-engine"><i class="fas fa-gas-pump"></i>${lot.engine}</p>
            <p class="lot-gearbox"><i class="fas fa-cog"></i>${lot.gearbox}</p>
            <p class="lot-mileage"><i class="fas fa-tachometer-alt"></i>${lot.mileage} ${lot.mileageUnit}</p>
          </div>
        </div>

        <div class="lot__bid-information">
          <h2>Інформація по ставці</h2>
          <p class="lot__bid-start">Стартова ціна:</p>
          <p class="lot__bid-current">Поточна ціна:</p>
          <input class="lot__bid-fee" type="submit" value="Зробити ставку">
        </div>
      </div>
    </section>

    <section>
      <!-- Lot description -->
      <div class="lot__description">
        <div class="lot__description-item">
          <h2>Інтер'єр</h2>
          <ul class="lot__interior">
            ${interierLiText}
          </ul>
        </div>

        <div class="lot__description-item">
          <h2>Екстер'єр</h2>
          <ul class="lot__exterior">
            ${exteriorLiText}
          </ul>
        </div>

        <div class="lot__description-item">
          <h2>Безпека</h2>
          <ul class="lot__safety">
            ${safatyLiText}
          </ul>
        </div>

        <div class="lot__description-item">
          <h2>Інше</h2>
          <ul class="lot__other">
            ${descriptionLiText}
          </ul>
        </div>
      </div>
    </section>
    `
}

function getImgSrcText(imgArray) {
  var imgText = "";
  if (imgArray !== null) {
    for (i = 0; i < imgArray.length; i++) {
      imageId = i + 1;
      imgText += `<img class="lotSliderMiniItem" src="${imgArray[i]}" alt="lot__slider-mini${imageId}" onclick="currentSlide(${imageId})"></img>\n`;
    }
  }
  return imgText;
}

function getImgDivText(imgArray) {
  var imgText = "";
  if (imgArray !== null) {
    for (i = 0; i < imgArray.length; i++) {
      imageId = i + 1;
      imgText += `<div class="lotSliderMaxi"><div class="lot__slider-number">${imageId} / ${imgArray.length}</div><img src="${imgArray[i]}" alt="lot__slider-maxi1"></div>\n`;
    }
  }
  return imgText;
}

function getLiText(textArray) {
  var liText = "";
  if (textArray !== null) {
    for (i = 0; i < textArray.length; i++) {
      liText += `<li>${textArray[i]}</li>\n`;
    }
  }
  return liText;
}

loadCurrentLotData()

function loadCurrentLotData() {
  document.getElementById("lot__fullinformation").innerHTML = `${loadCurrentLot()}`
}