function linkToChosenLot(lotId) {
    var lot = lotsData.find(x => x.id === lotId);
    localStorage.setItem("currentLot", JSON.stringify(lot));
    window.location.href = 'lots_card.html';
};
