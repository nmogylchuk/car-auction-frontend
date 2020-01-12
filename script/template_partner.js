const partnersData = loadPartnersData();

loadPartners();

function loadPartners() {
    document.getElementsByClassName("partner__logos ")[0].innerHTML = `${partnersData.map(loadPartnerTemplate).join('')}`;
};

function loadPartnerTemplate(partner) {
    return `
    <div class="partner__logo-item">
        <img class="partner__logo-item1" src="${partner.srcImg}" alt="${partner.name}">
    </div>
    `
};
