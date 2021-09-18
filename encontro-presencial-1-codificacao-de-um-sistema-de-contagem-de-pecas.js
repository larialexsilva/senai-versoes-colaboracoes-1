const  listaDePecas  =  ['Pecas de teste', 'AB', 'Peca B'];
console.log ( 'verificar a quantidade de itens na lista.' );
if  ( listaDePecas.length  <=  10 ){
    console.log ( 'A quantidade de peças na lista é menor que 10 e as peças podem ser cadastradas' );
}

console.log ( 'Verificar a quantidade de caracteres de cada item da lista.' );

for  ( let index = 0; index < listaDePecas.length; index ++ ) {
    const  pecaAtual = listaDePecas[index];
    if ( pecaAtual.length < 3 ){
        console.log ( pecaAtual + ': a peça possui nome inferior a 3 caractere não pode ser cadastradas.' );
    } else {
        console.log ( pecaAtual + ': a peça pode ser cadastrada' );        
    }
}
console.log ( 'Verificar o peso da peça' ) ;
const  pesoDaPecaEmGramas = 50;
if ( pesoDaPecaEmGramas >= 100 ){
    console.log ( 'peso suficiente.' );
} else {
    console.log ( 'valor insuficiente.' );
}