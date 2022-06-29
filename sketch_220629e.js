function setup() {
    initializeFields();
    createCanvas(500, 500);
}

var N;

var x;

var y;

function draw() {
    background(color(0xD8, 0xAA, 0x44));
    for (var i = 0; i <= 10; i++) {
        line(50 * i, 0, 50 * i, 500);
        line(0, 50 * i, 500, 50 * i);
    }
    for (var i = 0; i < N; i++) {
        if (i % 2 == 0)
            fill(255, 255, 255);
        else
            fill(0, 0, 0);
        ellipse(x[i], y[i], 45, 45);
    }
    if (N % 2 == 0)
        fill(255, 255, 255);
    else
        fill(0, 0, 0);
    ellipse(mouseX, mouseY, 45, 45);
}

function mousePressed() {
    x[N] = mouseX;
    y[N] = mouseY;
    N++;
}

function initializeFields() {
    N = 0;
    x = new Array(100);
    y = new Array(100);
}
