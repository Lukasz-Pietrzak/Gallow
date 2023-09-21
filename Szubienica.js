
const words = [
    "krowa",
    "krzesło",
    "wieloryb",
    "samochód",
    "komputer",
    "kwiat",
    "drzewo",
    "pizza",
    "telefon",
    "ksylofon",
    "hermelegilda",
    "szermierz",
    "domek na drzewie",
    "hiszpania",
    "anglia",
    "latarka",
    "wiktoria",
    "lukasz",
    "pies"
];

//Global letter
var letter2 = "";

var randomWord = getRandomWord(words);

//Responsible for information when user won the game
let globalCounter = [];
function poprawnoschasla(letter) {
    //Helpful with the same letters in array
    var counter = [];


    letter2 = letter;

    //Helpful for information when user guessed the letter
    var letterInArray = 0;

    if (randomWord.includes(letter)) {

        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                    letterInArray = true;
                    counter.push(i);
                    globalCounter.push(i);
            }
        }

        if (letterInArray === true) {
            //Replace the appropriate floor with the letter

            for (let i = 0; i < counter.length; i++){
                document.getElementById("podloga" + counter[i]).innerHTML = letter;
            }

            //If user guessed letter, paint it green
            document.getElementById(letter).insertAdjacentHTML("beforeend", "<style>" + "#" + letter + "{ background-color: green; }" + "</style>");
            //turn off clicking this letter
            document.getElementById(letter).onclick = null;
        }
        
        if (globalCounter.length === randomWord.length) {
            {
                    document.getElementById("alfabet").innerHTML = "<span id='alfabet-przegrana' style='white-space: nowrap;' >Wygrana!<br>" +
                        " Prawidłowe hasło: " + randomWord +
                        "<p style='cursor: pointer' id='jeszcze_raz' onclick='location.reload()'>JESZCZE RAZ?</p></span>"
                }
        }

    }


    else{
        //If user was wrong, turn off clicking this letter and paint it red
            document.getElementById(letter).insertAdjacentHTML("beforeend", "<style>" + "#" + letter + "{ background-color: red; }" + "</style>");
            document.getElementById(letter).onclick = null;

    }

}

var image = 1;
function szubienica() {

//If user was wrong, show next gallow image
    if (!randomWord.includes(letter2)) {
        document.getElementById("szubienica").innerHTML = "<img src='zdjęcia/Szubienica/s" + image + ".jpg'>";
        image++;
    }


    const imgElement = document.querySelector("#szubienica img");
    const currentImage = imgElement.getAttribute("src");
    const lastImage = "zdjęcia/Szubienica/s9.jpg";

    //If user lose the game, show statement and propose the new game
    if (currentImage === lastImage) {
        document.getElementById("alfabet").innerHTML = "<span id='alfabet-przegrana' style='white-space: nowrap;' >Przegrana!<br>" +
            " Prawidłowe hasło: " + randomWord +
            "<p style='cursor: pointer' id='jeszcze_raz' onclick='location.reload()'>JESZCZE RAZ?</p></span>"
    }


}
//Getting random word from array
function getRandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

var wynik = "";

//Function responsible for generating floors in proper quantities comparing to randomly selected password from words array
function generatorPodlog() {

    // randomWord2 = randomWord.replace(/\s+/g, "")

    for (i=0; i < randomWord.length; i++) {
        //Checking if randomly selected password from words variable has space, if yes add space to generated floor
        if (randomWord.charAt(i) === ' ') {
            wynik = wynik + "<span id='podloga" + i + "'></span> " + "&nbsp";
        } else {
            wynik = wynik + "<span id='podloga" + i + "'>_ </span>";
        }

        document.getElementById("planszowa").innerHTML = wynik + "<br><br>";

    }

}

