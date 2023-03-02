const numero = Number(prompt("Digite um número"))
//1. Utilizando ifs aninhados
if(numero % 2 === 0){
    if(numero % 3 === 0){
        console.log("Número é divisivel por 2 e 3")
    }
   
}

//2. Utilizando um operador lógico para unir duas operações relacionais
if(numero % 2 === 0 && numero % 3 === 0) {
    console.log("Número é divisivel por 2 e 3")
}

if(numero % 2 === 0 || numero % 3 === 0) {
    console.log("Número é divisivel por 2 ou 3")
}
