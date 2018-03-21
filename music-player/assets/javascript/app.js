var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "Assets/audio/sample-audio.mp3");

$("#music-controls").on("click", ".theme-button", function () {
    audioElement.play();
    console.log("volume?")
}).on("click", ".pause-button", function () {
    audioElement.pause();
});


var octave = 4;

var octaveNumbers = ["2", "3", "4", "5"];

var keyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s"];







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

};


function changeOctave(keypressed) {

    var n = keypressed.key;

    for (i = 0; i < octaveNumbers.length; i++) {

        if (n === octaveNumbers[i]) {

            octave = n;
            console.log(octave);
        }

    }

};