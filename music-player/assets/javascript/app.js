var octave = 4;

var octaveNumbers = ["2", "3", "4"];
var octaveValues = [2, 3, 4]

var keyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s"]
var keyboardHigher = ["d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b"];


$(document).keydown(function (keypressed) {

    playNote(keypressed);
    changeOctave(keypressed);

});

$(document).keyup(function (keypressed) {

    stopNote(keypressed);

});


function playNote(keypressed) {

    var k = keypressed.key;

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

function stopNote(keypressed) {

    var k = keypressed.key;


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


function changeOctave(keypressed) {

    var n = keypressed.key;

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
