function pagarMotorista(nome, veiculo, pontoPartida, destino, saldo) {

    this.nome = nome;
    this.veiculo = veiculo;
    this.pontoPartida = pontoPartida;
    this.destino = destino;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo = + valor;
    }
}


function clienteCaixa(nome, veiculo, pontoPartida, destino, saldo, poupança) {

    pagarMotorista.call(this, nome, veiculo, pontoPartida, destino, saldo)
    this.poupança = poupança;
}


const motorista1 = new clienteCaixa("José", "Scanner", "São Paulo" , "Santana de Parnaíba" , 0 , 0  )



pagarMotorista.prototype.depositarPoupança = function(valor) {
    this.poupança += valor
}

motorista1.depositarPoupança = (100)
console.log(motorista1)
console.log(motorista1.poupança)
