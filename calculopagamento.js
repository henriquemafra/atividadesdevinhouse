// variaveis
let quantidadeFuncionarios, quantidadeHoras, valorHora, total;

// insere valores as variáveis
quantidadeFuncionarios = parseInt(prompt("Informe a quantidade de funcionários:"))
quantidadeHoras = parseInt(prompt("Informe a quantidade de horas trabalhadas:"))
valorHora = parseInt(prompt("Informe o valor da hora:"))

// define formula matemática do calculo

total = quantidadeFuncionarios * quantidadeHoras * valorHora;

// imprime o total do custo com funcionarios da empresa

alert("A empresa precisa pagar para seus colaboradores: R$ " + total)