function makeArray(n) {
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
