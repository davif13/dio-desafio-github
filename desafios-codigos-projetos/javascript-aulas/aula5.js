const precoProduto = 100;
const formaPagamento = 'Pix'

console.log('Preço do produto é: ' + precoProduto.toFixed(2));

if (formaPagamento === 'Débito') {
    console.log('O preço final do produto com desconto é: ' + (precoProduto - (precoProduto * 0.1)));
} else if (formaPagamento === 'Pix') {
    console.log('O preço final do produto com desconto é: ' + (precoProduto - (precoProduto * 0.15)));
} else if (formaPagamento === 'Crédito até 2x') {
    console.log('O preço final do produto é: ' + precoProduto);
} else {
    console.log('O preço final do produto com acréscimo é: ' + (precoProduto + (precoProduto * 0.1)));
}