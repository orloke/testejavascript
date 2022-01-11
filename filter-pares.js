function filpares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 != 0;
}

const lis = [10,23,34,35,7];

console.log(filpares(lis));