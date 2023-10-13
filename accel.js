let y = 10; let r = 200; g = 180; b = 0;
//sjs
function draw() {
    background(r, g, b);
    strokeWeight(10);
    ellipse(width / 2, y, 50);
    if (ned)
        y++;
    else
        y--;
    if (y >= height || y <= 0)
        ned = !ned;
    if (accelerationX > 70) {
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
        if(rystet%2 == 0)
        ned = !ned;
    }
}