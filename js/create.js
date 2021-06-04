function create(){
  
  let ZoomLink = document.getElementById("ZoomLink").value.split(/\r?\n/);

  //Выделил нужные строчки для последующей обработки
  let TimeAndDateLine = ZoomLink[0];
  let LinkLine = ZoomLink[2];
  let MeetingIDLine = ZoomLink[3];
  let PasscodeLine = ZoomLink[4];

}

function cancel(){
  document.getElementById("ZoomLink").value = "";
}