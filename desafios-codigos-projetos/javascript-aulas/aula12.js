/*Arrays. Crie um programa que seja capaz de percorrer um array e imprimir todos os números pares da array.*/

const numero = [7, 8, 10, 15, 17, 20];

for (let i = 0; i < numero.length; i++) {
    const numeros = numero[i];
    if (numeros % 2 === 0){
        console.log(numeros);
    }
}   
