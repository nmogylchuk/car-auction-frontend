const advantagesData = loadAdvantagesData();

loadAdvantages();

function loadAdvantages() {
    let advantagesElemets = `${advantagesData.map(loadAdvantageTemplate).join('')}`;
    document.getElementsByClassName("advantages ")[0].innerHTML = advantagesElemets;
};

function loadAdvantageTemplate(advantage) {
    return `
    <div class="advantages__item">
        <p><i class="fas fa-user-shield"></i></p>
        <p class="advantages__subtitle"><i>${advantage.title}</i></p>
        <p class="advantages__description">${advantage.description}</p>
    </div>
    `
};
