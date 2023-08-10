let grd = document.getElementById("grd");
let dip = document.getElementById("dip");
let school = document.getElementById("school");
let web_pro = document.getElementById("web-projects");
let col_pro = document.getElementById("college-projects");

function graduation() {
  grd.style.display = "block";
  dip.style.display = "none";
  school.style.display = "none";
  document.getElementById("btn-1").style.borderBottomColor = "black";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
}
function diploma() {
  grd.style.display = "none";
  dip.style.display = "block";
  school.style.display = "none";
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "black";
  document.getElementById("btn-3").style.borderBottomColor = "transparent";
}
function schooling() {
  grd.style.display = "none";
  dip.style.display = "none";
  school.style.display = "block";
  document.getElementById("btn-1").style.borderBottomColor = "transparent";
  document.getElementById("btn-2").style.borderBottomColor = "transparent";
  document.getElementById("btn-3").style.borderBottomColor = "black";
}
function function_1() {
  web_pro.style.display = "flex";
  col_pro.style.display = "none";
  document.getElementById("btn-4").style.borderBottomColor = "black";
  document.getElementById("btn-5").style.borderBottomColor = "transparent";
}
function function_2() {
  web_pro.style.display = "none";
  col_pro.style.display = "flex";
  document.getElementById("btn-4").style.borderBottomColor = "transparent";
  document.getElementById("btn-5").style.borderBottomColor = "black";
}