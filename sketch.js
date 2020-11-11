var fixrec,movrec
function setup() {
  createCanvas(800,400);
  movrec = createSprite(400, 200, 50, 50);
  fixrec = createSprite(200,200,50,80)
  fixrec.debug = true
  movrec.debug = true
}

function draw() {
  background("black"); 
  movrec.x = mouseX
  movrec.y = mouseY
  if(movrec.x - fixrec.x < fixrec.width/2 + movrec.width/2 && fixrec.x - movrec.x < fixrec.width/2 + movrec.width/2 && fixrec.y - movrec.y < fixrec.height/2 + movrec.height/2 &&movrec.y - fixrec.y < fixrec.height/2 + movrec.height/2 ){
  movrec.shapeColor = "blue" 
  fixrec.shapeColor = "green"
  }else  {
  movrec.shapeColor = "red" 
  fixrec.shapeColor = "red"
  }
  
  console.log(movrec.x-fixrec.x)
  drawSprites();
}