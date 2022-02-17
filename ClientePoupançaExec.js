// Função Construtora

function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

function clientePoupança(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup;
}

const colaborador = new clientePoupança("otavio Emanoel", "777 777 777 77", "otaviomanoes@gmail.com", 20, 30)

clientePoupança.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor;
}

//console.log(colaborador)
//colaborador.depositarPoup(100)
//console.log(colaborador.saldoPoup)







