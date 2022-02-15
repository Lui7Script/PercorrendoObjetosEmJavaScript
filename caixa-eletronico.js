
const banco = [

{
    nome: "Santader",
    cnpj: "000 000 000 00",
    cidade: "Belo Horizonte",
    formaDePagamento: [
        {
            Metódo: "Débito"
        },
        {
            Metódo: "Crédito"
        }
    ]
},

{
    nome: "Itaú",
    cnpj: " 635 765 222 00",
    cidade: "Belo Horizonte",
    formaDePagamento: [
        {
            Metódo: "Débito" 
        },
        {
            Metódo: "Crédito"
        }
    ]
},

{
    nome: "Nubank",
    cnpj: "777 777 777 07",
    cidade: "Belo Horizonte",
    formaDePagamento: [
        {
            Metódo: "Débito"
        },
        {
            Metódo: "Crédito"
        }
    ]
},

{
    nome: "Banco Inter",
    cnpj: "111 222 333 44",
    cidade: "Belo Horizonte",
    formaDePagamento: [
        {
            Metódo: "Débito"
        },
        {
            Metódo: "Crédito"
        }
    ]
}

]


const exibirBanco = [...banco[0].formaDePagamento, ...banco[1].formaDePagamento, ...banco[2].formaDePagamento, banco[3].formaDePagamento]


console.log(exibirBanco)



