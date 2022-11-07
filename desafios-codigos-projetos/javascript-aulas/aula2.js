let precoGasolina = 4.80;
let precoEtanol = 4.20;
const gastoGasolina = 10;
const gastoEtanol = 6;
let distancia = 150.00;
let valorViagemFinalGasolina = distancia * precoGasolina / gastoGasolina;
let valorViagemFinalEtanol = distancia * precoEtanol / gastoEtanol;
tipoCombust = 'Etanol'

if (tipoCombust === 'Etanol'){
    console.log("Preço da Viagem com Etanol: " + valorViagemFinalEtanol);
} else {
    console.log("Preço da Viagem com Gasolina: " + valorViagemFinalGasolina);
}

