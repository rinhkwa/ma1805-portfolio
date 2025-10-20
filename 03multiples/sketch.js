let rgb =[255,0,0]
let select = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill(rgb);
  let i = mouseY;
  while(i<=500){
    let r = random (200)
    circle(i, i+r, mouseX +r);
    i=i+5;
  }
  fill ([0, 255, 0]);
  for(i=0; i<=100; i=i+2){
    let r = random(70)
    circle(i+100,i, mouseX + r);
  }

}
function mouseClicked(){
  if(select==0){
    select = 1;
  } else{
    select = 0;
  }
}
