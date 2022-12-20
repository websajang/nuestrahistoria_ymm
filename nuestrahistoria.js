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

/*Nuestra historia*/
alprincipio.innerHTML = "Al principio";
alprincipio1.innerHTML = "Fue hacia finales de los ochenta cuando pasamos de ir a clases de equitación con nuestros hijos, a descubrir y enamorarnos del Pura Raza Española y empezar a criarlo.Primero llegó una punta de yeguas procedentes de dos líneas distintas: don Virgilio Fernández de la Vega y don José Luis de la Escalera. Al poco tiempo llegaría otra partida de yeguas esta vez sólo de línea Escalera.Cubríamos con dos sementales, uno para cada línea: ÁLAMO III, cerrado en bocao, hijo de Naranjero V, para las yeguas de  Virgilio; MISTERIOSO, con el hierro de Escalera, hijo de Vinatero III, para sus hermanas. Poco a poco, las Escalera fueron ganando terreno.Cuando las hijas de Misterioso empezaron a ser yeguas, llegó SUPERIOR IV, de hierro Escalera de nuevo, hijo de Faraón XXIV, imprimiendo su carácter y belleza en la yeguada.";
alprincipio2.innerHTML = "Para los productos de Superior IV buscamos sangre nueva en la línea Guardiola. Cuando conocimos a EFUSIVO, hijo de Centella V y Efusiva II, ambos multipremiados en SICAB, nos dimos cuenta de que aquel caballo podía aportarnos mucho en casa.Y así fue, Efusivo está dando aún hoy en día animales espectaculares morfológica y funcionalmente. Después con nuestra apuesta por la capa negra llegó VELETO, hijo de Doctor IX de Maria Fernanda. Hoy en día sus hijas son fantásticas madres.Con el crecimiento de la yeguada, fuimos introducioendo nuevos y jóvenes sementales procedentes de nuestras madres y los sementales utilizados. FUMADOR V, hijo de Efusivo  y  BERBERISCO XII, hijo de Estudioso XI; siguiero con la línea Guardiola. ";
alprincipio3.innerHTML = "En el afán de buscar funcionalidad y raza, así como talla y carácter incorporamos también la línea de don Salvador Sánchez Barbudo con NOVELERO XXXII, posiblemente uno de los mejores sementales alazanes del momento.Este caballo, además de una morfologia importante, con unos sólidos suelos y buenas lineas superiores, nos aportó unos movimientos desgraciadamente fuera de lo común en el caballo español.Aparte de la amplitud y cadencia de estos, destacan por su suspensión, la impulsión del tercio posterior y la facilidad en las espaldas. ";

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

/*Nuestra historia*/	  
alprincipio.innerHTML = "Initially";
alprincipio1.innerHTML = "It was the late eighties when we go to riding lessons with our children, to discover and fall in love with the Spanish Purebred and begin to raise him. First tip mares came from two different lines: Don Virgilio Fernandez de la Vega and Don José Luis de la Escalera. Soon another batch of mares come this time only ladder line. We covered with two stallions, one for each line: POPLAR III, closed in bocao, son of Naranjero V, for mares of Virgil, MYSTERIOUS, with iron staircase, son of Vintner III, for his sisters. Gradually, the staircase were gaining ground. When the daughters of Mystery began to be mares, came SUPERIOR IV iron ladder again, son of Pharaoh XXIV, printing its character and beauty in the stud.";
alprincipio2.innerHTML = "Superior Products To seek new blood IV line Guardiola. When we met effusive, son of Centella V and Effusive II, both multiplatinum in SICAB, we realized that this horse could tell us much at home. And so, Effusive is giving even today morphologically and functionally spectacular animals. After our commitment to black cape came vane, son of Maria Fernanda Doctor IX. Today mothers daughters are fantastic. With the growth of the stud, we introducioendo new young stallions from our mothers and sires used. SMOKING V, son of Effusive and Berber XII, XI Scholar son; siguiero line with Guardiola. ";
alprincipio3.innerHTML = "In an effort to find and breed functionality and incorporate character size and also the line of Don Salvador Sánchez Bearded with Novelero XXXII, possibly one of the best stallions steeds of time. This horse, plus a significant morphology, with solid lines and good top soil, gave us some moves unfortunately unusual in the Spanish horse. Apart from the extent and timing of these, distinguished by their suspension, rear third drive and easy on the back. ";
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
      nuestrosanimales.innerHTML = "Unsere Tiere";alprincipio.innerHTML = "Über uns";

      /*Nuestra historia*/
      alprincipio1.innerHTML = "Ende der Achtziger war der Zeitpunkt an dem wir die Besuche von Reitstunden mit unseren Kinder gegen die Entdeckung und Liebe für reinrassige spanischen Pferde sowie deren Zucht austauschten. Zuerst kamen zwei “Zackenende” zwei verschiedener Linien her: Don Virgilio Fernández de la Vega und Don José Luis de la Escalera. Nach kurzer Zeit würde ein weiterer Stutenausschnitt nur von der Linie Escalera ankommen. Wir deckten mit zwei Hengsten jeweils jede Linie ab: ÁLAMO III erhalten in “bocao” (Cartuja), Sohn von Naranjero V für die Stuten von Virgilio; MISTERIOSO aus dem Ahnen von Escalera, Sohn von Vinatero III für deren Schwestern. Stück für Stück gewannen die Escaleras an Terrain. Als die Tochtern von Misterioso zu Stuten heranwachsten, kam SUPERIOR IV erneuert vom Eisen Escalera, Sohn von Faraón XXIV, an. Er prägte mit seinem Charakter und Schönheit das Gestüt.";
      alprincipio2.innerHTML = "Für die Produkte von Superior IV suchten wir neues Blut in der Linie Guardiola. Als wir EFUSIVO, Sohn von Centella V und Efusiva II, kennenlernten (desöfteres in SICAB gekrönt) sahen wir, dass dieses Pferd uns viel im eigenen Haus beibringen konnte. So war es auch. Efusivo gibt uns bis dato morphologisch und funktionell spektakuläre Tiere. Desweiteren mit unserem Einsatz auf schwarzes Rosshaar kam VELETO, Sohn von Doctor IX von María Fernanda. Heutzutage sind deren Tochtern fantastische Muttern. Mit der Erweiterung unseres Gestüts führten wir von unseren Müttern und Hengsten ausgestammt, neue und junge Hengste ein. FUMADOR V, Sohn von Efusivo, und BERBERISCO XII, Sohn von Estudioso XI; in der Folge der Guardiola Linie.";
      alprincipio3.innerHTML = "Im Bestreben der Suche von Funktionalität und Rasse sowie Figur und Charakter reihten wir auch die Linie von Don Salvador Sánchez Barbudo mit NOVELERO XXXII ein. Wahrscheinlich einer der besten rotfuchshaarigen Hengste im Moment. Dieses Pferd abgesehen der besonderen morphologie seiner Bodenfestigkeit und guten übergeordneten Linien, brachte eine Art an Bewegungen mit die unter dem Spanischem Pferd leider aussergewöhnlich ist. Abgesehen der Geräumigkeit und Trittfrequenz dieser, heben sie sich durch deren Federung, deren Anstoss des hinteren Drittels und deren Leichtigkeit der Rückseiten hervor.";

/*Contacto*/
contacto.innerHTML = "Contact";
contacto1.innerHTML = "Auf dieser Website möchten wir Ihnen einen ersten Eindruck davon vermitteln, wer wir sind und was wir tun. Bei Interesse an unseren Tieren senden wir Ihnen unverbindlich weitere Informationen, Fotos und Videos zu..<br>YEGUADA MOLERO MALO<br>Finca Valdeherreros Alto13370<br> Calzada de Calatrava.<br>CIUDAD REAL<br>elefon- 926 338 203<br>Mobiltelefon. 680 422 844 - 680 422 845<br>REGA-Code ES130270000146<br>E-Mail. info@yeguadamolero.es<br>und Sie finden uns auf Google Earth: Breitengrad 38º 38'52.74'' und Längengrad 3º 39' 13.29'' W";
  }
}
