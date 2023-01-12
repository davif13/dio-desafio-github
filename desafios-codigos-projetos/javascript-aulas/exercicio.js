
const litrosGasolina = 6;
const kmPorLitros = 10;
const distanciaPostos = [10, 25, 12, 9, 120, 250, 59];

const kmTotal = (litrosGasolina * kmPorLitros);

let postosProximos = [];

for (let i = 0; i < distanciaPostos.length; i++) {
    if (kmTotal >= distanciaPostos[i]) {
        postosProximos.push(distanciaPostos[i])
    }
}

console.log(Math.max(...postosProximos));