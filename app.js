if (theLooper != undefined) {
    clearInterval(theLooper);
}
var theLooper = setInterval(letsGooo, 2000);

function letsGooo() {
    var currentCoins = document.getElementsByClassName('ticker-last')[0].innerHTML;
    var maxCoins = 0.0060000
    var minCoins = 0.0045000
    if (currentCoins >= maxCoins) {
        soundAlert();
        clearInterval(theLooper);
        alert('ราคาขึ้นแว้ววววว ' + currentCoins);
    } else if (currentCoins <= minCoins) {
        soundAlert();
        clearInterval(theLooper);
        alert('ลงแล้ว ซื้อเลย : ' + currentCoins);
    }
}

function soundAlert() {
    setTimeout(restartLoop, 15000)
    var audio = new Audio('http://www.freesfx.co.uk/rx2/mp3s/6/18140_1464294646.mp3');
    audio.play();
}

function restartLoop() {
    theLooper = setInterval(letsGooo, 2000);
}
//clearInterval(theLooper);
