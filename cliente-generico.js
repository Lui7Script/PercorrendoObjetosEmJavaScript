//ABAIXO TEMOS UMA FUNÇÃO CONSTRUTORA

function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}


//Nesta etapa foi realizado o instanciamento da function para criar outro cliente
const luiz = new cliente("Luiz", "000 000 000 00", "gustavol2010@yahoo.com", 1500)

//console.log(luiz)








function CadastroMotorista(id,nome, cpf, cnh, veiculo, revavam, vencimentoCarteira) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.cnh = cnh;
    this.veiculo = veiculo;
    this.revavam = revavam;
    this.vencimentoCarteira = vencimentoCarteira;
}

const Motorista1 = new CadastroMotorista("1"," Marcos ", " 000 000 000 00", "B", "Caminhão 4 eixos", " 234765456", "15 / 10 / 2022")
const Motorista2 = new CadastroMotorista("2","Luiz Carlos", "111 111 111 11", " D", "Carreta", " 777777777", "01 / 02 / 2023")
const Motorista3 = new CadastroMotorista("3","Juliano", "222 222 222 22", "D", "Kombi", "333333333", "20 / 04 / 2023")
const Motorista4 = new CadastroMotorista("4","Guilherme", "333 333 333 33", "B", "Scanner", "444 444 444 44", "25 / 05 / 2025")

console.log(Motorista1)
console.log(Motorista2)
console.log(Motorista3)
console.log(Motorista4)





















function abrirConta(nome, cpf, cartao, id, TipoDeConta, DepositarDinheiro) {

    this.nome = nome;
    this.cpf = cpf;
    this.cartao = cartao;
    this.id = id;
    this.TipoDeConta = TipoDeConta;
    this.DepositarDinheiro = DepositarDinheiro

}

const cliente1 = new abrirConta("Pedro", "111222333 00", "Santander", "Poupança", 10000)

//console.log(cliente1)