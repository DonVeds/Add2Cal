// TODO: Оптимизировать переменные связанные с датой и временем 

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
let TADElement = document.getElementById("TADElement").innerHTML = `Время: ${TAD.substr(0, 2)}.${TAD.substr(2, 2)}.20${TAD.substr(4, 2)} ${TAD.substr(6, 2)}:${TAD.substr(8, 2)} Москва`;

let D = getQueryVariable("D");
let FH = getQueryVariable("FH");
let SH = getQueryVariable("SH");
let LinkElement = document.getElementById("LinkElement").innerHTML = `https://${D}.zoom.us/j/${FH}?pwd=${SH}`;

let MID = getQueryVariable("MID");
let MIDElement = (document.getElementById("MIDElement").innerHTML = `Идентификатор конференции: ${MID.substr(0, 3)} ${MID.substr(3, 4)} ${MID.substr(7, 4)}`);

let P = getQueryVariable("P");
let PElement = (document.getElementById("PElement").innerHTML = `Код доступа: ${P}`);

//Open https://donveds.github.io/AddToCalendar/index.html?TAD=0306211320&D=avito&FH=98620948242&SH=VEcvcm5CeXRqVkV1QzdrYlBYOWVPQT09&MID=98620948242&P=433077 to test

function AddToGoogleCalendar() {

  // Устанавливаем начальное время(Start Time)
  let ST = `20${TAD.substr(4, 2)}${TAD.substr(2, 2)}${TAD.substr(0, 2)}T${TAD.substr(6, 2)}${TAD.substr(8, 2)}00`;

  // Устанавливаем конечное время(End Time) сходя из параметра Dur из URL



  // Также нужно установить часовой пояс в ссылку
  window.location = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${ST}Z/20210603T140000Z&text=Zoom+meeting&location&details=Подключиться+к+конференции+Zoom%0Ahttps://${D}.zoom.us/j/${FH}?pwd%3D${SH}%0AИдентификатор+конференции:+${MID.substr(0, 3)}+${MID.substr(3, 4)}+${MID.substr(7, 4)}%0AКод+доступа:+${P}&sf=true`;
};

// https://calendar.google.com/calendar/u/0/r/eventedit?dates=20210603T130000Z/20210603T140000Z&text=Zoom+meeting&location&details=Подключиться+к+конференции+Zoom%0Ahttps://${D}.zoom.us/j/${FH}?pwd%3D${SH}%0AИдентификатор+конференции:+${MID.substr(0, 3)}+${MID.substr(3, 4)}+${MID.substr(7, 4)}%0AКод+доступа:+${P}&sf=true
// https://calendar.google.com/calendar/u/0/r/eventedit?dates=20210603T130000Z/20210603T140000Z&text=Zoom+meeting&location&details=Подключиться+к+конференции+Zoom%0Ahttps://avito.zoom.us/j/98620948242?pwd%3DVEcvcm5CeXRqVkV1QzdrYlBYOWVPQT09%0AИдентификатор+конференции:+986+2094+8242%0AКод+доступа:+433077&sf=true
// https://calendar.google.com/calendar/u/0/r/eventedit?dates=20210603T130000Z/20210603T140000Z&text=Zoom+meeting&location&details=Подключиться+к+конференции+Zoom%0Ahttps://avito.zoom.us/j/98620948242?pwd%VEcvcm5CeXRqVkV1QzdrYlBYOWVPQT09%0AИдентификатор+конференции:+986+2094+8242%0AКод+доступа:+433077&sf=true

function AddToICal(){
  document.getElementById("ZoomLink").value = "";
};