let tiempoAd = 5;

function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; //\u25BA
        document.body.style.backgroundColor = '#fff';
    } else {
        medio.play();
        play.value = '||';
        document.body.style.backgroundColor = 'grey';
    }
}

//cambiar boton play a pause
/* function playPause() {
    if (play.value == "||") {
        play.value = '\u25BA';
    } else {
        play.value = "||";
    }
} */

function accionReiniciar() {
    //Usar propiedad .currentTime
    medio.currentTime = 0;
}

function accionRetrasar() {
    //Usar propiedad .curentTime
    //Contemplar que no existen valores negativos
    if (medio.currentTime <= tiempoAd) {
        medio.currentTime = 0;
    } else {
        medio.currentTime = medio.currentTime - tiempoAd;
    }
}

function accionAdelantar() {
    let tiempoTotal = medio.duration;
    console.log(tiempoTotal);
    //Contemplar que no existen valores mayores a medio.duration
    if (medio.currentTime >= (medio.duration - tiempoAd)) {
        medio.currentTime = medio.duration;
        play.value = '\u25BA';
    } else {
        medio.currentTime = medio.currentTime + tiempoAd;
    }
}

function accionSilenciar() {
    //Utilizar medio.muted = true; o medio.muted = false;
    if (medio.muted == true) {
        medio.muted = false;
    } else {
        medio.muted = true;
    }
}

function accionMasVolumen() {
    //Contemplar que el valor máximo de volumen es 1
    if (medio.volume > 0.9) {
        medio.volume = 1;
    } else {
        medio.volume += 0.1;
    }
}

function accionMenosVolumen() {
    //Contemplar que el valor mínimo de volumen es 0
    if (medio.volume < 0.1) {
        medio.volume = 0;
    } else {
        medio.volume -= 0.1;
    }
}

function iniciar() {

    medio = document.getElementById('medio');
    play = document.getElementById('play');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);

    //Para empezar con el volumen a la mitad
    medio.volume = 0.5;
}

window.addEventListener('load', iniciar, false);