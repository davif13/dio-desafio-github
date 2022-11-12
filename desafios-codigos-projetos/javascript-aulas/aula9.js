/*Criar uma classe para Carro, que possuem uma marca, uma cor e um gasto médio de combustível por km rodado. Crie um método que dada a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar um percurso de 73km. Preço do litro do combustível = 5 reais.*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * precoCombustivel * this.gastoMedioPorKm;
    }
}

const uno = new Carro('Fiat', 'Prata', 0.1);
console.log(uno.calcularGastoViagem(73, 5));

/* Testar com novo carro em viagem de 100km */
const fiesta = new Carro('Ford', 'Vermelho', 1 / 12);
console.log((fiesta.calcularGastoViagem(100, 5)).toFixed(2));