let runTjek = false; 
let img;

let y = 10; let r = 200; g = 0; b = 0;
let ned = true;
let rystet = 0;
let flyttet = 0;
let længde =0;

function preload() {
    imgRun = loadImage('run.gif'); //preload gif
    imgStanding = loadImage('standing.png'); //preload png
    imggrassAnimation = loadImage('grass_animation.gif'); //preload gif
    imggrass = loadImage('grass.png'); //preload png
  }

function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(20);
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
    background(200);
    strokeWeight(10);
    

    if(runTjek==true){ //runtjek og gif
        image(imgRun, -100, 100);
        image(imggrassAnimation, 0, 420);
    
    }
    else {
    image(imgStanding, 0, 200);
    imgStanding.resize(250, 250);
    image(imggrass, 0, 420);
    }
    if(længde>=1000){
        længde=0;
        r=random(0,255); g=random(0,255); b=random(0,255);
    }
  
  
    rect(25, 80, 250, 35, 28);
    stroke(r,g,b);
    fill(r,g,b);
    ellipse(længde/5+42, 97, 15, 15);
    stroke(0)
    fill(200);
   
    if (ned)
        y=y+4;
    else
        y=y-4;
    
    if (accelerationY > 5) {
        
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

    if(accelerationX==false && accelerationY==false)
    runTjek=false;
    
//text('skridt: ' + str(rystet), 10, height-height/1.3);
text('distance: ' + str(flyttet),10, height-height/1.1);
}

function deviceMoved(){
    flyttet++;
    længde++;
    runTjek = true; //runtjek set true når moved
}
