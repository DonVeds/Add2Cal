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

let DateURL = TAD.substr(0, 2);
let MonthURL = TAD.substr(2, 2);
let YearURL = "20"+TAD.substr(4, 2);

let HourURL = TAD.substr(6, 2);
let MinutesURL = TAD.substr(8, 2);

let TADElement = document.getElementById("TADElement").innerHTML = `Время: ${DateURL}.${MonthURL}.${YearURL} ${HourURL}:${MinutesURL} Москва`;

let D = getQueryVariable("D");
let FH = getQueryVariable("FH");
let SH = getQueryVariable("SH");
let LinkElement = document.getElementById("LinkElement").innerHTML = `https://${D}.zoom.us/j/${FH}?pwd=${SH}`;

let MID = getQueryVariable("MID");
let MIDElement = (document.getElementById("MIDElement").innerHTML = `Идентификатор конференции: ${MID.substr(0, 3)} ${MID.substr(3, 4)} ${MID.substr(7, 4)}`);

let P = getQueryVariable("P");
let PElement = (document.getElementById("PElement").innerHTML = `Код доступа: ${P}`);

let Dur = getQueryVariable("Dur");

// Устанавливаем начальное время(Start Time)
let ST = `${YearURL}${MonthURL}${DateURL}T${HourURL}${MinutesURL}00`;

// Устанавливаем конечное время(End Time) сходя из параметра Dur из URL
let ET = ""

function CalcEndTime() {
  switch (Dur) {
    case "30":
      if (parseInt(MinutesURL) < 30) {
        ET = `${YearURL}${MonthURL}${DateURL}T${HourURL}${parseInt(MinutesURL) + 30}00`
      } else if(parseInt(MinutesURL) > 30) {
        ET = `${YearURL}${MonthURL}${DateURL}T${parseInt(HourURL) + 1}${parseInt(MinutesURL) - 30}00`
      } else if(parseInt(MinutesURL) = 30) {
        ET = `${YearURL}${MonthURL}${DateURL}T${parseInt(HourURL) + 1}${parseInt(MinutesURL) - 30}00`
      }
      break;
    case "60":
      ET = `${YearURL}${MonthURL}${DateURL}T${parseInt(HourURL) + 1}${MinutesURL}00`
      break;
    case "90":
      if (parseInt(MinutesURL) < 30) {
        ET = `${YearURL}${MonthURL}${DateURL}T${parseInt(HourURL) + 1}${parseInt(MinutesURL) + 30}00`
      } else if(parseInt(MinutesURL) > 30) {
        ET = `${YearURL}${MonthURL}${DateURL}T${parseInt(HourURL) + 2}${parseInt(MinutesURL) - 30}00`
      } else if(parseInt(MinutesURL) = 30) {
        ET = `${YearURL}${MonthURL}${DateURL}T${parseInt(HourURL) + 2}${parseInt(MinutesURL) - 30}00`
      }
      break;
    case "120":
      ET = `${YearURL}${MonthURL}${DateURL}T${parseInt(HourURL) + 2}${MinutesURL}00`
      break;
  }
}

function AddToGoogleCalendar() {

  CalcEndTime()

  // Также нужно установить часовой пояс в ссылку
  window.location = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${ST}MSK/${ET}MSK&text=Zoom+meeting&location&details=Подключиться+к+конференции+Zoom%0Ahttps://${D}.zoom.us/j/${FH}?pwd%3D${SH}%0AИдентификатор+конференции:+${MID.substr(0, 3)}+${MID.substr(3, 4)}+${MID.substr(7, 4)}%0AКод+доступа:+${P}&sf=true`;
};

// https://calendar.google.com/calendar/u/0/r/eventedit?dates=20210603T130000Z/20210603T140000Z&text=Zoom+meeting&location&details=Подключиться+к+конференции+Zoom%0Ahttps://${D}.zoom.us/j/${FH}?pwd%3D${SH}%0AИдентификатор+конференции:+${MID.substr(0, 3)}+${MID.substr(3, 4)}+${MID.substr(7, 4)}%0AКод+доступа:+${P}&sf=true
// https://calendar.google.com/calendar/u/0/r/eventedit?dates=20210603T130000Z/20210603T140000Z&text=Zoom+meeting&location&details=Подключиться+к+конференции+Zoom%0Ahttps://avito.zoom.us/j/98620948242?pwd%3DVEcvcm5CeXRqVkV1QzdrYlBYOWVPQT09%0AИдентификатор+конференции:+986+2094+8242%0AКод+доступа:+433077&sf=true
// https://calendar.google.com/calendar/u/0/r/eventedit?dates=20210603T130000Z/20210603T140000Z&text=Zoom+meeting&location&details=Подключиться+к+конференции+Zoom%0Ahttps://avito.zoom.us/j/98620948242?pwd%VEcvcm5CeXRqVkV1QzdrYlBYOWVPQT09%0AИдентификатор+конференции:+986+2094+8242%0AКод+доступа:+433077&sf=true

function AddToICal(){
  document.getElementById("ZoomLink").value = "";
};