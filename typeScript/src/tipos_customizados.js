"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Py"],
        idade: 23,
    },
];
alunos.push({
    nome: "Julia",
    cursos: ["Front-end", "Java"],
    idade: 23,
});
const novoAluno = {
    nome: "Mickael",
    idade: 26,
};
function exibeAluno(alunos) {
    console.log(alunos.nome);
}
exibeAluno(novoAluno);
//# sourceMappingURL=tipos_customizados.js.map