type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}


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
]

alunos.push(
    {
        nome: "Julia",
        cursos: ["Front-end", "Java"],
        idade: 23,
    }
)

const novoAluno: aluno = {
    nome: "Mickael",
    idade: 26,
}

function exibeAluno(alunos: aluno){
    console.log(alunos.nome)
}

exibeAluno(novoAluno);