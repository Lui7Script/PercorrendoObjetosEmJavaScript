function cliente(nome, cpf, email, saldo) {

    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}


function clientePoupança(nome,cpf,email,saldo,saldoPoup) {

 cliente.call( this, nome, cpf, email, saldo)
 this.saldoPoup = saldoPoup;
}

const Luiz = new clientePoupança("Luiz", "345 678 901 00" , "gustavol2010@yahoo.com" , 100 , 200)

clientePoupança.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

Luiz.depositarPoup(50)
console.log(Luiz)
console.log(Luiz.saldoPoup)

