let runTjek = false; 
let imgRun;
let imgStanding;

let y = 10; let r = 200; g = 180; b = 0;
let ned = true;
let rystet = 0;
let flyttet = 0;

function preload() {
    imgRun = loadImage('run.gif'); //preload gif
    imgStanding = loadImage('standing.png'); //preload png
  }

function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(24);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
    parentDiv.insertBefore(canvas.elt, p);
}


function draw() {
    background(r, g, b);
    strokeWeight(10);
    if(runTjek==true) //runtjek og gif
        image(imgRun, -100, 100);
    else
    image(imgStanding, 50, 200);

    ellipse(width / 2, y, 50);
    if (ned)
        y=y+4;
    else
        y=y-4;
    if (y >= height-100 || y <= 0)
        ned = !ned;
    if (accelerationX > 20) {
        
        if(rystet%2 == 0)
        ned = !ned;
        rystet++;
    }
    if (flyttet<300)
    r=255, b=0, g=0

    if (1000>flyttet>500)
    r=255, b=255, g=153

    if (flyttet>1000)
    r=0, b=0, g=255
    
text('skridt: ' + str(rystet), 50, height-100);
text('distance: ' + str(flyttet),50, height-50);
}

function deviceMoved(){
    flyttet++;
    runTjek = true; //runtjek set true når moved
}

