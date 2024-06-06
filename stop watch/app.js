let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let start = document.getElementById("start");
let stop = document.getElementById("stopped");
let reset;


let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;

function counter(){
    ms++;
    if(ms === 60){
        sec++;
        ms = 0;
    }
    if(sec === 60){
        min++;
        sec = 0;
    }
    if(min === 60){
        hr++;
        min = 0;
    }
    if (hr < 10) {
        hours.innerText = `0` + hr
    }
    else {
        hours.innerText = hr
    }
    
    if (min < 10) {
        minutes.innerText = `0` + min
    }
    else {
        minutes.innerText = min
    }
    
    if (sec < 10) {
        seconds.innerText = `0` + sec
    }
    else {
        seconds.innerText = sec
    }
    if (ms < 10) {
        milliseconds.innerText = `0` + ms
    }
    else {
        milliseconds.innerText = ms
    }
    start.setAttribute('disabled', 'disabled');
    stopped.removeAttribute('disabled', 'disabled');

}


function counterStart() {
    reset = setInterval(counter, 15);
}

function counterStop() {
clearInterval(reset);
start.removeAttribute('disabled', 'disabled');
stopped.setAttribute('disabled', 'disabled');

}

function counterReset() {
sec = 0;
min = 0;
hr = 0;
ms = 0;
clearInterval(reset);
hours.innerText = '00';   
minutes.innerText = '00';   
seconds.innerText = '00';      
milliseconds.innerText = '00';
start.removeAttribute('disabled', 'disabled');
stopped.removeAttribute('disabled', 'disabled');

}