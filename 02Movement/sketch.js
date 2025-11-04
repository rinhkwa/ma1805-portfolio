let catX;
let catY;
let catSpeedX;
let catSpeedY;
let catSize;
let catTailAngle;
let stars = [];
let numStars;
let hearts = [];
let numHearts;
let time;
let blinkTimer;
let catBlink;

function setup() {
    createCanvas(500, 500);
    
    // In Cat
    catX = 250;
    catY = 250;
    catSpeedX = -2;
    catSpeedY = -2;
    catSize = 100;
    catTailAngle = 0;
    catBlink = false;
    
    // In Stars
    numStars = 30;
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: random(width),
            y: random(height),
            size: random(3, 15),
            speed: random(0.5, 2),
            opacity:150
      
        });
    }
    
    // In Hearts
    numHearts = 12;
    for (let i = 0; i < numHearts; i++) {
        hearts.push({
            x: random(width),
            y: random(height),
            size: random(10, 20),
            speed: random(0.3, 1.5),
            wobble: random(PI,2* PI),
            opacity:120

        });
    }
    
    time = 0;
    blinkTimer = 0;
}

function draw() {
  
    drawGradientBackground();
    updateStars();
    updateHearts();
    time += 0.05;
    blinkTimer++;
    
    // Blinking
    if (blinkTimer % 100<8){
        catBlink = true;
    } else{
        catBlink = false;
    }

  
    catX += catSpeedX;
    catY += catSpeedY;
    
    //Bounce
    if (catX > width - catSize/2 || catX < catSize/2) {
        catSpeedX *= -1;
    }
    if (catY > height - catSize || catY < catSize) {
        catSpeedY *= -1;
    }
    
    catTailAngle = sin(time * 2) * 30;
    drawCat(catX, catY, catSize, catTailAngle, catBlink);
}

function drawGradientBackground() {
    for (let i = 0; i < height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(color(255, 240, 245), color(200, 205, 255), inter);
        stroke(c);
        line(0, i, width, i);
    }
}

function updateStars() {
    for (let star of stars) {
        // Draw star
        fill(255, 255, 200, star.opacity);
        noStroke();
        push();
        translate(star.x, star.y);
        rotate(time);
        drawStar(0, 0, star.size);
        pop();
        
        // Stars mo0vement
        star.y += star.speed;
        star.opacity = 150 + sin(time * 2 + star.x) * 100;
        if (star.y > height) {
            star.y = 0;
            star.x = random(width);
        }
    }
}

function drawStar(x, y, size) {
    beginShape();
    for (let i = 0; i < 5; i++) {
        let angle = 2 * PI / 5 * i - PI;
        let sx = x + cos(angle) * size;
        let sy = y + sin(angle) * size;
        vertex(sx, sy);
        angle += 2 * PI / 10;
        sx = x + cos(angle) * size * 0.5;
        sy = y + sin(angle) * size * 0.5;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function updateHearts() {
    for (let heart of hearts) {
        fill(255, 150, 180, heart.opacity);
        noStroke();
        push();
        translate(heart.x + sin(time * 2 + heart.wobble) * 10, heart.y);
        drawHeart(0, 0, heart.size);
        pop();
        
        // Hearts movement
        heart.y += heart.speed;
        heart.opacity = 120 + sin(time * 2 + heart.wobble) * 80;
        if (heart.y > height) {
            heart.y = 0;
            heart.x = random(width);
        }
    }
}

function drawHeart(x, y, size) {
    beginShape();
    vertex(x, y + size/4);
    bezierVertex(x - size/2, y - size/4, x - size, y, x, y + size);
    bezierVertex(x + size, y, x + size/2, y - size/4, x, y + size/4);
    endShape(CLOSE);
}

function drawCat(x, y, size, tailAngle, blink) {
    // Tail
    stroke(255, 200, 150);
    strokeWeight(10);
    noFill(0);
    
    push();
    translate(x + size/2, y);
    rotate(radians(tailAngle));
    line(0, 0, 25, -30);
    pop();
    
    // Body
    fill(255, 220, 180);
    stroke(0);
    strokeWeight(2);
    ellipse(x, y, size, size);
    
    // Ears
    fill(255, 200, 150);
    triangle(x - size/3, y - size/2.5, x - size/6, y - size/2.1, x - size/4, y - size/1.5);
    triangle(x + size/3, y - size/2.5, x + size/6, y - size/2.1, x + size/4, y - size/1.5);
    
    // Eyes
    fill(0);
    if (!blink) {
        ellipse(x - size/5, y - size/10, size/10, size/12);
        ellipse(x + size/5, y - size/10, size/10, size/12);
    } else {
        strokeWeight(3);
        line(x - size/5 - 5, y - size/10, x - size/5 + 5, y - size/10);
        line(x + size/5 - 5, y - size/10, x + size/5 + 5, y - size/10);
        strokeWeight(2);
    }
    
    // Nose
    fill(255, 140, 150);
    triangle(x, y + size/5, x - size/15, y + size/20, x + size/15, y + size/20);
    
    // Usiki
    stroke(0);
    strokeWeight(1.5);
    line(x - size/2, y-2, x - size/3, y);
    line(x - size/2, y + 5, x - size/3, y + 5);
    line(x + size/2, y-2, x + size/3, y);
    line(x + size/2, y + 5, x + size/3, y + 5);
}