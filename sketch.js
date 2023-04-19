//variáveis para o t-rex
var trex, trexImgCorrendo;
//variável para as bordas
var edges;
//variáveis para o chão


//pré carregamento de imagens 
function preload() {
  //imagens do t-rex sendo carregadas na var auxiliar 
  trexImgCorrendo = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  //imagem do chão sendo carregada na var auxiliar 

}

//função de configuração
function setup() {
  //área do game
  createCanvas(600, 200);

  //t-rex sprite e caracteristicas
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("trexCorrendo", trexImgCorrendo);
  trex.scale = 0.5;

  //sprite do chão e características 




  //bordas
  edges = createEdgeSprites();
}

//executa várias vezes 
function draw() {
  //cor de fundo
  background("white");

  //velocidade do chão


  //recarregamento do chão




  //código para o trex pular
  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  //gravidade
  trex.velocityY = trex.velocityY + 0.5;


  //trex colidindo
  trex.collide(edges[3]);



  //desenha os sprites 
  drawSprites();
}

