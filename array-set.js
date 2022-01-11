var arr = [1,1,1,3,45,3,45,6]

function unic(lista){
    var a = new Set(lista)
    return console.log([...a])
}

unic(arr)
