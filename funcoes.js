



// Esperar X milissegundos
export function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Apresentação do programa para o U
export function ApresentarPrograma(){

    console.log(`\nOlá, bem-vindo ao programa do açaí!`);

}

//Pedindo a quantidade e qual açaí o usuário quer
export function PedindoDados(){
    console.log(`Tabela de açaís disponíveis:
        açaí pequeno: R$13,00
        açaí médio: R$15,00
        açaí grande: R$17,50\n\n`)
}