
function weryfikacja() {
    var passy = document.forms['haslator']['haslo'];
    var idealne = /(?=.*\d).{7,}/;
    var mierne = /(?=.*\d).{4,}/;


    if (passy.value.length < 1) {
        document.getElementById("komunikat").innerHTML = "Pole nie mo�e by� puste";
        komunikat.style.color = "red";
        return false;
    }


    else if (passy.value.match(idealne)) {
        document.getElementById("komunikat").innerHTML = "Dobre has�o";
        komunikat.style.color = "green";
        return false;
    }


    else if (passy.value.match(mierne)) {
        document.getElementById("komunikat").innerHTML = "�rednie has�o";
        komunikat.style.color = "blue";
        return false;
    }

    else {
        document.getElementById("komunikat").innerHTML = "S�abe has�o";
        komunikat.style.color = "yellow";
        return false;
    }
}



