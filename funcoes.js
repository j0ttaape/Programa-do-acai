//açaí
let acai = {
    pequeno: {
        desconto: 10,
        preco: 13
    },

    medio: {
        desconto: 15,
        preco: 15
    },

    grande:{
        desconto: 25,
        preco: 17.5
    }
}




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