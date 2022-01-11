function trocar(a){
    if(!a){
        return -1;
    }
    if (!a.length){
        return -1;
    }
    for(i in a){
        if (a[i]%2 ==0){
            a[i]=0;
        }
    }
    return a;
}
console.log(trocar(null));