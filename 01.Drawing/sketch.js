let moving_size = 10;
let static_size = 20;
function setup() {  
  createCanvas(windowWidth, windowHeight);  
  frameRate(25);
}
function draw() {  
  background(random(240, 255), 200, random(220, 240)); 
  
  noStroke()  
  fill(255);  
  ellipse(260, 230, 440, 400); 

  noStroke()  
  fill(255,210, 220);  
  ellipse(400, 230, 60, 20); 

  noStroke() 
  fill(255,210, 220);  
  ellipse(110, 230, 60, 20); 
  
  noStroke()  
  fill(0);  
  rect(97, 180, 79, 12); 

  stroke(100);  
  strokeWeight(3);  
  arc(250, 300, 120, 80, 0, PI, 0);  

  
  beginShape();  
  vertex(320, 200);  
  vertex(360, 100);  
  vertex(410, 200);  

  endShape(CLOSE);  
  

  fill(255);
  noStroke();
  beginShape();  
  vertex(490, 20);  
  vertex(365, 60);  
  vertex(450, 200);  

  endShape(CLOSE);  


  fill(255);
  noStroke();
  beginShape();  
  vertex(40, 20);  
  vertex(190, 100);  
  vertex(60, 200);  

  endShape(CLOSE);  

  fill(255, 200, 200);
  noStroke();
  beginShape();  
  vertex(45, 30);  
  vertex(130, 90);  
  vertex(65, 150);  

  endShape(CLOSE);  



  
fill(255, 220, 240);
  noStroke();
  beginShape();  
  vertex(220, 220);  
  vertex(250, 270);  
  vertex(280, 220);  

  endShape(CLOSE);  
 
fill(0);  
stroke(100);  
ellipse(mouseX, mouseY, moving_size, moving_size); 

if (mouseIsPressed) {    
 static_size = floor(random(5, 20));
}
}  
  

