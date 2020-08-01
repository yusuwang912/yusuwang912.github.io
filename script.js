function fall(obj){
    counter();
    obj.disabled = true;
    setTimeout(function() {
        obj.disabled = false;
    }, 3000);
    let static = document.getElementById("staticBtn");
    let live = document.getElementById("liveBtn");
        static.style.visibility = 'hidden';
        live.style.visibility = 'visible';
    live.src = "ball.gif";
    var startTime = new Date().getTime();
    var interval = setInterval(function(){
            if(new Date().getTime() - startTime > 500){
                clearInterval(interval);
                static.style.visibility = 'visible';
                live.style.visibility = 'hidden';
            }
           
        }, 500);
    }


var numBalls = 1;

function counter () {
    numBalls += 1;
    document.getElementById("numBalls").innerHTML = numBalls;
    var pBalls = numBalls / (numBalls + 30);
    pBalls = Math.round(pBalls*100) + "%";
    document.getElementById("pBalls").innerHTML = pBalls;
}


function quit() {
    var b = document.getElementById('numBalls').innerHTML,
        url = 'yusuwang912.github.io/phase2.html?name=' + encodeURIComponent(b);
    document.location.href = url;
}

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('numBalls').innerHTML = data.name;
}


function randomWin () {

    var chance = Math.floor((Math.random() * ( parseInt( document.getElementById('numBalls').innerHTML ) + 30)));
    if( chance < document.getElementById('numBalls').innerHTML ) {
        document.getElementById('win').innerHTML = "You Won. You will receive the base payment plus the winning amount as a bonus. Please add 07 at the end of your study code.";
    } else {
        document.getElementById('win').innerHTML = "Sorry. You Didn't Win. But you will still receive the base payment.";
    }
} 
