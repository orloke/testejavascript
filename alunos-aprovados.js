// Feito sem usar dicionario
function alunos_aprovados(alunos,nota,nota_aluno){
    if (alunos.length == nota_aluno.length){
        for (i in nota_aluno){
            if (nota_aluno[i]>= nota){
                console.log(alunos[i] +' '+ nota_aluno[i]);
            }
        }

    }else{
        console.log("Quantidade de alunos e notas é diferente!");
    }
}
alunos_aprovados(['karine','maira','carlos'],6, [4,7,10]);

