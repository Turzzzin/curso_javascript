class Conta {
    constructor(saldoCc, saldoCp, juros){
        this.saldoCc = saldoCc;
        this.saldoCp = saldoCp;
        this.juros = juros;
    }

    deposito(valor){
        this.saldoCc += valor;
    }
    saque(valor){
        this.saldoCc -= valor;
    }
    transfereciaCp(valor){
        this.saldoCc -= valor;
        this.saldoCp += valor;
    }
    transfereciaCc(valor){
        this.saldoCp -= valor;
        this.saldoCc += valor;
    }
    jurosDeAniversario(){
        let juros = (this.saldoCp * this.juros);
        this.saldoCp = this.saldoCp + juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCc, saldoCp, juros){
        super(saldoCc, saldoCp, juros*2)
    }
}

let conta = new Conta(1000, 5000, 0.01);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.transfereciaCp(3000);

console.log(conta);

conta.jurosDeAniversario();

console.log(conta);

let conta2 = new ContaEspecial(10000, 50000, 0.01);

console.log(conta2);

conta2.saque(5000);

console.log(conta2);

conta2.jurosDeAniversario();

console.log(conta2);