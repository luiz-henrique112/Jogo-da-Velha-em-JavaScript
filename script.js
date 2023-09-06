var board // Matriz que representa o tabuleiro
    tilesize = 100 //Tamanho das cédulas do tabuleiro
   currentPlayer//Jogador atual
    winner //Vencedor
    
    

function setup() {
  createCanvas(300,300) //Cria um canvas de 300px por 300px
  initializeBoard() //inicializa o tabuleiro
currentPlayer='X' //Define o jogador atual como 'X'

}


function draw (){
  drawSprites()//Desenha os Sprites
drawBoard() //Desenha o tabuleiro
checkWinner() // Verfica o vencedor

if (winner) {
  // Se houver um vencedor
  const alerta = setTimeout(function() {
    alert('Winner: ' + winner); // Exibe um alerta com o vencedor
  }, 25);
  
  if (alerta) {
    initializeBoard(); // Reinicializa o tabuleiro, causando um efeito restart no jogo
  }
} var x = 0;
  var y = 0;
  var size = 300;
  
  noFill(); // Define o preenchimento como transparente
  stroke('#ffffff'); // Define a cor da borda como branco
  strokeWeight(3); // Define a largura da borda
   rect(x, y, size, size)
 
}

      


function mouseClicked() {
  if (!winner) {
    // Se não houver um vencedor
    var col = floor(mouseX / tilesize); // Calcula a coluna clicada com base na posição do mouse
    var row = floor(mouseY / tilesize); // Calcula a linha clicada com base na posição do mouse

    if (board[row][col] === '') {
      // Se a célula estiver vazia
      board[row][col] = currentPlayer; // Preenche a célula com o símbolo do jogador atual
      switchPlayer(); // Alterna para o próximo jogador
    }
  }
}

  
function initializeBoard() {
  // Inicializa o tabuleiro com células vazias
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
}
  
function drawBoard() {
  // Desenha o tabuleiro na tela
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      var x = col * tilesize; // Posição x da célula
      var y = row * tilesize; // Posição y da célula

      fill(255); // Cor de preenchimento branco
      rect(x, y, tilesize, tilesize); // Desenha um retângulo para representar a célula

      textSize(64); // Tamanho do texto
      textAlign(CENTER, CENTER); // Alinhamento do texto
      fill(0); // Cor do texto preto
      text(board[row][col], x + tilesize / 2, y + tilesize / 2); // Exibe o símbolo do jogador atual na célula
    }
  }
}


function switchPlayer() {
  // Alterna para o próximo jogador
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}



function checkWinner(){
//Verifica o vencedor

  for (var row = 0; row < 3; row++) {
    //Verifica linhas
    if (board[row][0] === board[row][1] &&
       board[row][1] === board[row][2] &&
       board[row][0] !== '') {
      winner = board[row][0];
      return;
    }
  }

  for (var col = 0; col < 3; col++) {
    //Verifica colunas
    if (board[0][col] === board[1][col] &&
       board[1][col] === board[2][col] &&
       board[0][col] !== '') {
      winner = board[0][col];
      return;

    }
  }

  if (board[0][0] === board[1][1] &&
     board[1][1] === board[2][2] &&
     board[0][0] !== '') {
    winner = board[0][0];
    //Verifica diagonal(direita superior a esquerda inferior)
    return;
  }

  if (board[0][2] === board[1][1] &&
     board[1][1] === board[2][0]) {
    winner = board[0][2]
    //Verifica diagonal(esquerda superior a direita inferior)
    return
  }

  var isFull = true; //Verifica se o tabuleiro está cheio
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      if (board[row][col] === '') {
        isFull = false; //Se houver uma célula vazia, o tabuleiro não está cheio
        break;
      }
    }
  }

  if (isFull) {
    winner = 'none';//Se não houver uma célula vazia, e também não há um vencedor, é um empate
    return;
  }
}
