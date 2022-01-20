let audio1 = document.getElementById("audio1");
let audio;

let campana = new Audio('assets/audio/campana.wav');
let ola = new Audio('assets/audio/olas.mp3');
let arcade = new Audio('assets/audio/arcade.mp3');
let pasos = new Audio('assets/audio/pasos.mp3');


audio1.addEventListener("click", function(e) {
    /* audio.src = "assets/audio/olas.mp3"; */
    if (ola.paused) {
        ola.play();
    } else {
        ola.pause();
    }
});

let audio2 = document.getElementById("audio2");
audio2.addEventListener("click", function(e) {
    /* audio.src = "assets/audio/olas.mp3"; */
    if (campana.paused) {
        campana.play();
    } else {
        campana.pause();
    }
});

let audio3 = document.getElementById("audio3");
audio3.addEventListener("click", function(e) {
    if (arcade.paused) {
        arcade.play();
    } else {
        arcade.pause();
    }
});

let audio4 = document.getElementById("audio4");
audio4.addEventListener("click", function(e) {
    /* audio.src = "assets/audio/olas.mp3"; */
    if (pasos.paused) {
        pasos.play();
    } else {
        pasos.pause();
    }
});