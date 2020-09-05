var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1600, 400);
  
  thickness = random(22, 83);

  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 20, 5);
  bullet.shapeColor = color(255, 255, 255)
  bullet.velocityX = speed;
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
}
function draw() {
  background("black");  

  

  if(damage < 10 && bullet.collide(wall)) {
    bullet.shapeColor = color(0,255,0);
  } if (damage > 10 && bullet.collide(wall)) {
    bullet.shapeColor = color(255,0,0);
  } 

  drawSprites();

  textSize(30);
  fill("white");  
  text("Damage: " + damage,500,100);
}