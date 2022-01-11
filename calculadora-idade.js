function calculadora_idade(anos){
    return `Daqui a ${anos} anos ${this.nome} terá ${this.idade + anos} de idade`;
}

const pessoa1 = {
    nome: 'Carlos',
    idade: 26,
};

const pessoa2 = {
    nome: 'Avril',
    idade: 32,
};

console.log(calculadora_idade.apply(pessoa1,[20]))