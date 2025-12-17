"use strict";

var alunos = [{
  nome: "Mickael",
  nota: 10
}, {
  nome: "Ana",
  nota: 4
}, {
  nome: "Carol",
  nota: 9
}, {
  nome: "Carlos",
  nota: 2
}, {
  nome: "José",
  nota: 7
}];
function verificaSeNotaMaiorQueSeis() {
  var notasAcimaDaMedia = alunos.filter(function (notas) {
    return notas.nota >= 6;
  });
  return notasAcimaDaMedia;
}
var aprovados = verificaSeNotaMaiorQueSeis();
var nomeAprovados = aprovados.map(function (alunos) {
  return "\nAluno: ".concat(alunos.nome, " // nota: (").concat(alunos.nota, ")");
});
console.log("Os alunos que passaram de ano com notas acima de 6 foram: ".concat(nomeAprovados));