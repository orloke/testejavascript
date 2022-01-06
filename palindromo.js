function palindromo(){
    var a = prompt("Digite uma palavra:");
    var b = Number(a)
    if (!b){
        if(a==a.split("").reverse().join("")){
            alert("É um palindromo");
        }else{
            alert('não é um palindromo');
        }
    }else{
        alert("Digite uma palavra!")
        palindromo()
    }
}
palindromo()
