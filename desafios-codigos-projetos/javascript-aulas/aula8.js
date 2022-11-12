// Exercício da aula 5 com funções/procedimentos
//Formas de Pagamento:
//1. Débito com desconto de 10%;
//2. Pix com desconto de 15%;
//3. Crédito até 2x sem juros;
//4. Crédito 3x ou mais com 10% de juros.

const precoProduto = 100;
const formaPagamento = 4;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * juros / 100)).toFixed(2);
}

function verificarFormaPagamento(formaPagamento) {
    if (formaPagamento === 1) {
        return 'O preço final do produto com desconto é: ' + aplicarDesconto(precoProduto, 10);
    } else if (formaPagamento === 2) {
        return 'O preço final do produto com desconto é: ' + aplicarDesconto(precoProduto, 15);
    } else if (formaPagamento === 3) {
        return 'O preço final do produto é: ' + precoProduto;
    } else {
        return 'O preço final do produto com acréscimo é: ' + aplicarJuros(precoProduto, 10);
    }
}

(function () {
    console.log('Preço do produto é: ' + precoProduto.toFixed(2));
    console.log(verificarFormaPagamento(formaPagamento));
})();