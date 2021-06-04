function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

let TAD = getQueryVariable("TAD");
let TADElement = document.getElementById("TADElement").innerHTML = `Время: ${TAD}`;

let D = getQueryVariable("D");
let FH = getQueryVariable("FH");
let SH = getQueryVariable("SH");
let LinkElement = document.getElementById("LinkElement").innerHTML = `https://${D}.zoom.us/j/${FH}?pwd=${SH}`;

let MID = getQueryVariable("MID");
let MIDElement = (document.getElementById("MIDElement").innerHTML = `Идентификатор конференции: ${MID}`);

let P = getQueryVariable("P");
let PElement = (document.getElementById("PElement").innerHTML = `Код доступа: ${P}`);

//Open https://donveds.github.io/AddToCalendar/index.html?TAD=0306211320&D=avito&FH=98620948242&SH=VEcvcm5CeXRqVkV1QzdrYlBYOWVPQT09&MID=98620948242&P=433077 to test