const cliente = {

    nome: "Andre",
    idade: 35,
    cpf: "76523491076",
    email: "andre@2010@yahoo.com",
    fones: ["97393-6372", "973412390"],
    dependentes: [

        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2021"
        },

        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],

    saldo: 100,

    depositar: function (valor) {
        this.saldo += valor

    }
}




function oferecerSeguro(obj) {

    const propsClientes = Object.keys(obj);

    if (propsClientes.includes("dependentes")) {

        console.log("Oferta de seguro de vida para " + obj.nome)

    }

}


console.log(Object.entries(cliente))
oferecerSeguro(cliente)
