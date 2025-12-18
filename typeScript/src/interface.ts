class Conta {
    conta: number;
    saldo: number = 0;

    constructor(conta: number) {
        this.conta = conta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2{
    cnpj: number;
}

interface IExemplo3 extends IExemplo2{
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
    };
    taxaTransferencia: number = 0;
}
