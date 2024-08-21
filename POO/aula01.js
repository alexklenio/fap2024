class ContaBancaria {
  constructor() {
    this.agencia = "123-4";
    this.numero = 100;
    this.saldo = 200;
    this.limite = 1000;
  }

  depositar(valorDeposito) {
    this.saldo += valorDeposito;
  }

  sacar(valorSaque) {
    this.saldo -= valorSaque;
  }

  consultaSaldo() {
    return this.saldo;
  }

  consultaLimite(){
    return this.limite;
  }

  emprestimo(valorEmprestimo){
    this.sando += valorEmprestimo;
  }

}

let conta1 = ContaBancaria();

console.log( conta1.consultaSaldo());

conta1.depositar(500)
console.log( conta1.consultaSaldo());

conta1.sacar(200)
console.log( conta1.consultaSaldo());

conta1.emprestimo(500)
console.log( conta1.consultaSaldo());
console.log( conta1.limite());
