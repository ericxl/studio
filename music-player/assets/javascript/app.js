var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "Assets/audio/sample-audio.mp3");

$("#music-controls").on("click", ".theme-button", function () {
    audioElement.play();
    console.log("volume?")
}).on("click", ".pause-button", function () {
    audioElement.pause();
});


var keyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]


$(document).keydown(function (keypressed) {

    playNote(keypressed);

});

$(document).keyup(function (keypressed) {

    stopNote(keypressed);

});


function playNote(keypressed) {

    var k = keypressed.key;

    for (i = 0; i < keyboard.length; i++) {

        if (k === keyboard[i]) {

            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "Assets/audio/" + k + ".wav");

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
            audioElement.setAttribute("src", "Assets/audio/" + k + ".wav");

            audioElement.pause();
            $("." + k).removeClass("pushed");
            console.log("paused");
        };

    };

};