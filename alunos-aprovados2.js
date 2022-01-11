const alunos = [{
    nome: 'carlos',
    nota: 5,
    },
    {
    nome: 'ricardo',
    nota: 7,
    },
    {
    nome: 'alana',
    nota: 7.8,
    },
    {
    nome: 'Avril',
    nota: 8,
    }
]

function alunos_aprovados(arr,media){
    for (let i =0; i< arr.length; i++){
        const {nome,nota} = arr[i];
        if(nota >= media){
            console.log(nome);
        }
    }
}

alunos_aprovados(alunos,7.8);