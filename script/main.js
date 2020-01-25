loadLotsSearchInputFieldsData();

function loadLotsSearchInputFieldsData() {
  var makers = Array.from(new Set(lotsData.map(lot => buildSearchOption(lot.maker))));
  var years = Array.from(new Set(lotsData.map(lot => buildSearchOption(lot.year))));
  var gearboxes = Array.from(new Set(lotsData.map(lot => buildSearchOption(lot.gearbox))));
  var engines = Array.from(new Set(lotsData.map(lot => buildSearchOption(lot.engine))));

  document.getElementById("brand").innerHTML = makers.sort().join('');
  document.getElementById("year").innerHTML = years.sort().join('');
  document.getElementById("gearbox").innerHTML = gearboxes.sort().join('');
  document.getElementById("engine").innerHTML = engines.sort().join('');
};

function buildSearchOption(value) {
  return `<option value="${value}">${value}</option>`;
};

function searchLots() {
  let pagination = document.getElementById('pagination');
  pagination.style.display = 'none';

  var brand = document.getElementById("brand");
  var chosenBrand = brand.options[brand.selectedIndex].value;

  var year = document.getElementById("year");
  var chosenYear = year.options[year.selectedIndex].value;

  var gearbox = document.getElementById("gearbox");
  var chosenGearbox = gearbox.options[gearbox.selectedIndex].value;

  var engine = document.getElementById("engine");
  var chosenEngine = engine.options[engine.selectedIndex].value;

  var filter = {
    maker: chosenBrand,
    year: chosenYear,
    gearbox: chosenGearbox,
    engine: chosenEngine
  };

  var foundLots = lotsData.filter(function (lot) {
    for (var key in filter) {
      if (lot[key] === undefined || lot[key] != filter[key])
        return false;
    }
    return true;
  });

  document.getElementById("auction__lots").innerHTML = `${foundLots.map(loadLotTemplate).join('')}`;
  return false;
};

function linkToChosenLot(lotId) {
  var lot = lotsData.find(x => x.id === lotId);
  localStorage.setItem("currentLot", JSON.stringify(lot));
  window.location.href = 'lots_card.html';
};

function clearSearch() {
  //clear pagination sector
  let paginationSection = document.querySelector('#pagination');
  paginationSection.style.display = 'flex';

  //clear chosen options
  var brand = document.getElementById("brand");
  brand.options[brand.selectedIndex].selected = false;

  var year = document.getElementById("year");
  year.options[year.selectedIndex].selected = false;

  var gearbox = document.getElementById("gearbox");
  gearbox.options[gearbox.selectedIndex].selected = false;

  var engine = document.getElementById("engine");
  engine.options[engine.selectedIndex].selected = false;

  loadCarLotsWithPagination();
  return false;
}
