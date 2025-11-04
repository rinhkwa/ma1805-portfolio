let angle = 0;
let bloodDrops = [];

function setup() {
    createCanvas(600, 800);
    angleMode(DEGREES);
}

function draw() {
    background(150, 0, 0);

    fill(40, 40, 40);
    noStroke();
    rect(0, height - 250, width, 250);

    fill(25, 25, 25);
    let columnWidth = 30;
    let columnSpace = 50;
    for (let i = 0; i < width; i += columnSpace) {
        rect(i + 10, height - 240, columnWidth, 230);
    }
  

    fill(5, 5, 5);

    for (let y = height - 220; y < height - 40; y += 40) {
        for (let x = 25; x < width; x += 50) {
            rect(x, y, 15, 25);
        }
    }

    fill(10, 10, 10);
    rect(width/2 - 40, height - 110, 80, 120);


    textAlign(CENTER,CENTER);
    textSize(80);
    textStyle(BOLD);
    noStroke();
    

    fill(255, 130, 0);
    beginShape();
    vertex(0, height - 250);
    vertex(40, height - 350);
    vertex(45, height - 250);
    vertex(55, height - 275);
    vertex(65, height - 255);
    vertex(80, height - 335);
    vertex(90, height - 300);
    vertex(120, height - 375);
    vertex(150, height - 300);
    vertex(180, height - 350);
    vertex(200, height - 275);
    vertex(220, height - 300);
    vertex(280, height - 250);
    endShape(CLOSE);
  
     fill(255, 140, 0);
    beginShape();
    vertex(0, height - 250);
    vertex(40, height - 300);
    vertex(45, height - 250);
    vertex(55, height - 255);
    vertex(65, height - 250);
    vertex(80, height - 290);
    vertex(90, height - 250);
    vertex(120, height - 325);
    vertex(150, height - 280);
    vertex(180, height - 300);
    vertex(200, height - 255);
    vertex(220, height - 280);
    vertex(280, height - 250);
    endShape(CLOSE);
  
      fill(255, 130, 0);
    beginShape();
    vertex(300, height - 250);
    vertex(340, height - 350);
    vertex(345, height - 250);
    vertex(355, height - 275);
    vertex(365, height - 255);
    vertex(450, height - 300);
    vertex(480, height - 350);
    vertex(500, height - 275);
    vertex(520, height - 300);
    vertex(540, height - 275);
    vertex(550, height - 300);
    vertex(580, height - 275);
    vertex(600, height - 300);
    vertex(600, height - 250);
    endShape(CLOSE);
  
     fill(255, 140, 0);
    beginShape();
    vertex(300, height - 250);
    vertex(340, height - 300);
    vertex(345, height - 250);
    vertex(355, height - 255);
    vertex(365, height - 250);
    vertex(450, height - 280);
    vertex(480, height - 330);
    vertex(500, height - 255);
    vertex(520, height - 280);
    vertex(540, height - 255);
    vertex(550, height - 290);
    vertex(580, height - 255);
    vertex(600, height - 280);
    vertex(600, height - 250);
    endShape(CLOSE);
  
    fill(0);
    text("QANTAR '22", width/2, 120);
    textSize(40);
    textStyle(BOLD);
    let pattern = "ALMATY";
    text(pattern, width/2, 50);
  

    textSize(30);
    textStyle(BOLD);
    text("NEVER FORGET", width/2, height/2 + 125);
  
    push();
    translate(width/2, height/2 - 50);
    rotate(angle);

    fill(0);
    noStroke();
    circle(0,0, 180);
    let numRays = 32;
    for (let i = 0; i < numRays; i++) {
        push();
        rotate((360 / numRays) * i);
        triangle(0, 150, 20, 10, -30, 10);
      pop();
    }
    pop();
    angle += 0.25;
  
    for (let i = bloodDrops.length - 1; i >= 0; i--) {
        let drop = bloodDrops[i];
        
        fill(250, 0, 0);
        noStroke();
        circle(drop.x, drop.y, drop.size);
        
        drop.x += drop.vx;
        drop.y += drop.vy;
        drop.vy += 0.35; 
        drop.size *= 0.97;
        
        if (drop.size < 1) {
            bloodDrops.splice(i, 1);
        }
    }

  
}

function mousePressed() {
    let numDrops = random(10, 30);
    
    for (let i = 0; i < numDrops; i++) {
        let drop = {
            x: mouseX,
            y: mouseY,
            vx: random(-4, 4),
            vy: random(-10, -1),
            size: random(5, 20),
        };
        bloodDrops.push(drop);
    }
}