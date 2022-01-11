function multiplicacao (arr){
    return arr.map(function(item){return item*2});
}

const lista = [2,3];
const c = lista.map(function(item){return item*3});

console.log(multiplicacao(lista),c);
