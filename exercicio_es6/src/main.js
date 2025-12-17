const alunos = [
    {
        nome: "Mickael",
        nota: 10
    },
    {
        nome: "Ana",
        nota: 4
    },
    {
        nome: "Carol",
        nota: 9
    },

    {
        nome: "Carlos",
        nota: 2
    },

    {
        nome: "José",
        nota: 7
    }

]

function verificaSeNotaMaiorQueSeis() {
    const notasAcimaDaMedia = alunos.filter(notas => notas.nota >= 6);
    return notasAcimaDaMedia;
}

const aprovados = verificaSeNotaMaiorQueSeis();

const nomeAprovados = aprovados.map(alunos => (`\nAluno: ${alunos.nome} // nota: (${alunos.nota})`))

console.log(`Os alunos que passaram de ano com notas acima de 6 foram: ${nomeAprovados}`);