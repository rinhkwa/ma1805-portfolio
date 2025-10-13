let x; 
let y; 
let pet = "hello"
let car;
console.log(pet)

function setup() {
  createCanvas(400, 400);
  pet = "cat";
  console.log(pet);
  car = car + "letter" + "add this text";
  console.log(car);
}



function draw() {
 
  x = random(0, 400);
  y = random(-300, 400);
  let x2 = random(width);
  //background(220);
  //circle
  fill (0, 255, 0);
  circle(x,y,y);

//the text  
  fill(255, 0, 0);
  textSize(20);
  text(car, width/2, height/2);
}