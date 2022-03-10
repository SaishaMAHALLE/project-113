function preload() { } 

function setup() {
     canvas = createCanvas(640, 480);
     canvas.position(110, 250); 
     video = createCapture(VIDEO);
    video.hide();
    
 } 
 
 function draw() { 
     image(video, 0, 0, 640, 480);
     circle(30, 30, 60);
     rect(57, 15, 555, 30);
     circle(600, 30, 60);
     rect(15, 60, 30, 520);
     circle(30, 451, 60);
     rect(57, 435, 555, 30);
     rect(585, 60, 30, 520);
     circle(600, 451, 60);
     }

 function take_snapshot() {
        save("Saved_Picture.png");
    }