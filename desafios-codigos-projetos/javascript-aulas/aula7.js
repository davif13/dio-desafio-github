//Função que escreve o nome

function escrevaMeuNome (name){
    console.log ('Meu nome é: ' + name);
};

//Função que veja se é maior de idade

function isMaiordeIdade(idade){
    if (idade < 18) {
        return 'Você é menor de idade';
    } else {
        return 'Você é maior de idade';
    }
}

(function (){
    escrevaMeuNome('Davi');
    escrevaMeuNome('Brena');
    console.log(isMaiordeIdade(20));
})();

