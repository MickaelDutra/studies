"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    renda;
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
    static retornaNumeroBanco() {
        return 1234;
    }
}
class ContaBancaria {
    saldo = 0;
    numeroConta;
    constructor(numeroConta) {
        this.numeroConta = numeroConta;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = +valor * 2;
    }
}
const contaPedro = new ContaPessoaFisica(12345);
//# sourceMappingURL=poo.js.map