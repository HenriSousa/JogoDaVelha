var jogador = null;
let vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
mudarJogador(valor= 'X');

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }
    var square = document.getElementById(id);
    if(square.innerHTML !== '+'){
        return;
    }

    square.innerHTML = jogador;
    square.style.color = "#000";
    

    if(jogador == 'X'){
        jogador = 'O';        
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();
              
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}


function checarVencedor(){
    var square1 = document.getElementById('1');
    var square2 = document.getElementById('2');
    var square3 = document.getElementById('3');
    var square4 = document.getElementById('4');
    var square5 = document.getElementById('5');
    var square6 = document.getElementById('6');
    var square7 = document.getElementById('7');
    var square8 = document.getElementById('8');
    var square9 = document.getElementById('9');

    if (checarSequencia(square1, square2, square3)) {
        mudarCorSquare(square1, square2, square3);
        mudarVencedor(square1);
        return;
    }

    if (checarSequencia(square4, square5, square6)) {
        mudarCorSquare(square4, square5, square6);
        mudarVencedor(square4);
        return;
    }

    if (checarSequencia(square7, square8, square9)) {
        mudarCorSquare(square7, square8, square9);
        mudarVencedor(square7);
        return;
    }

    if (checarSequencia(square1, square4, square7)) {
        mudarCorSquare(square1, square4, square7);
        mudarVencedor(square4);
        return;
    }

    if (checarSequencia(square2, square5, square8)) {
        mudarCorSquare(square2, square5, square8);
        mudarVencedor(square2);
        return;
    }

    if (checarSequencia(square3, square6, square9)) {
        mudarCorSquare(square3, square6, square9);
        mudarVencedor(square3);
        return;
    }

    if (checarSequencia(square1, square5, square9)) {
        mudarCorSquare(square1, square5, square9);
        mudarVencedor(square1);
        return;
    }

    if (checarSequencia(square3, square5, square7)) {
        mudarCorSquare(square3, square5, square7);
        mudarVencedor(square3);
        
    }
}

function mudarVencedor(square){
    vencedor = square.innerHTML;
    vencedorSelecionado.innerHTML =  vencedor;
    document.querySelector('.vencedor').style.display = "block";
}

function mudarCorSquare(square1, square2, square3) {
    square1.style.background = '#0f0';
    square2.style.background = '#0f0';
    square3.style.background = '#0f0';

}

function checarSequencia(square1, square2, square3) {
    var eigual = false;

    if (square1.innerHTML !== '+' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        return eigual = true;
    }

    return eigual;
}

function restart(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++){
        var square = document.getElementById(i);
        square.style.background = "#eee";
        square.style.color = "#eee";
        square.innerHTML = '+';
    }
    mudarJogador('X');
}