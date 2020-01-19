const lotsData = loadLotsData();
const carLotsOnPage = 3;
let activeAuctionLot;

loadLots();

function loadLots() {
    let pagination = document.querySelector('#pagination__numbers');
    pagination.style.display = 'flex';
    pagination.innerHTML = '';

    let countOfCarLots = Math.ceil(lotsData.length / carLotsOnPage);
    for (let i = 1; i <= countOfCarLots; i++) {
        let paginationPageNumber = document.createElement('a');
        paginationPageNumber.setAttribute('href', '#');
        paginationPageNumber.innerHTML = i;

        paginationPageNumber.addEventListener('click', function (evt) {
            showActiveAuctionLotPage(this);
            evt.preventDefault();
        });

        if (i == 1) {
            showActiveAuctionLotPage(paginationPageNumber);
        }

        pagination.appendChild(paginationPageNumber);
    }
    return false;
};

function showActiveAuctionLotPage(carLot) {
    if (activeAuctionLot) {
        activeAuctionLot.classList.remove('active');
    }
    activeAuctionLot = carLot;
    carLot.classList.add('active');
    let pageNum = +carLot.innerHTML;

    let start = (pageNum - 1) * carLotsOnPage;
    let end = start + carLotsOnPage;
    let caLotsOnCurrentPage = lotsData.slice(start, end);

    document.getElementById("auction__lots").innerHTML = `${caLotsOnCurrentPage.map(loadLotTemplate).join('')}`;
}

function loadLotTemplate(lot) {
    return `
    <div class="auction__item">
        <div class="auction__item-block">
            <img class="auction__item-photo" src="${lot.srcImg}" alt="${lot.id}" title="${lot.id} - ${lot.maker} ${lot.model}">
            <div class="auction__item-description">
                <h2 class="auction__item-maker"><i></i>${lot.maker}</h2>
                <h3 class="auction__item-model"><i></i>${lot.model}</h3>
                <p class="lot__start-price"><i class="fas fa-money-bill"></i>${lot.price} ${lot.currency}</p>
                <p class="lot__item-year"><i class="far fa-calendar-times"></i>${lot.year}</p>
                <p class="lot__colour"><i class="fas fa-paint-brush"></i>${lot.colour}</p>
                <p class="lot__gearbox"><i class="fas fa-cog"></i>${lot.gearbox}</p>
                <p class="lot__engine"><i class="fas fa-gas-pump"></i>${lot.engine}</p>
                <p class="lot__mileage"><i class="fas fa-tachometer-alt"></i>${lot.mileage} ${lot.mileageUnit}</p>
                <input class="auction__item-details" type="submit" value="Деталі" onclick="linkToChosenLot(${lot.id})"></button>
            </div>
        </div>
    </div>
    `
};
