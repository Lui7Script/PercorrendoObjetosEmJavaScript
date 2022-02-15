
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}


const equipoGuerrreiro = {
    espada: "Andúril",
    capa : "capa élfica +2"
}
const guerreiro = { ...fichaGuerreiro, ...equipoGuerrreiro}

console.log(guerreiro)



//SPREAD OPERATOR  ou sintaxe de espalhamento.
// Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. 