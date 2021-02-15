/*  ---------------------------------------------- */
/* | Javascript Evaluation HTML CSS Javascript    |*/
/* | auteurs : Marc Bouché Pillon, Nicolas Ogier  |*/
/* | Utilisé par le fichier xhtml.html            |*/
/*  ---------------------------------------------- */

/* Fonction de changement de côté de l'image de Georges Boole et du bouton */
function changer_cote_float() {
  var div = document.getElementById("imageflottante");
  if (div.style.float == "right") {
    div.style.float = "left";
    div.style.marginLeft = "0";
    div.style.marginRight = "10px";
  } else {
    div.style.float = "right";
    div.style.marginLeft = "10px";
    div.style.marginRight = "0px";
  }
}

/* Fonction qui affiche l'heure machine */
function heure_machine() {
  var item = document.getElementById("heure");
  var now = new Date();
  var h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  item.innerHTML = "Heure machine " + h + ":" + m + ":" + s;
  rafraichir();
}
/* Permet de rafraichir l'affichage de l'heure toutes les secondes*/
function rafraichir() {
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout("heure_machine()", t);
}

/* Création de l'exercice */

function creer_exercice(){
  var valeurA = document.getElementById('valeurA') ;
  var valeurB = document.getElementById('valeurB') ;
  var nomFonction = document.getElementById('valeur_fonction_logique');
  /* Récupère les boutons radio */
  var a0 = document.getElementById('a0');
  var a1 = document.getElementById('a1');
  var b0 = document.getElementById('b0');
  var b1 = document.getElementById('b1');
  
  var a, b ;
  /* Vérification*/
  if (a0.checked){
    a = a0.value;
  }
   if (a1.checked){
    a = a1.value;
  }
   if (b0.checked){
    b = b0.value;
  }
   if (b1.checked){
    b = b1.value;
  }
  
  valeurA.innerHTML=' vaut '+a;
  valeurB.innerHTML=' vaut '+b;
  console.log(a,b)
  
}

/* Fonction d'initialisation de la page : formulaires + heure */
function init() {
  heure_machine();
}

init();

