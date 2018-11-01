let i = 0;
let txt = 'Happy Thanksgiving!';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("firstEffect") .innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

//alert box
function myAlert(){
    setTimeout(function(){alert("It's cold outside");}, 200);
}

//date and time
function dateTime(){
    document.getElementById('DateTime').innerHTML = Date();
} 

//change size and color