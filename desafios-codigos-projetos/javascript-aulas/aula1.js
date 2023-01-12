// let preco_combustivel = 4.80;
// const gasto_combustivel = 10;
// let distancia = 150.00;
// let valorViagemFinal = distancia * preco_combustivel / gasto_combustivel;
// console.log("O preço dessa viagem será de: " + valorViagemFinal.toFixed(2));
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = 137;

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.
function arrayValue() {
    for (i = 0; i < elementos.lenght; i++) {
        let elemento = [];
        elemento.push(elementos[i]);
        if (valor === elemento[i]) {
            print(`Achei${valor} na posicao${i}`);
        } else {
            print(`Numero ${valor} nao encontrado!`);
        }
    }
}