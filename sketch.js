let stage = 'campo'; // fase inicial
let personagemX = 100;
let personagemY = 300;
let velocidadeY = 0;
let gravidade = 0.6;
let pulando = false;

function setup() {
  createCanvas(600, 400);
  textSize(60);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  if (stage === 'campo') {
    desenharCampo();
    moverPersonagem();
    aplicarGravidade();
    if (personagemX > width - 20) {
      stage = 'cidade';
    }
  } else if (stage === 'cidade') {
    desenharCidade();
    moverPersonagem();
    aplicarGravidade();
    if (personagemX < 0) {
      stage = 'campo';
      personagemX = 0;
    }
  }
  
  desenharPersonagem();
}

function desenharCampo() {
  fill(34, 139, 34); // chão verde
  rect(0, height/2, width, height/2);

  // árvores
  for (let i = 0; i < 3; i++) {
    let baseX = 100 + i * 120;
    fill(139, 69, 19);
    rect(baseX - 10, height/2 - 60, 20, 60);
    fill(0, 100, 0);
    ellipse(baseX, height/2 - 80, 60, 60);
  }
}

function desenharCidade() {
  // céu
  background(180, 200, 255);

  // rua (asfalto)
  fill(50);
  rect(0, height/2 + 60, width, height/2 - 60);

  // calçada
  fill(100);
  rect(0, height/2, width, 20);

  // faixa de pedestre
  fill(255);
  for (let i = 0; i < width; i += 40) {
    rect(i, height/2 + 70, 20, 10);
  }

  // prédio 1
  fill(170);
  rect(160, height/2 - 100, 70, 100);
  desenharJanelas(160, height/2 - 100, 3, 2);

  // prédio 2
  fill(190);
  rect(300, height/2 - 130, 70, 130);
  desenharJanelas(300, height/2 - 130, 4, 2);
}

// função para desenhar janelas nos prédios
function desenharJanelas(x, y, linhas, colunas) {
  fill(255, 255, 100);
  let margemX = 10;
  let margemY = 10;
  let largura = 15;
  let altura = 20;
  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      let jx = x + margemX + j * (largura + 10);
      let jy = y + margemY + i * (altura + 10);
      rect(jx, jy, largura, altura);
    }
  }
}

function desenharPersonagem() {
  text("🧍‍♂️", personagemX, personagemY);
}

function moverPersonagem() {
  if (keyIsDown(RIGHT_ARROW)) {
    personagemX += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    personagemX -= 2;
  }
  personagemX = constrain(personagemX, 0, width);
}

function aplicarGravidade() {
  let chaoY = height / 2 - 16;
  if (stage === 'cidade') {
    chaoY = height/2 + 44; // chão da cidade é a calçada
  }

  velocidadeY += gravidade;
  personagemY += velocidadeY;

  if (personagemY >= chaoY) {
    personagemY = chaoY;
    velocidadeY = 0;
    pulando = false;
  }
}

function keyPressed() {
  if (key === ' ' && !pulando) {
    velocidadeY = -12;
    pulando = true;
  }
}
