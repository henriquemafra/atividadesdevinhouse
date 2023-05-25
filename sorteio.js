// declara variável

let numeroSorte, numeroInserido

// declara numeroSorte

numeroSorte = Math.floor(Math.random() * 51)

// captura numeroInserido

numeroInserido = prompt("Insira seu número da sorte entre 0 e 50:")

// converte numeroInserido para inteiro

numeroInserido = parseInt(numeroInserido)

// processamento

if( numeroSorte === numeroInserido) {
alert("Parabéns, você ganhou uma bala de yogurt.")
}
else {
    alert("Você errou.")
}