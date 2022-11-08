const nota1 = 5;
const nota2 = 6;
const nota3 = 6;
const mediaGeral = (nota1 + nota2 + nota3) / 3;

console.log('Sua média geral foi de ' + mediaGeral.toFixed(2));

if (mediaGeral < 5) {
    console.log('Você foi reprovado.');
} else if (mediaGeral <= 7) {
    console.log('Você está de recuperação');
} else {
    console.log('Você foi aprovado com louvor! Parabéns!');
}