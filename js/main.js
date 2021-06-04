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
console.log(getQueryVariable("TAD"));
let D = getQueryVariable("D");
console.log(getQueryVariable("D"));
let FH = getQueryVariable("FH");
console.log(getQueryVariable("FH"));
let SH = getQueryVariable("SH");
console.log(getQueryVariable("SH"));
let MID = getQueryVariable("MID");
console.log(getQueryVariable("MID"));
let P = getQueryVariable("P");
console.log(getQueryVariable("P"));
//Open https://donveds.github.io/AddToCalendar/index.html?TAD=0306211320&D=avito&FH=98620948242&SH=VEcvcm5CeXRqVkV1QzdrYlBYOWVPQT09&MID=98620948242&P=433077 to test