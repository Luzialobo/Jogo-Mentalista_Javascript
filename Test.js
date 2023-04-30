var numerosecreto = parseInt(Math.random() * 11 );
function Chutar() {
var elementoResultado = document.getElementById("resultado")
var chute = parseInt(document.getElementById("valor").value)
console.log(chute)
if (chute == numerosecreto) {
    elementoResultado.innerHTML = " voce acertou"; 
} else if(chute > 10 || chute < 0 ){
elementoResultado.innerHTML = "voce deve digitar um numero de 0 a 10 ";
}

else{
    elementoResultado.innerHTML = ("errou");
}

}