let grd = document.getElementById("grd");
let dip = document.getElementById("dip");
let school = document.getElementById("school");
let webProjects = document.getElementById("web-projects");
let collegeProjects = document.getElementById("college-projects");

function diploma() {
  grd.style.display = "none";
  dip.style.display = "block";
  school.style.display = "none";
}
function schooling() {
  grd.style.display = "none";
  dip.style.display = "none";
  school.style.display = "block";
}
function graduation() {
  grd.style.display = "block";
  dip.style.display = "none";
  school.style.display = "none";
}
function webProjects(){
  webProjects.style.display = "flex";
  collegeProjects.style.display = "none";
}
function collegeProjects(){
  webProjects.style.display = "none";
  collegeProjects.style.display = "flex";
}
