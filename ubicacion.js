/* Botones de traducción */
let espanol = document.getElementById("espanol");
let english = document.getElementById("english");
let deutsch = document.getElementById("deutsch");


/* Elementos a traduccir */

/*Footer*/
let footer = document.getElementById("footer");

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
	  
/*Ubicacion*/	  
instalaciones.innerHTML = "Instalaciones";
instalaciones1.innerHTML = "Nuestros productos se crían en régimen de libertad controlada, tenemos unos amplios cercados para que los potros se ejerciten a sus anchas hasta que llegue el momento del trabajo. En nuestra finca 'Valdeherreros Alto', lo primordial son ellos y se programan los cultivos de cereales y los barbechos en función de sus necesidades. Todo gira en torno a su bienestar.";
instalaciones2.innerHTML = "Para cuando llega la hora del trabajo, todas nuestras instalaciones son de reciente construcción y están adaptadas para darles a nuestros animales la mayor comodidad posible. Entre ellas destacamos:";
instalaciones4.innerHTML = "800 m2 de naves para yeguas.<br>400m2 de naves para potros.<br>700m2 de graneros y pajares.<br>Guadarnés.<br>Ducha cubierta.<br>Ducha exterior.";
instalaciones3.innerHTML = "Un picadero al aire libre.<br>Una pista de doma reglamentaria al aire libre.<br>Una pista de doma cubierta.<br>Quince boxes interiores.<br>Corraletas exteriores.<br>Tres Boxes adaptados como parideras.<br>Dos potros para la exploración veterinaria.";
osesperamos.innerHTML = "Os esperamos...";
osesperamos1.innerHTML = "Nuestros animales cumplen un programa de entrenamiento diario, por lo que en caso de que decidas visitarnos, te agradeceremos que conciertes una visita y así podremos atenderte como te mereces.";
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

/*Ubicacion*/  
instalaciones.innerHTML = "Facilities";
instalaciones1.innerHTML = "Our products are raised in controlled freedom regime, we have a large fenced for the Colts are exercised at home until the time of labor. On our farm 'Valdeherreros High', the bottom line is they are programmed and cereal crops and fallow land according to their needs. Everything revolves around your being.";
instalaciones2.innerHTML = "When it comes time to work, all our facilities are newly built and are adapted to give our animals the best possible comfort.";
instalaciones4.innerHTML = "800 m2 of warehouses for mares.<br>Ships 400m2 foals.<br>700m2 of barns and haystacks.<br>Guadarnés.<br>Shower cover.<br>Outdoor shower.";
instalaciones3.innerHTML = "An outdoor riding.<br>A regulation dressage arena outdoors.<br>An indoor dressage arena.<br>Fifteen inner boxes.<br>Outdoor pens.<br>Three Boxes adapted as farrowing.<br>Two ponies for veterinary examination.";
osesperamos.innerHTML = "I hope ...";
osesperamos1.innerHTML = "Our animals met daily training program, so if you decide to visit, I appreciate it conciertes a visit so we can serve you as you deserve.";

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
    
/*Ubicacion*/
instalaciones.innerHTML = "Installationen";
instalaciones1.innerHTML = "Unsere Produkte werden in einem kontrolliertem Freiheitsregime gezüchtet. Wir zählen mit breiten Einzäunungen damit sich die Fohlen seineswillen einüben bis zu dem ergeben des Arbeitszeitpunktes. Auf unserer Finca “Valdeherreros Alto” sind diese, dass wichtigste, so dass Brachland und Anpflanzung von Getreide nach ihren Bedürfnissen programmiert wird. Alles dreht sich um deren Wohlbefinden.";
instalaciones2.innerHTML = "Wenn dann der Arbeitszeitpunkt ansteht zählen wir mit neuen und angepassten Installationen um den Tieren die bestmöglichste Behaglichkeit anbieten zu können.Unter diesen heben wir hervor:";
instalaciones4.innerHTML = "800 m² an Hallen für Stuten400<br> m² an Hallen für Fohlen.<br>700 m² an Scheunen und Schober.<br>Geschirrkammer.<br>Bedeckte Dusche.<br>Freiluft Dusche.";
instalaciones3.innerHTML = "Eine Reitbahn in freier Luft.<br>Eine vorschriftsmässige Dressurpiste in freier Luft.<br>Eine bedeckte Dressurpiste.<br>Fünfzehn Innenraum Boxen.<br>Außenhöfe.<br>Drei als Geburtsstellen adaptierte Boxen.<br>Zwei Pferdkasten für tierärztliche Untersuchungen.";
osesperamos.innerHTML = "Wir erwarten euch...";
osesperamos1.innerHTML = "Wenn Sie in dem Kästchen unter der Karte Ihren Startort eingeben, führen wir Sie bis zu unserem Hause.";
}
}
