//códigos a serem reescritos
const nome = prompt("Qual o seu nome?")
// a)
if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}
// if ternario
nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, " + nome)



const idade = Number(prompt("Qual a sua idade?"))
// b)
if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}

idade >= 18 ? console.log("Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista!")
