//Neste primeiro trecho de código
//foi transformado um objeto em JSON.

const classe = JSON.stringify({
    sala: 50,
    Professora: "Neuza",
    Escola: "C.C.C",
    categoria: "programação",
    versoes: ["Online", "Presencial"]
   })
   
//   console.log(classe)


//Neste segundo trecho de código
// foi transformado um JSON em OBJETO

const objClasse = JSON.parse(classe)
console.log(objClasse)