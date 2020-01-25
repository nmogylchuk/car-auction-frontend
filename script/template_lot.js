const lotsData = loadLotsData();
const carLotsOnPage = 4;
let activePaginationPage;

loadCarLotsWithPagination();

function loadCarLotsWithPagination() {
    let paginationSection = document.querySelector('#pagination');
    paginationSection.style.display = 'flex';
    paginationSection.innerHTML = '';
    
    let countOfPaginationPages = Math.ceil(lotsData.length / carLotsOnPage);
    for (let i = 1; i <= countOfPaginationPages; i++) {
        let paginationPage = document.createElement('a');
        paginationPage.setAttribute('href', '#');
        paginationPage.innerHTML = i;

        paginationPage.addEventListener('click', function (evt) {
            showActiveAuctionLotPage(this);
            evt.preventDefault();
        });

        if (i == 1) {
            showActiveAuctionLotPage(paginationPage);
        }

        paginationSection.appendChild(paginationPage);
    }
    return false;
};

function showActiveAuctionLotPage(paginationPage) {
    if (activePaginationPage) {
        activePaginationPage.classList.remove('active');
    }
    activePaginationPage = paginationPage;
    paginationPage.classList.add('active');
    let pageNum = +paginationPage.innerHTML;

    let start = (pageNum - 1) * carLotsOnPage;
    let end = start + carLotsOnPage;
    let carLotsOnCurrentPage = lotsData.slice(start, end);

    document.getElementById("auction__lots").innerHTML = `${carLotsOnCurrentPage.map(loadLotTemplate).join('')}`;
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