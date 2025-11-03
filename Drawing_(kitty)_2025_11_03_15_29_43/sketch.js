function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255, 250, 240);
    
    // Head
    fill(255, 200, 100);
    stroke(5);
    strokeWeight(2);
    ellipse(200, 200, 200, 180);
    
    // Left ear
    fill(255, 200, 100);
    triangle(120, 143, 140, 80, 170, 120);
    
    // Right ear
    triangle(280, 143, 260, 80, 230, 120);
    
    // Inside LE
    fill(255, 180, 150);
    noStroke();
    triangle(130, 135, 145, 95, 160, 120);
    
    // Inside RE
    triangle(270, 135, 255, 95, 240, 120);
    
    // Left eye
    stroke(5);
    strokeWeight(5);
    fill(50);
    ellipse(165, 180, 15, 25);
    
    // Right Eye
    ellipse(235, 180, 15, 25);
    
    // Nose ^_^
    fill(255, 150, 150);
    noStroke();
    triangle(190, 200, 200, 215, 210, 200);
    
    // :3
    stroke(5);
    strokeWeight(2);
    noFill();
    // left
    arc(180, 220, 40, 30, 0, PI);
    // right
    arc(220, 220, 40, 30, 0, PI);
    // Central line
    line(200, 215, 200, 225);
    
    // Mustache Left
    strokeWeight(1.5);
    line(100, 180, 150, 190);
    line(100, 200, 150, 200);
    line(100, 220, 150, 210);
    
    // Mustache Right
    line(300, 180, 250, 190);
    line(300, 200, 250, 200);
    line(300, 220, 250, 210);
    
    // Blush Left
    noStroke();
    fill(255, 150, 150, 100);
    ellipse(140, 210, 30, 20);
    
    // Blush Right
    ellipse(260, 210, 30, 20);
    
    // Spark
    fill(255);
    ellipse(167, 177, 5, 8);
    ellipse(237, 177, 5, 8);
}