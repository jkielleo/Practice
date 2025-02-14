function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// Move the button on hover (desktop)
moveRandom.addEventListener("mouseover", function(e) {
    moveRandomEl(e.target);
});

// Move the button on touch (mobile)
moveRandom.addEventListener("touchstart", function(e) {
    moveRandomEl(e.target);
});

// Alert function
function alert() {
    alert("You've no choice but to love me tho... Just Click YES!!!");
}
