/* Botones de traducción */
let espanol = document.getElementById("espanol");
let english = document.getElementById("english");
let deutsch = document.getElementById("deutsch");


/* Elementos a traduccir */
/*Navbar*/
let bienvenidos = document.getElementById("bienvenidos");
let nuestrahistoria = document.getElementById("nuestrahistoria");
let enlaactualidad = document.getElementById("enlaactualidad");
let ubicacion = document.getElementById("ubicacion");
let contacto = document.getElementById("contacto");
let sementales = document.getElementById("sementales");
let caballos = document.getElementById("caballos");
let yeguas = document.getElementById("yeguas");
let enventa = document.getElementById("enventa");
let vendidos = document.getElementById("vendidos");
let nuestrosanimales = document.getElementById("nuestrosanimales");

/*Bienvenidos*/
let bienvenidostitulo = document.getElementById("bienvenidostitulo");
let bienvenidostexto1 = document.getElementById("bienvenidostexto1");
let bienvenidostitulo2 = document.getElementById("bienvenidostitulo2");
let bienvenidostexto2 = document.getElementById("bienvenidostexto2");

/*Nuestra historia*/
let alprincipio = document.getElementById("alprincipio");
let alprincipio1 = document.getElementById("alprincipio1");
let alprincipio2 = document.getElementById("alprincipio2");
let alprincipio3 = document.getElementById("alprincipio3");


/* Eventos de click para cambiar idioma */
espanol.onclick = ()=>{
    setLanguage("espanol");
    localStorage.setItem("Lang","espanol");
};

english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("Lang","english");
};

deutsch.onclick = ()=>{
    setLanguage("deutsch");
    localStorage.setItem("Lang","deutsch");
};

onload = ()=>{
    setLanguage(localStorage.getItem("Lang"));
};

/* Traducciones */

function setLanguage(getLanguage){
  if(getLanguage === "espanol"){
	  
    
    /*Footer*/
footer.innerHTML = "© YEGUADA MOLERO MALO. Se prohibe la reproducción de contenido sin consentimiento expreso.Finca Valdeherreros Alto. 13370 Calzada de Calatrava. CIUDAD REAL. Tel 926338203 - 680422845";
/*Navbar*/
bienvenidos.innerHTML = "Bienvenidos";
nuestrahistoria.innerHTML = "Nuestra historia";
enlaactualidad.innerHTML = "En la actualidad";
ubicacion.innerHTML = "Ubicación";
contacto.innerHTML = "Contacto";
sementales.innerHTML = "Sementales";
caballos.innerHTML = "Caballos";
yeguas.innerHTML = "Yeguas";
enventa.innerHTML = "En venta";
vendidos.innerHTML = "Vendidos";
nuestrosanimales.innerHTML = "Nuestros animales";
    /*Contacto*/
contacto.innerHTML = "Contacto";
contacto1.innerHTML = "Desde esta web, os hemos querido dar una primera impresión de quién somos y qué hacemos. Si estáis interesados en nuestros animales, os podemos enviar más información, fotografias y videos sin ningún compromiso.<br>YEGUADA MOLERO MALO<br>Finca Valdeherreros Alto13370<br> Calzada de Calatrava.<br>CIUDAD REAL<br>Teléfonos- 926 338 203<br>Móviles. 680 422 844 - 680 422 845<br>Código REGA ES130270000146<br>email. info@yeguadamolero.es<br>y en el Google Earth nos puedes encontrar en:Latitud 38º 38'52.74'' y Longitud 3º 39' 13.29'' O";
  }else if(getLanguage ==="english"){
    
    /*Footer*/
footer.innerHTML = "© YEGUADA MOLERO MALO. Reproduction of content without express consent is prohibited. Finca Valdeherreros Alto. 13370 Calzada de Calatrava. REAL CITY. Phone 926338203 - 680422845";

/*Navbar*/
bienvenidos.innerHTML = "Welcome";
nuestrahistoria.innerHTML = "Our history";
enlaactualidad.innerHTML = "Nowadays";
ubicacion.innerHTML = "Location";
contacto.innerHTML = "Contact";
sementales.innerHTML = "Stallions";
caballos.innerHTML = "Horses";
yeguas.innerHTML = "Mares";
enventa.innerHTML = "On sale";
vendidos.innerHTML = "Sold";
nuestrosanimales.innerHTML = "Our animals";

/*Contacto*/  
contacto.innerHTML = "Contact";
contacto1.innerHTML = "From this web, we wanted to show you who we are. If you are interested about our animals, we can share more information with you, photos and videos with no compromise.<br>YEGUADA MOLERO MALO<br>Finca Valdeherreros Alto13370<br> Calzada de Calatrava.<br>CIUDAD REAL<br>Phone- 926 338 203<br>Mobile phone. 680 422 844 - 680 422 845<br>REGA Code ES130270000146<br>email. info@yeguadamolero.es<br>and you can find us on Google Earth: Latitud 38º 38'52.74'' y Longitud 3º 39' 13.29'' O";
  }
  else if(getLanguage ==="deutsch"){
    
    /*Footer*/
    footer.innerHTML = "© YEGUADA MOLERO MALO. Die Vervielfältigung des Inhalts ohne ausdrückliche Zustimmung ist untersagt Finca Valdeherreros Alto. 13370 Calzada de Calatrava. ECHTE STADT. Telefon 926338203 - 680422845";
	  /*Navbar*/
	  bienvenidos.innerHTML = "Willkommen";
      nuestrahistoria.innerHTML = "Der Anfang";
      enlaactualidad.innerHTML = "Aktuell";
      ubicacion.innerHTML = "Installationen";
     	contacto.innerHTML = "Kontakt";
      sementales.innerHTML = "Hengst";
      caballos.innerHTML = "Pferde";
      yeguas.innerHTML = "Stuten";
      enventa.innerHTML = "Im Angebot";
      vendidos.innerHTML = "Verkauft";
      nuestrosanimales.innerHTML = "Unsere Tiere";

/*Contacto*/
contacto.innerHTML = "Contact";
contacto1.innerHTML = "Auf dieser Website möchten wir Ihnen einen ersten Eindruck davon vermitteln, wer wir sind und was wir tun. Bei Interesse an unseren Tieren senden wir Ihnen unverbindlich weitere Informationen, Fotos und Videos zu..<br>YEGUADA MOLERO MALO<br>Finca Valdeherreros Alto13370<br> Calzada de Calatrava.<br>CIUDAD REAL<br>elefon- 926 338 203<br>Mobiltelefon. 680 422 844 - 680 422 845<br>REGA-Code ES130270000146<br>E-Mail. info@yeguadamolero.es<br>und Sie finden uns auf Google Earth: Breitengrad 38º 38'52.74'' und Längengrad 3º 39' 13.29'' W";
  }
}
