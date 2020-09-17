
function showPlagin(idno){
  pc = ('PlagClose' + (idno));
  po = ('PlagOpen' + (idno));
  if( document.getElementById(pc).style.display == "none" ) {
    document.getElementById(pc).style.display = "block";
    document.getElementById(po).style.display = "none";
  }
  else {
    document.getElementById(pc).style.display = "none";
    document.getElementById(po).style.display = "block";
  }
}
