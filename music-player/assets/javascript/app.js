var octave = 4;

var octaveNumbers = ["2", "3", "4"];
var octaveValues = [2, 3, 4]

var keyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s"]
var keyboardHigher = ["d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b"];



function playNote(k) {


    for (i = 0; i < keyboard.length; i++) {

        if (k === keyboard[i]) {

            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/" + k + octave + ".wav");

            if ($("." + k).hasClass("pushed") === false) {


                audioElement.play();
                $("." + k).addClass("pushed");
                console.log("playing");
            }

        };

    }

    for (i = 0; i < keyboardHigher.length; i++) {

        if (k === keyboardHigher[i]) {

            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/" + keyboard[i] + (octave + 1) + ".wav");

            if ($("." + k).hasClass("pushed") === false) {


                audioElement.play();
                $("." + k).addClass("pushed");
                console.log("playing");
            }

        };

    }


};

function stopNote(k) {

    for (i = 0; i < keyboard.length; i++) {

        if (k === keyboard[i]) {

            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/" + k + octave + ".wav");

            audioElement.pause();
            $("." + k).removeClass("pushed");
            console.log("paused");
        };

    };

    for (i = 0; i < keyboardHigher.length; i++) {

        if (k === keyboardHigher[i]) {

            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/" + keyboard[i] + octave + ".wav");

            audioElement.pause();
            $("." + k).removeClass("pushed");
            console.log("paused");
        };

    };

};


function changeOctave(n) {


    for (i = 0; i < octaveNumbers.length; i++) {

        if (n === octaveNumbers[i]) {

            octave = octaveValues[i];
            console.log(octave);

            for (i = 0; i < octaveNumbers.length; i++) {

                $("." + octaveNumbers[i]).removeClass("pushed");
            }


            $("." + n).addClass("pushed");

        }

    }

};


$(".piano").on("click", ".btn", function () {

    console.log($(this).text());

    k = $(this).text();
    playNote(k);
    stopNote(k);

})

$(".octave-control").on("click", ".btn", function () {

    console.log($(this).text());

    k = $(this).text();
    changeOctave(k);

})


$(document).keydown(function (keypressed) {

    var k = keypressed.key;

    playNote(k);
    changeOctave(k);

});

$(document).keyup(function (keypressed) {

    var k = keypressed.key;
    stopNote(k);

});