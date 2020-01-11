const advantagesData = loadAdvantagesData();

document.getElementsByClassName("advantages ")[0].innerHTML = `${advantagesData.map(loadAdvantageTemplate).join('')}`;

function loadAdvantageTemplate(advantage) {
    return `
    <div class="advantages__item">
        <p><i class="fas fa-user-shield"></i></p>
        <p class="advantages__subtitle"><i>${advantage.title}</i></p>
        <p class="advantages__description">${advantage.description}</p>
    </div>
    `
};
