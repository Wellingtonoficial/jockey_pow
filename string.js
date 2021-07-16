
let gerar = document.getElementById("gerar")


gerar.addEventListener('click', function(){

	
	let numAleatorio = Math.floor(Math.random() * 3)


	if (numAleatorio == 0) {

		document.getElementById("localImg").src="imgs/pedra.png"

		numAleatorio = ""
	}
	else if(numAleatorio == 1){

		document.getElementById("localImg").src="imgs/papel.png"

		numAleatorio = ""
	}
	else if(numAleatorio == 2){

		document.getElementById("localImg").src="imgs/tesoura.png"

		numAleatorio = ""
	}

})

let voltar = document.getElementById("voltar")

voltar.addEventListener('click', function(){
	document.getElementById("localImg").src="imgs/jogo.png"
})