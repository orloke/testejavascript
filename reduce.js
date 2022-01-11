function somanumero(arr){
    return arr.reduce(function(prev,current){
        return prev+current;
    })
}

const list = [7,8,1];

const c = list.reduce(function(prev,curr){return prev+curr},4);

console.log(c, somanumero(list));