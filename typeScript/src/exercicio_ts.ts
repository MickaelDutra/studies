function multiplicacao(num1: number, num2: number): number{
    return num1 * num2;
}

function saudacao(nome: string): string{
    return `Olá ${nome}`;
}

const testeMultiplicacao = multiplicacao(2, 4);
const testeSaudacao = saudacao("Mickael");

console.log(testeMultiplicacao);
console.log(testeSaudacao);