var initialX;
var initialY;

function touchStart(event) {
    initialX = event.touches[0].clientX;
    initialY = event.touches[0].clientY;
    document.getElementById("initial").innerHTML = "Press Down at " + initialX + ", " + initialY;
}

function touchMove(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;

    document.getElementById("position").innerHTML = x + ", " + y;

    var xDist = Math.abs(x - initialX);
    var yDist = Math.abs(y - initialY);

    if (xDist > yDist) {
        if (initialX < x) {
            document.getElementById("direction").innerHTML = "RIGHT";
        } else {
            document.getElementById("direction").innerHTML = "LEFT";
        }
    } else {
        if (initialY < y) {
            document.getElementById("direction").innerHTML = "DOWN";
        } else {
            document.getElementById("direction").innerHTML = "UP";
        }
    }
}


document.addEventListener('touchstart', touchStart, false);
document.addEventListener('touchmove', touchMove, false);