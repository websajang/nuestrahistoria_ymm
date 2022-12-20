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
	  
	  
/*En la actualidad*/
enlaactualidadxx.innerHTML = "En la actualidad";
	  enlaactualidadxx1.innerHTML = "En Yeguada Molero Malo a lo largo de estos años de ganadería, hemos conseguido fijar una serie de rasgos en nuestros animales, que hoy en día hacen facilmente reconocible un animal de nuestro hierro.Son animales de capa castaña o negra habitualmente, animales de buena alzada y un importante volumen, buenas lineas superiores y grupas poderosas, además hemos seleccionado nuestros animales por su corrección de aplomos.Desde el primer momento hemos primado que nuestros animales se muevan, que funcionen y que les sirvan a los jinetes. Buscamos un movimiento racial, con acción de rodilla y con fuerza en el tercio posterior, caballos que empujen.Buscamos caballos capaces pero equilibrados mentalmente. Con un carácter inmejorable pero con mucho corazón a la hora del trabajo. Hemos fijado una serie de rasgos que nos conducen a criar caballos enrazados, en definitiva, a criar caballos de Pura Raza Española funcionales y bellos.";
	  enlaactualidadxx2.innerHTML = "En este afán, hemos seleccionado animales que resumen los rasgos anteriormente descritos y que sobre todo, atesoran en sus genes la riqueza morfológico-funcional de sus antepasados. Buscamos en ellos siempre que su reconocida ascendencia garantice los valores reseñados, que no son otros que los de la calidad del caballo español. Todo ello, se ha basado en dos pilares fundamentales dentro de nuestra casa. El primero, un riguroso criterio de selección de nuestras yeguas madres, basado en el saber hacer ganadero y en los resultados obtenidos en el tiempo. El segundo, en la concienzuda elección de los sementales con los que hemos cubierto en nuestra casa. Hemos tenido clara en cada momento la ruta a seguir y no hemos dudado en rectificar cuando los resultados no fueron los esperados.  Llegados a este punto, actualmente estamos confiando principalmente en nuestros dos sementales castaños.Por un lado , semental castaño del hierro de don José Luis de la Escalera y con una alzada de 1,72m. Desciende de dos de las lineas más funcionales de este hierro, y que tienen en ENTENDIDO XX y en VINATERO III su origen.";
	  enlaactualidadxx3.innerHTML = "En esta linea, varios han sido los ejemplares que han estado compitiendo a nivel Gran Premio de Doma. Buen exponente de ello es CURIOSO XXV, también hijo de DOMINANTE XVI.CHIQUILLO VI ha sido largamente reconocido en los concursos morfo-funcionales donde consiguió un gran número de medallas y varios premios a los mejores movimientos, así como varios Campeonatos y Subcampeonatos de la Raza. Obtuvo una meritoria cuarta posición en el Campeonato de España 2007 en la sección de Potros de dos años. Por otra parte,, semental castaño calificado del hierro de Bohórquez. Obtuvo una meritoria cuarta posición en el Campeonato de España 2002 en la sección de Potros de tres años.Hijo del Campeón de España “Rondeño XI” y de “Colombiana II”, “Colombiano X” es descendiente directo de las dos líneas genealógicas más importantes y demandadas en la actualidad “Lebrijano III” y “Albero II”, abuelos de “Colombiano X”, son los fundadores de dos estirpes de caballos funcionales y con belleza dentro del Caballo Español.";

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
	
	/*En la actualidad*/
enlaactualidadxx.innerHTML = "Nowadays";
	  enlaactualidadxx1.innerHTML = "In Stud Molero Malo along these years of breeding, we managed to establish a number of features in our animals, which today make an animal easily recognizable from our iron. Animals are brown or black layer usually animals good height and a large volume, good top line and powerful hindquarters, and we have selected our animals for their correction aplomb. From the first moment we primacy that our animals to move, that work and serve them to the riders. We seek a racial movement, with knee action and hard in the posterior third, horses that push. We horses capable but mentally balanced. With an excellent character but with a lot of heart at the time of labor. We have set a number of features that lead us to raise horses enrazados ultimately raise Purebred Spanish horses functional and beautiful.";
	  enlaactualidadxx2.innerHTML = "In this effort, we selected animals that summarize the features described above and above all, cherish in their genes morphological-functional richness of their ancestors. We look at them whenever guarantee its recognized values reported ancestry, who are none other than the quality of the Spanish horse. All this, is based on two pillars inside our house. The first, a rigorous selection of our mares, based on the know-how livestock and results achieved over time. The second, in the conscientious choice of stallions with which we covered in our house. We have been clear at all times the way forward and we have not hesitated to rectify when the results were not as expected. At this point, we are currently relying primarily on our two stallions brown. For one CHIQUILLO VI , iron chestnut stallion Don Jose Luis de la Escalera and with a lift of 1.72 m. Descended from two of the most functional lines of this iron, and have to UNDERSTAND VINATERO III XX and its origin.";
	  enlaactualidadxx3.innerHTML = "Along these lines, there have been several examples that have been competing at Grand Prix Dressage. Good example of this is FUN XXV, also DOMINANT son XVI. CHIQUILLO VI has long been recognized in the morpho-functional competitions where he won a number of medals and several awards for the best moves and several Championships and Subcampeonatos of Breed. He earned a creditable fourth place in the Championship of Spain 2007 Colts section two years. Moreover, COLOMBIAN X , chestnut stallion Bohorquez Iron qualified. Or btuvo a creditable fourth place in the Championship of Spain 2002 Colts section three. Son of Champion of Spain 'Rodeo XI' and 'Colombiana II', 'Colombian X' is a direct descendant of the two most important genealogical lines today demanded 'Lebrijano III' and 'Albero II' grandparents 'Colombian X' are the founders of two strains of functional and beautiful horses within the Spanish Horse.";
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
	
	
	/*En la actualidad*/
enlaactualidadxx.innerHTML = "Aktuell";
	  enlaactualidadxx1.innerHTML = "In dem Gestüt von Molero Malo haben wir es im Laufe dieser Zuchtjahre geschafft, einige Merkmale in unseren Tieren festzusetzen. Heutzutage machen es diese leicht ein Tier unseres Ahnens zu erkennen. Es handelt sich meistens von Tieren schwarzen oder braunen Rosshaar. Tiere gutem Hauptes und wichtigem Umfang, gute übergeordnete Linien und bedeutendes Kreuz. Wir haben zudem unsere Tiere aufgrund deren Umsicht ausgesucht. Vom ersten Moment an war es uns wichtig, dass unsere Tiere Bewegung, Nutzen und Funktionalität des Reiters befriedigen sollten. Unser Bestreben ist die rassenartige Bewegung mit Knieanwendung und Kraft des hinteren Drittels. Pferde für den Anstoß. Wir suchen fähige aber mental gleichgewichtige Pferde. Mit einem unverbesslicherem Charakter und viel Herz zum Arbeitszeitpunkt. Wir haben eine Folge an Merkmalen festgesetzt die uns zu einer reinrassigen Zucht von Pferden führt. Letztendlich eine Zucht von funktionell und schönen reinrassigen Spanische Pferde.";
	  enlaactualidadxx2.innerHTML = "In diesem Bestreben haben wir Pferde ausgesucht welche die vorherigen beschriebenen Merkmale zusammenfassen und vor allem, in deren Genen, dass morphologische-funktionelle Reichtum deren Vorfahren ansammeln. Wir suchen in deren Nachfahren immer die angegebenen Werte. Nicht andere als die der spanischen qualitativen Pferde. All dies baut sich auf zwei grundlegende Stützen unseres Hauses. Die erste, ein strenger Selektionskriterium unserer Mutterstuten basierend auf unser Zuchtkönnen und auf die erreichten Erfolge in der Zeit. Die zweite, eine gewissenhafte Selektion unserer Hengste mit denen wir die Vermährung in unserem Hause gedeckt haben. Wir hatten eine klare Leitlinie in jedem Moment und wir haben keine Bedenken an der Berichtigung von Ergebnissen die nicht unseren Vorstellungen entsprachen gehabt. An diesem Zeitpunkt angekommen setzen wir hauptsächlich unser Vertrauen auf unsere zwei braunen Hengste. Einerseits CHIQUILLO VI, ein brauner Hengst des Ahnen von Don José Luis de la Escalera mit einer Figur von 1,72 M. Er stammt von zwei der funktionellsten Linien dieses Ahnens deren Ursprung in ENTENDIDO XX und VINATERO III zu finden ist.";
	  enlaactualidadxx3.innerHTML = " In dieser Linie waren es mehrere Exemplare die auf dem Niveau vom Grossen Preis für Dressur teilgenommen haben. Guter Vertreter dessen ist CURIOSO XXV, auch Sohn von DOMINANTE XVI. CHIQUILLO VI wurde lange in morpho-funktionellen Wettbewerbe anerkannt. In diesen gelang es ihm eine hohe Anzahl an Medaillen und mehrere Preise für die besten Bewegungen zu gewinnen. Desgleichen mehrere Rassen- Meisterschaften und Untermeisterschaften. Er erlangte eine verdiente vierte Position im Wettberwerb für Spanien 2007 in der Kategorie zweijahres Fohlen. Andererseits COLOMBIANO X, qualifizierter brauner Hengst des Ahnens von Bohórquez. Er erlangte eine verdiente vierte Position im Wettbewerb für Spanien 2002 in der Kategorie des dreijahres Fohlen. Sohn des Gewinners für Spanien Rondeño XI und von Colombiana II. Colombiano X ist direkter Nachkommen von zwei der genealogischen wichtigsten und nachgefragtesten Linien der aktualität (Lebrijano III und Albero II). Grosseltern von Colombiano X sind diese Gründer zwei Sippen von funktionellen und schönen Pferden in der spanischen Pferderasse.";
 
  }
}
