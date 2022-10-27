function contarCaracteres(){
    var str = document.querySelector("#user-text").value;
    var cont = 0;
    const letras = [];
    var resultado = [];
    
    do {
        letras.push(str.toLowerCase().charAt(cont));
        cont++;
    } while(cont < str.length);
    if(str.length==0){
        alert("Ingrese un texto")
    }else{
        resultado = letras.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev),{});
        document.getElementById('answer-area').value += JSON.stringify(resultado);
    }
}

function limpiarPantalla(){
    if(document.getElementById('user-text').value == ''){
        alert("No hay nada que limpiar");
    }else{
        document.getElementById('answer-area').value = '';
        document.getElementById('user-text').value = '';
    }
}