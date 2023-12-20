function SaldoRanqueadas(vitorias, derrotas) {
    //Calculo do saldo de vitórias
    let saldoDeVitorias = vitorias - derrotas

    //Determina nivel do herói
    let nivelDoHeroi

    if (vitorias < 10) {
    nivelDoHeroi = "Ferro";
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
    nivelDoHeroi = "Bronze";
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
    nivelDoHeroi = "Prata";
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
    nivelDoHeroi = "Ouro";
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
    nivelDoHeroi = "Diamante";
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
    nivelDoHeroi = "Lendário";
    } else {
    nivelDoHeroi = "Imortal";
    }

    //retorno da mensagem de saida do programa
    return `O Herói tem um saldo de ${saldoDeVitorias} está no nível de ${nivelDoHeroi}!`;
    }

let vitorias = 120   
let derrotas = 30
const resultado = SaldoRanqueadas(vitorias, derrotas)
console.log(resultado)  