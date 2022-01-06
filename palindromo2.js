function palindormo2(){
    var a = prompt("Digite uma palavra:");
    var b = Number(a);
    var c = a.split('').reverse().join("");

    for (let i in a){
        if(a[i]!==c[i]){
            alert('não é um palindromo')
            palindormo2();
        }
    }
alert('e palindromo')
palindormo2()
}
palindormo2()