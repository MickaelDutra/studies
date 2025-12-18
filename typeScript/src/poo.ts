class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda: number){
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string{
        return `${this.nome} disse oi`
    }

    static retornaNumeroBanco(){
        return 1234;
    }
}

class ContaBancaria{
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    }

    getSaldo(){
        return this.saldo;
    }

    depositar(valor: number){
        this.saldo += valor;
    }
}

class ContaPessoaFisica extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo =+ valor * 2;
    }
}

const contaPedro = new ContaPessoaFisica(12345);

