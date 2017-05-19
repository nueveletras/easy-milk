function vaca(){
document.getElementById("help").innerHTML="Acá puede ingresar a los registros una nueva vaca, por nacimiento o por compra";
}
function potrero(){
document.getElementById("help").innerHTML="Acá puede registrar los potreros organizandolo por area o por sector";
}
function leche(){
document.getElementById("help").innerHTML="Acá puede ingresar a los registros la cantidad de leche";
}
function openMenu(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("vertical-menu");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();