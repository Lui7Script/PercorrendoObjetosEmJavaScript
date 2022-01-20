    //NESTA ETAPA VAMOS TRABALHAR COM O MÉTODO ( FOR-IN )
    

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

    saldo:100,
    
    depositar:function(valor){
    this.saldo += valor
    
    }

}
  


let relatorio=" ";

for (let info in cliente){
     if(typeof cliente[info]==="object" || typeof cliente [info]==="function")
     {

      continue 

     } else{
    
    relatorio += 
    
    info +  " - " + cliente[info]    

     }
      }

console.log(relatorio)

