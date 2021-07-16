
let gerar = document.getElementById("gerar")


gerar.addEventListener('click', function(){

	
	let numAleatorio = Math.floor(Math.random() * 3)


	if (numAleatorio == 0) {

		document.getElementById("localImg").src="pedra.png"

		numAleatorio = ""
	}
	else if(numAleatorio == 1){

		document.getElementById("localImg").src="papel.png"

		numAleatorio = ""
	}
	else if(numAleatorio == 2){

		document.getElementById("localImg").src="tesoura.png"

		numAleatorio = ""
	}

})

let voltar = document.getElementById("voltar")

voltar.addEventListener('click', function(){
	document.getElementById("localImg").src="jogo.png"
})