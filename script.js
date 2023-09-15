// Desafio 02 - Calculadora de partidas Rankeadas
// Dev: Jackson Silva
// Data: 14/09/2023

// Retorna o Saldo de Vitórias
function nivelRankeada(vitorias, derrotas){
    //Calcula o saldo de Vitórias
    let saldoVitorias = vitorias - derrotas
    
    //Determina o nível com base no saldo de vitórias
    let nivel

    if(saldoVitorias < 10){
        nivel = "Ferro"
    }
    else if(saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze"
    }
    else if(saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata"
    }
    else if(saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = "Ouro"
    }
    else if(saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = "Diamante"
    }
    else if(saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = "Lendário"
    }
    else{
        nivel = "Imortal"
    }

    //Retorno a mensagem de saída
    return `O Herói tem o saldo de ${saldoVitorias} e está no nível ${nivel}!`
}
//Valores das variáveis
let vitorias = 200
let derrotas = 100
//Variável para mostrar na tela
const resultado = nivelRankeada(vitorias, derrotas)
console.log(resultado)