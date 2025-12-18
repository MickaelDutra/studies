"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    conta;
    saldo = 0;
    constructor(conta) {
        this.conta = conta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
    }
    ;
    taxaTransferencia = 0;
}
//# sourceMappingURL=interface.js.map