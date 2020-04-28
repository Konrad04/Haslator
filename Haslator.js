function weryfikacja() {
    var passy = document.forms['haslator']['haslo'];

    var idealne = /(?=.*\W)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var dobreA = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var dobreB = /(?=.*\d)(?=.*[a-z])(?=.*\W).{6,}/;
    var dobreC = /(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,}/;
    var dobreD = /(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{6,}/;


    var mierneA = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var mierneB = /(?=.*[a-z])(?=.*\d).{6,}/;
    var mierneC = /(?=.*[a-z])(?=.*\W).{6,}/;
    var mierneD = /(?=.*[A-Z])(?=.*\d).{6,}/;
    var mierneE = /(?=.*[A-Z])(?=.*\W).{6,}/;
    var mierneF = /(?=.*\d)(?=.*\W).{6,}/;



    if (passy.value.length < 1) {
        document.getElementById("komunikat").innerHTML = "Pole nie może być puste";
        komunikat.style.color = "red";
        return false;
    }


    else if ((passy.value.match(idealne)) || (passy.value.match(dobreA)) || (passy.value.match(dobreB)) || (passy.value.match(dobreC)) || (passy.value.match(dobreD))) {
        document.getElementById("komunikat").innerHTML = "Dobre hasło";
        komunikat.style.color = "green";
        return false;
    }


    else if ((passy.value.match(mierneA)) || (passy.value.match(mierneB)) || (passy.value.match(mierneC)) ||
        (passy.value.match(mierneD)) || (passy.value.match(mierneE)) || (passy.value.match(mierneF))) {
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



