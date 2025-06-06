let stage = 'campo'; // fase inicial
let personagemX = 50;
let personagemY = 300;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  if (stage === 'campo') {
    desenharCampo();
    moverPersonagem();
    if (personagemX > width - 50) {
      stage = 'cidade'; // muda para cidade ao chegar na borda direita
    }
  } else if (stage === 'cidade') {
    desenharCidade();
    moverPersonagem();
  }
  
  desenharPersonagem();
}

function desenharCampo() {
  fill(34, 139, 34);
  rect(0, height/2, width, height/2); // chão do campo
  fill(0, 100, 0);
  ellipse(100, height/2 - 100, 80, 80); // árvore
  // adicione mais elementos do campo aqui
}

function desenharCidade() {
  fill(150);
  rect(0, height/2, width, height/2); // chão da cidade
  fill(200);
  rect(150, height/2 - 50, 50, 50); // prédio
  rect(250, height/2 - 70, 50, 70); // prédio maior
  rect(350, height/2 - 40, 50, 40); // prédio menor
  // adicione mais elementos da cidade aqui
}

function desenharPersonagem() {
  fill(255, 0, 0);
  ellipse(personagemX, personagemY, 20, 20);
}

function moverPersonagem() {
  if (keyIsDown(RIGHT_ARROW)) {
    personagemX += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    personagemX -= 2;
  }
}
