// define todas as variáveis
let matriz = [];
let resultadoPrimeiraLinha, resultadoSegundaColuna, primeiraLinha, segundaColuna;


// for para criar matriz
for (i = 0; i < 3; i++) {
    matriz[i] = [];
    
    for ( j = 0; j < 3; j++) {
        matriz[i][j] = parseInt(prompt("Digite o numero para posição [" + i + "][" + j + "]:"));
    }

}

// calcula resultados da primeira linha
primeiraLinha = matriz[0]
resultadoPrimeiraLinha = 0

for ( j = 0; j < primeiraLinha.length; j++) {
    resultadoPrimeiraLinha += primeiraLinha[j];

}

// calcula resultados da segunda coluna
segundaColuna = []
resultadoSegundaColuna = 0

for ( i = 0; i < matriz.length; i++) {
    segundaColuna[i] = matriz[i][1];
    resultadoSegundaColuna += segundaColuna[i];

}

// imprime na tela os resultados
alert("Resultado soma da primeira linha: " + resultadoPrimeiraLinha + "\nResultado soma da segunda coluna: " + resultadoSegundaColuna);