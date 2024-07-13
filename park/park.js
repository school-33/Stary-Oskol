let mapGreenLog,
  mapEmbankment,
  mapGeologist,
  mapMilitaryGlory,
  mapOlympic,
  mapVictory,
  mapVdv,
  mapZoo;

async function initMapGreenLog() {
  const { Map } = await google.maps.importLibrary("maps");

  mapGreenLog = new Map(document.getElementById("green_log"), {
    center: { lat: 51.31882260357876, lng: 37.891804846024726 },
    zoom: 14,
  });

  const greenLogMarker = new google.maps.Marker({
    map: mapGreenLog,
    position: { lat: 51.31888688291856, lng: 37.89161921952738 },
    title: "Зелёный лог",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#ed3535",
      fillOpacity: 1,
      strokeColor: "#3f0f0f",
      strokeWeight: 2,
      scale: 10,
    },
  });
}

async function initMapEmbankment() {
  const { Map } = await google.maps.importLibrary("maps");

  mapEmbankment = new Map(document.getElementById("embankment"), {
    center: { lat: 51.29963925525617,  lng: 37.84341508251734 },
    zoom: 14,
  });

  const embankmentMarker = new google.maps.Marker({
    map: mapEmbankment,
    position: { lat: 51.29963925525617,  lng: 37.84341508251734 },
    title: "Набережная",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#ed3535",
      fillOpacity: 1,
      strokeColor: "#3f0f0f",
      strokeWeight: 2,
      scale: 10,
    },
  });
}

async function initMapGeologist() {
  const { Map } = await google.maps.importLibrary("maps");

  mapGeologist = new Map(document.getElementById("geologist"), {
    center: { lat: 51.28980589317971, lng: 37.84826012450563 },
    zoom: 14,
  });

  const embankmentMarker = new google.maps.Marker({
    map: mapGeologist,
    position: { lat: 51.28980589317971, lng: 37.84826012450563 },
    title: "Парк Геологов",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#ed3535",
      fillOpacity: 1,
      strokeColor: "#3f0f0f",
      strokeWeight: 2,
      scale: 10,
    },
  });
}

async function initMapMilitaryGlory() {
  const { Map } = await google.maps.importLibrary("maps");

  mapMilitaryGlory = new Map(document.getElementById("military_glory"), {
    center: { lat: 51.29850510603884, lng: 37.836666104657176 },
    zoom: 14,
  });

  const embankmentMarker = new google.maps.Marker({
    map:  mapMilitaryGlory,
    position: { lat: 51.29850510603884, lng: 37.836666104657176 },
    title: "Парк Воинской Славы",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#ed3535",
      fillOpacity: 1,
      strokeColor: "#3f0f0f",
      strokeWeight: 2,
      scale: 10,
    },
  });
}

async function initMapOlympic() {
  const { Map } = await google.maps.importLibrary("maps");

  mapOlympic = new Map(document.getElementById("olympic"), {
    center: { lat: 51.326253460177206, lng: 37.89525487327775 },
    zoom: 14,
  });

  const embankmentMarker = new google.maps.Marker({
    map: mapOlympic,
    position: { lat: 51.326253460177206, lng: 37.89525487327775 },
    title: "Олимпийский парк",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#ed3535",
      fillOpacity: 1,
      strokeColor: "#3f0f0f",
      strokeWeight: 2,
      scale: 10,
    },
  });
}

async function initMapVictory() {
  const { Map } = await google.maps.importLibrary("maps");

  mapVictory = new Map(document.getElementById("victory"), {
    center: { lat: 51.30775900394789, lng: 37.889041861552435 },
    zoom: 14,
  });

  const embankmentMarker = new google.maps.Marker({
    map: mapVictory,
    position: { lat: 51.30775900394789, lng: 37.889041861552435 },
    title: "Парк Победы",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#ed3535",
      fillOpacity: 1,
      strokeColor: "#3f0f0f",
      strokeWeight: 2,
      scale: 10,
    },
  });
}

async function initMapVdv() {
  const { Map } = await google.maps.importLibrary("maps");

  mapVdv = new Map(document.getElementById("vdv"), {
    center: { lat: 51.300515700699854, lng: 37.89083521471606 },
    zoom: 14,
  });

  const embankmentMarker = new google.maps.Marker({
    map: mapVdv,
    position: { lat: 51.300515700699854, lng: 37.89083521471606 },
    title: "Парк ВДВ",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#ed3535",
      fillOpacity: 1,
      strokeColor: "#3f0f0f",
      strokeWeight: 2,
      scale: 10,
    },
  });
}

async function initMapZoo() {
  const { Map } = await google.maps.importLibrary("maps");

  mapZoo = new Map(document.getElementById("zoo"), {
    center: { lat: 51.32402637815755, lng: 37.996778184244725 },
    zoom: 12,
  });

  const embankmentMarker = new google.maps.Marker({
    map: mapZoo,
    position: { lat: 51.32402637815755, lng: 37.996778184244725 },
    title: "Старооскольский зоопарк",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "#ed3535",
      fillOpacity: 1,
      strokeColor: "#3f0f0f",
      strokeWeight: 2,
      scale: 10,
    },
  });
}

initMapGreenLog().catch(console.error);
initMapEmbankment().catch(console.error);
initMapGeologist().catch(console.error);
initMapMilitaryGlory().catch(console.error);
initMapOlympic().catch(console.error);
initMapVictory().catch(console.error);
initMapVdv().catch(console.error);
initMapZoo().catch(console.error);