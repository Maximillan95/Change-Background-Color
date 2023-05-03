var background = document.querySelector("html");
var titulo = document.getElementById("titulo");
var boton = document.getElementById("boton");
var listaDeColores = document.getElementsByClassName("listaColores");
var contenedorLista = document.getElementById("contenedor_listaColores");

boton.addEventListener("click", ChangeColor);

//funcion para cambiar color y titulo con el color actual

function ChangeColor(){
    var cambioColor = background.style.backgroundColor = (colorHEX());
    titulo.textContent = "Background Color " + cambioColor;
    listaDeColores.textContent = "Previous Background Color #f5deb3";
}

//Funcion para generar color random
function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	var color = "";
	for(var i=0;i<6;i++){
		color = color + generarLetra() ;
	}
	return "#" + color;
}
// Fin funciones para generar color random

// function generarLista(){
//     let divisor = document.createElement("div");
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     let parrafo = document.createElement("p");
//     let liText = document.createTextNode("previous background color " + colorHEX());
//     let pText = document.createTextNode("");
//     divisor.appendChild(ul);
//     ul.appendChild(li);
//     ul.appendChild(parrafo);
//     li.appendChild(liText);

//     parrafo.appendChild(pText);
//     contenedorLista.appendChild(ul);

    
//     li.classList.add("listaColores");
//     parrafo.classList.add("");
//     parrafo.remove(flex-direction);
//     parrafo.style.backgroundColor = (cambioColor);
    
// }