/*function makeArray(n) {
	this.length = n;
	for (var i=1; i<=n; i++) {
		this[i] = ""; 
	}
	return this;
}
var i;

function imagealeatoireMex() {
	i = Math.floor(3 * Math.random() + 1);
	return imageMex[i].foto;
}
imageMex = new makeArray(3);

imageMex[0] = {
    nombre : "sam",
    foto : "images/mexico/SUPERNATURALSAMcopy.png"
};
imageMex[1] = {
    nombre: "castiel",
    foto: "images/mexico/render__castiel__by_screamingromeo-d6lrlse.png"
};
imageMex[2] = {
    nombre : "dean",
    foto : "images/mexico/tumblr_o6ywcwSDAN1vsug8go1_1280.png"
};

function imagealeatoireMAreq() {
	i = Math.floor(3 * Math.random() + 1);
	return imageMex[i].foto;
}
imageMex = new makeArray(3);
imageMex[0] = {
    nombre : "sam",
    foto : "images/mexico/28.png,"
};
imageMex[1] = {
    nombre: "castiel",
    foto: "images/mexico/render__castiel__by_screamingromeo-d6lrlse.png"
};
imageMex[2] = {
    nombre : "dean",
    foto : "images/mexico/tumblr_o6ywcwSDAN1vsug8go1_1280.png"
};

function imagealeatoireLima() {
	i = Math.floor(3 * Math.random() + 1);
	return imageMex[i].foto;
}
imageMex = new makeArray(3);
imageMex[0] = {
    nombre : "sam",
    foto : "images/mexico/28.png,"
};
imageMex[1] = {
    nombre: "castiel",
    foto: "images/mexico/render__castiel__by_screamingromeo-d6lrlse.png"
};
imageMex[2] = {
    nombre : "dean",
    foto : "images/mexico/tumblr_o6ywcwSDAN1vsug8go1_1280.png"
};
function imagealeatoireCh() {
	i = Math.floor(3 * Math.random() + 1);
	return imageMex[i].foto;
}
imageMex = new makeArray(3);
imageMex[0] = {
    nombre : "sam",
    foto : "images/mexico/28.png,"
};
imageMex[1] = {
    nombre: "castiel",
    foto: "images/mexico/render__castiel__by_screamingromeo-d6lrlse.png"
};
imageMex[2] = {
    nombre : "dean",
    foto : "images/mexico/tumblr_o6ywcwSDAN1vsug8go1_1280.png"
};



	
function pais(){
	var pais = document.getElementById("pais").selectedIndex;
	switch(pais){
		case 1 :
				var fotos = document.getElementById("fotos")
				fotos.innerHTML= ("<img src=" +imagealeatoire() +" WIDTH=200 HEIGHT=200 BORDER=0>");
       	break; 
		case 2 :
				var fotos = document.getElementById("fotos")
				fotos.innerHTML= ("<img src=" +imagealeatoire() +" WIDTH=200 HEIGHT=200 BORDER=0>");
       	break; 
		case 3 :
				var fotos = document.getElementById("fotos")
				fotos.innerHTML= ("<img src=" +imagealeatoireMex() +" WIDTH=200 HEIGHT=200 BORDER=0>");
       	break; 
		case 4 :
				var fotos = document.getElementById("fotos")
				fotos.innerHTML= ("<img src=" +imagealeatoire() +" WIDTH=200 HEIGHT=200 BORDER=0>");
       	break; 
        }

		
}

function nombre(){
	var nombre=document.getElementById("name").value;
	    if( nombre == ""){
	        alert("Debes ingresar un nombre");
	    }

}
*/
//DATOS MEXICO
var imgMex;
imgMex = [];
imgMex[0] = {
	nombre : "mariana",
    foto: "images/mexico/mariana.jpg"
	
};
imgMex[1] = {
	nombre: "karem",
	foto: "images/mexico/karem.jpg"
};
imgMex[2] = {
	nombre : "varinia",
	foto : "images/mexico/varinia.jpg"
};
var imgLim;
imgLim = [];
imgLim[0] = {
	nombre : "mariana",
    foto: "images/mexico/mariana.jpg"
	
};
imgLim[1] = {
	nombre: "karem",
	foto: "images/mexico/karem.jpg"
};
imgLim[2] = {
	nombre : "varinia",
	foto : "images/mexico/varinia.jpg"
};
var imgAre;
imgAre = [];
imgAre[0] = {
	nombre : "mariana",
    foto: "images/mexico/mariana.jpg"
	
};
imgAre[1] = {
	nombre: "karem",
	foto: "images/mexico/karem.jpg"
};
imgAre[2] = {
	nombre : "varinia",
	foto : "images/mexico/varinia.jpg"
};
var imgSan;
imgSan = [];
imgSan[0] = {
	nombre : "mariana",
    foto: "images/mexico/mariana.jpg"
	
};
imgSan[1] = {
	nombre: "karem",
	foto: "images/mexico/karem.jpg"
};
imgSan[2] = {
	nombre : "varinia",
	foto : "images/mexico/varinia.jpg"
};
// ARREGLO GENERAL
var imgGeneral;
var imgGeneral = [];
imgGeneral[0] = imgMex;
imgGeneral[1] = imgLim;
imgGeneral[2] = imgAre;
imgGeneral[3] = imgSan;
console.log(imgGeneral);

//ELEMENTOS
var inputPais = document.getElementById("pais");
var btnComprobar = document.getElementById("comprobar");
var colocarImg = document.getElementById("foto");
var puntaje = document.getElementById("puntaje");
var mensaje = document.getElementById("mensaje");
var intentos = 0;
var pts = 0;

inputPais.onchange = function() {
	var numPais = inputPais.value;
	var pais = imgGeneral[numPais];
	console.log("numero pais " + numPais + " ---- pais: " + pais )
	
	//imagen aleatoria
	var i;
	function elegirImagen(min, max) {
		i = Math.floor(Math.random() * pais.length);
		colocarImg.innerHTML= ("<img src=" + pais[i].foto + " style = 'width:100%'>");
		colocarImg.className = "img"

		return i;

	}
	elegirImagen();
	//colocar imagen correspondiente
	

//COMPROBAR INPUT CON NOMBRE
btnComprobar.onclick = function () {
	var adivinar = document.getElementById("adivinar").value; //input nombre
	adivinar = adivinar.toLowerCase();
	adivinar = adivinar.trim();
		if (adivinar == pais[i].nombre) {
			console.log("es correcto");
			mensaje.innerHTML = ("Exelente acertaste!");
			mensaje.className = "bg-verde text-center mt-5"	
			pts = pts + 5;	
			puntaje.className = "bg-verde text-center";
			puntaje.innerHTML = (pts);
			console.log(pais.length);
			pais.splice(i,1);
			console.log(pais.length);
			elegirImagen();
		}else if (intentos === 5){
				//borrar value del input
				pts = pts - 1;
				puntaje.className = "bg-rojo text-center";
				puntaje.innerHTML = (pts);	
				elegirImagen();
				intentos = intentos;
			}

		 else {
			mensaje.innerHTML = ("sigue intentandolo");
			mensaje.className = "bg-rojo text-center mt-5";
			intentos = intentos;
			
				/*alert("intentalo de nuevo");*/		
			
		}
		document.getElementById("adivinar").value = "";

	}
};
