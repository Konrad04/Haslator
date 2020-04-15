
function weryfikacja() {
    var passy = document.forms['haslator']['haslo'];
    var idealne = /(?=.*\d).{7,}/;
    var mierne = /(?=.*\d).{4,}/;


    if (passy.value.length < 1) {
        document.getElementById("komunikat").innerHTML = "Pole nie może być puste";
        komunikat.style.color = "red";
        return false;
    }


    else if (passy.value.match(idealne)) {
        document.getElementById("komunikat").innerHTML = "Dobre hasło";
        komunikat.style.color = "green";
        return false;
    }


    else if (passy.value.match(mierne)) {
        document.getElementById("komunikat").innerHTML = "Średnie hasło";
        komunikat.style.color = "blue";
        return false;
    }

    else {
        document.getElementById("komunikat").innerHTML = "Słabe hasło";
        komunikat.style.color = "yellow";
        return false;
    }
}



