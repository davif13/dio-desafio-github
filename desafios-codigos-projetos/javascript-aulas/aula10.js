/*Criar uma classe para Pessoas, que possuem nome, peso e altura. As pessoas devem ser capazes de dizer seu IMC (IMC = peso / altura * altura). Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer o valor de seu IMC.*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return 'Meu nome é ' + this.nome + ' e meu IMC é ' + (this.peso / (this.altura * this.altura));
    }
}
const jose = new Pessoa ('José', 70, 1.75);
console.log(jose.calcularIMC());
