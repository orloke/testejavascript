function mapcomthis(arr,argthis){
    return arr.map(function(item){
        return item * this.value;
    }, argthis)
}

const uva = {
    value: 3,
}

const pera = {
    value: 0,
}

const maca = {
    value: 1,
}

const numeros = [2,4]

console.log('Quando a fruta é uva', mapcomthis(numeros,uva))
console.log('Quando a fruta é pera', mapcomthis(numeros,pera))
console.log('Quando a fruta é maçã', mapcomthis(numeros,maca))