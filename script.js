let grd = document.getElementById("grd");
let dip = document.getElementById("dip");
let school = document.getElementById("school");

function diploma(){
    grd.style.display = "none";
    dip.style.display = "block";
    school.style.display = "none";
}
function schooling(){
    grd.style.display = "none";
    dip.style.display = "none";
    school.style.display = "block";
}
function graduation(){
    grd.style.display = "block";
    dip.style.display = "none";
    school.style.display = "none";
}
