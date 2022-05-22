// Objekt mit Tieren
let animals = [
    {
        animal: "Kuh",
        avgAge: 20,
        area: "Weide",
        food: "Gras"
    },
    {
        animal: "Schwein",
        avgAge: 17,
        area: "Stall",
        food: "Essensreste"
    },
    {
        animal: "Hund",
        avgAge: 11,
        area: "Hundehütte",
        food: "Spezialfutter"
    },
    {
        animal: "Katze",
        avgAge: 14,
        area: "Haus",
        food: "Maus"
    },
    {
        animal: "Frosch",
        avgAge: 10,
        area: "Teich",
        food: "Insekten"
    },
    {
        animal: "Maus",
        avgAge: 4,
        area: "Höhle",
        food: "Käse"
    }
]
// Objekt animals wird in JSON umgewandelt (damit man es durchgehen kann)
const myAnimals = JSON.parse(JSON.stringify(animals));

//warte bis HTML document ready -> dann funktion ausführen
$(document).ready(function () {
    //wenn click event auf ein Element <p> mit Attribut name="tier"
    $(document).on('click', 'p[name=tier]', function () {

        //von allen HTML Elementen mit Klasse .alert wird Klasse visually-hidden entfernt 
        $('.alert').removeClass('visually-hidden');

        //Tier von Click wird zugewiesen
        //Attribut ID muss dafür gesetzt sein
        let tier = $(this).attr('id');


        //alle Tiere werden durchgesucht
        for (var i = 0; i < myAnimals.length; i++) {
            //wenn passendes Tier gefunden, dann einsetzen
            if (myAnimals[i].animal.toUpperCase() == tier.toUpperCase()) {
                //mit #name wird aud id="name" zugegriffen 
                //.text überschreibt
                $("#name").text(myAnimals[i].animal);
                $("#age").text(myAnimals[i].avgAge);
                $("#area").text(myAnimals[i].area);
                $("#food").text(myAnimals[i].food);

                //html code wird im Element mit der id="audio" eingefürt
                //wenn statischer Code in HTML-Datei steht wird immer derselber sound abgespielt
                $("#audio").html(
                    '<audio id="myAudio">'+
                    '<source src="" type="audio/mpeg">'+
                    'Your browser does not support the audio element.'+
                    '</audio>'
                );
                //Quelle der Audio Datei setzen
                $("source:first-child").attr("src", "sounds/" + myAnimals[i].animal.toLowerCase() + ".mp3");
                //Audio Datei abspielen
                document.getElementById("myAudio").play();
            }
        }


    });
});