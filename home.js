/* Botones de traducción */
let espanol = document.getElementById("espanol");
let english = document.getElementById("english");
let deutsch = document.getElementById("deutsch");


/* Elementos a traduccir */

/*Footer*/
let footer = document.getElementById("footer")
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
	  
/*Bienvenidos*/
bienvenidostitulo.innerHTML = "Bienvenidos";
bienvenidostexto1.innerHTML = "Desde esta página web,hemos tratado de recopilar la información que te pueda ser útil para darte a conocer nuestro trabajo: Criar caballos de Pura Raza Española. Un caballo con las hechuras propias del patrón racial y la funcionalidad que es demandada hoy en día por jinetes y aficionados. Porque la Pura Raza Española es una de las más apreciadas a nivel mundial. Le distinguen su nobleza y su belleza y destaca su carácter y su entrega en el trabajo diario. Así son los caballos de Yeguada Molero Malo.";
bienvenidostitulo2.innerHTML = "Sementales en Parada Pública";
bienvenidostexto2.innerHTML = "En Yeguada Molero Malo, ponemos a disposición de nuestros amigos ganaderos y aficionados en general, un plantel de sementales de Pura Raza Española en Parada Pública. Creemos que, ofreciendo el caudal genético de estos ejemplares seleccionados,  contribuimos a la mejora de la Pura Raza Española.";

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
	  
/*Bienvenidos*/
bienvenidostitulo.innerHTML = "Welcome";
bienvenidostexto1.innerHTML = "From this website, we have tried to collect the information that could be useful to let you know our work: Raising Purebred Spanish horses. A horse with the makings own racial pattern and functionality that is demanded today by riders and fans. Purebred Because Spanish is one of the most appreciated worldwide. We distinguish its nobility and beauty and highlight its character and its delivery in the daily work. So Stud horses are Molero Malo.";
bienvenidostitulo2.innerHTML = "Stop Stallions at Public";
bienvenidostexto2.innerHTML = "In Stud Molero Malo, we offer our friends and fans in general farmers, a team of Spanish thoroughbred stallions Public Parada. We believe that offering the gene pool of these selected examples,  we contribute to the improvement of Purebred Spanish. ";

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
      bienvenidostitulo.innerHTML = "Willkommen";
      bienvenidostexto1.innerHTML = "Auf dieser Website versuchen wir die Info´s zusammenzustellen um Ihnen, unsere Arbeit näher zu bringen: die Zucht von reinrassigen spanischen Pferde. Eine Pferdart nach dem eigentlichen spanischen Rassenmuster und nach der nachgefragten Funktionalität von Reiter und Liebhaber Reinrassige spanische Pferde sind weltweit sehr angesehene Tiere. Diese Pferde auserkennen sich aufgrund deren Edelmut, deren Schönheit sowie deren Charakter und deren Aufopferung in der täglichen Arbeit. So sind die Pferde des Molero Malo´s Gestüt.";
  	  bienvenidostitulo2.innerHTML = "Angebotene Hengste";
      bienvenidostexto2.innerHTML = "Im Gestüt Molero Malo stellen wir unseren Zuchtfreunden und generell jedem Liebhaber eine Gruppe an reinrassigen spanischen Hengste als Parada Pública zur Verfügung. Wir sind der Meinung, dass mit dem Angebot des genetischen Vermögen dieser ausgewählten Exemplare wir der Verbesserung der spanischen Rasse beitragen.";

}
}
