// variáveis
var nomes = [], ano = [], concatenar = []

// captura dados do usuário
for (let i = 0; i < 3; i++) {
    nomes[i] = prompt("Digite o nome " + (i + 1) + ":");
    ano[i] = parseInt(prompt("Digite o ano de nascimento da pessoa " + (i + 1) + ":"));
    concatenar[i] = nomes[i] + "," + ano[i];
}

// imprime na tela a concatenação
alert("Resultados:\n" + concatenar.join("\n"));