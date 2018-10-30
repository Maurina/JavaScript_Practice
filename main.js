let i = 0;
let txt = 'Happy Halloween!';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("firstEffect") .innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

