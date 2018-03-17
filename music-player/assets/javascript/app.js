

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "Assets/audio/sample-audio.mp3");

$("#music-controls").on("click", ".theme-button", function () {
    audioElement.play();
    console.log("volume?")
}).on("click", ".pause-button", function () {
    audioElement.pause();
});


$(document).keydown(function (keypressed) {

    playNote(keypressed);

});

$(document).keyup(function (keypressed) {

    stopNote(keypressed);

});


function playNote(keypressed) {

    var k = keypressed.key;

    if (k === "q" || k === "w" || k === "e" || k === "r") {

        audioElement.play();
        $("." + k ).addClass("pushed");
        console.log("playing");
    };

};

function stopNote(keypressed) {

    var k = keypressed.key;

    if (k === "q" || k === "w" || k === "e" || k === "r") {

        audioElement.pause();
        $("." + k ).removeClass("pushed");
        console.log("stopped");
    };

};