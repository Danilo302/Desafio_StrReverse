function inverterString(str) {
    var resultado = '';
    for (var i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    console.log("String original: " + str);
    console.log("String invertida: " + resultado);
    
}


var minhaString = "hello wold!";
inverterString(minhaString);

