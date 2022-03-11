var paredes;
var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10
var parede11, parede12, parede13, parede14, parede15, parede16, parede17, parede18, parede19, parede20
var parede21, parede22, parede23, parede24, parede25, parede26, parede27, parede28, parede29, parede30
var boneco;
var fim;
var checkPoint1, checkPoint2
var cp1 = false, cp2 = false;
var checkpoints = 0
var edges;
var estado = "jogar"
var obs1, obs2, obs3, obs4,obs5
var obstaculos;
var aumentando = true;
var diminuindo = false;
var limiteU,limiteD

function setup() {
  paredes = new Group();
  obstaculos = new Group();
  createCanvas(600, 600);

  fim = createSprite(350, 5, 50, 10);

  checkPoint1 = createSprite(245, 367, 100, 100);
  checkPoint1.shapeColor = "green"

  checkPoint2 = createSprite(440, 365, 80, 90);
  checkPoint2.shapeColor = "green"

  boneco = createSprite(20, 20, 25, 25);

  edges = createEdgeSprites();

  criarParedes();
  criarObs();
}


function draw() {
  background(255, 255, 255);

  boneco.velocityX = 0;
  boneco.velocityY = 0;


  if (keyDown("down")) {
    boneco.velocityY = 5
  }
  if (keyDown("up")) {
    boneco.velocityY = -5
  }
  if (keyDown("right")) {
    boneco.velocityX = 5
  }
  if (keyDown("left")) {
    boneco.velocityX = -5
  }
  if (boneco.isTouching(checkPoint1) && cp1 === false) {
    cp1 = true;
    checkpoints = 1
  }
  if (boneco.isTouching(checkPoint2) && cp2 === false) {
    cp2 = true;
    checkpoints = 2
  }
  if (boneco.isTouching(paredes) || boneco.isTouching(edges) || boneco.isTouching(obstaculos)) {
    switch (checkpoints) {
      case 0:
        boneco.x = 20
        boneco.y = 20
        break;
      case 1:
        boneco.x = checkPoint1.x;
        boneco.y = checkPoint1.y;
        break;
      case 2:
        boneco.x = checkPoint2.x;
        boneco.y = checkPoint2.y;
        break;
    }
  }
  if (boneco.isTouching(fim)) {
    estado = "fim"
  }

  obs5.rotation +=1
  ajustarLargura();
  obstaculos.bounceOff(paredes);
  obstaculos.bounceOff(edges);
  obs2.bounceOff(limiteU);
  obs2.bounceOff(limiteD);
  drawSprites();

  if (estado === "fim") {
    boneco.velocityX = 0;
    boneco.velocityY = 0;

    fill("black");
    textSize(40);
    text("STAGE 1 Cleared", 150, 300);

  }

  fill("red")
  text(mouseX + ", " + mouseY, 10, 10)
}
function criarParedes() {
  //verticais:
  parede1 = createSprite(295, 380, 5, 320);
  parede2 = createSprite(400, 290, 5, 390);
  parede3 = createSprite(295, 56, 5, 176);
  parede4 = createSprite(550, 490, 5, 240);
  parede5 = createSprite(482, 240, 5, 295);
  parede6 = createSprite(140, 160, 5, 315);
  parede7 = createSprite(120, 475, 5, 112);
  parede8 = createSprite(60, 295, 5, 100);
  parede9 = createSprite(60, 460, 5, 80);
  parede10 = createSprite(141, 395, 5, 45);
  parede11 = createSprite(345, 550, 5, 120);
  parede12 = createSprite(222, 109, 5, 75);
  parede13 = createSprite(50, 580, 5, 50);
  parede14 = createSprite(482, 65, 5, 52);
  //horizontais:
  parede15 = createSprite(30, 115, 60, 5);
  parede16 = createSprite(98, 247, 80, 5);
  parede17 = createSprite(100, 419, 220, 5);
  parede18 = createSprite(25, 555, 55, 5);
  parede19 = createSprite(183, 315, 90, 5);
  parede20 = createSprite(250, 500, 93, 5);
  parede21 = createSprite(340, 417, 118, 5);
  parede22 = createSprite(243, 250, 100, 5);
  parede23 = createSprite(181, 145, 85, 5);
  parede24 = createSprite(390, 93, 190, 5);
  parede25 = createSprite(435, 485, 75, 5);
  parede26 = createSprite(575, 370, 55, 5);
  parede27 = createSprite(510, 300, 60, 5);
  parede29 = createSprite(510, 160, 60, 5);

  parede28 = createSprite(575, 240, 60, 5);
  parede30 = createSprite(575, 93, 60, 5);

  paredes.add(parede1)
  paredes.add(parede2)
  paredes.add(parede3)
  paredes.add(parede4)
  paredes.add(parede5)
  paredes.add(parede6)
  paredes.add(parede7)
  paredes.add(parede8)
  paredes.add(parede9)
  paredes.add(parede10)
  paredes.add(parede11)
  paredes.add(parede12)
  paredes.add(parede13)
  paredes.add(parede14)
  paredes.add(parede15)
  paredes.add(parede16)
  paredes.add(parede17)
  paredes.add(parede18)
  paredes.add(parede19)
  paredes.add(parede20)
  paredes.add(parede21)
  paredes.add(parede22)
  paredes.add(parede23)
  paredes.add(parede24)
  paredes.add(parede25)
  paredes.add(parede26)
  paredes.add(parede27)
  paredes.add(parede28)
  paredes.add(parede29)
  paredes.add(parede30)
}
function criarObs() {

  obs1 = createSprite(200, 475, 10, 10);
  obs2 = createSprite(515, 365, 10, 10);
  obs3 = createSprite(65, 185, 13, 13);
  obs4 = createSprite(545, 42, 60, 5);
  obs5 = createSprite(345,455,5,60)

  obstaculos.add(obs1);
  obstaculos.add(obs2);
  obstaculos.add(obs3);
  obstaculos.add(obs4);
  obstaculos.add(obs5);

  obs1.velocityX = 3.5
  obs2.velocityY = -1
  obs2.velocityX = 1
  obs4.velocityX = 1


  limiteU = createSprite(540,42,120,5)
  limiteU.visible = false
  limiteD = createSprite(540,382,120,5)
  limiteD.visible = false

}
function ajustarLargura(){
  if (obs3.width < 140 && aumentando) {
    obs3.width += 1
  }
  if (obs3.width > 13 && diminuindo) {
    obs3.width -= 1
  }
  if (obs3.width >= 140) {
    aumentando = false;
    diminuindo = true;
  } else if (obs3.width <= 13) {
    aumentando = true;
    diminuindo = false;
  }
}