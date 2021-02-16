/*  ---------------------------------------------- */
/* | Javascript Evaluation HTML CSS Javascript    |*/
/* | auteurs : Marc Bouché Pillon, Nicolas Ogier  |*/
/* | Utilisé par le fichier xhtml.html            |*/
/*  ---------------------------------------------- */

/* Variables globales du programme */
/* Zones d'affichage */
var valeurA = document.getElementById('valeurA');
var valeurB = document.getElementById('valeurB');
var nomFonction = document.getElementById('valeur_fonction_logique');
var menuDeroulant = document.getElementById("fonctionLogique");
/* Récupère l'affichage des tables de vérité */
var tableVeriteAND = document.getElementById('tableVeriteAND');
var tableVeriteOR = document.getElementById('tableVeriteOR');
var tableVeriteXOR = document.getElementById('tableVeriteXOR');
/* Récupère l'affichage du tableau de question */
var tableauQuestion = document.getElementById('tableauQuestion');
/* Récupère l'affichage de la boite de message */
var boiteMessage = document.getElementById('boiteMessage')

/* Fonction de changement de côté de l'image de Georges Boole et du bouton */
function changer_cote_float() {
  var divImage = document.getElementById("imageflottante");
  var divTexte = document.getElementById("texte");
  if (divImage.style.float == "right") {
    divImage.style.float = "left";
    divImage.style.marginLeft = "0";
    divImage.style.marginRight = "10px";
    divTexte.style.marginRight = '360px';
  } else {
    divImage.style.float = "right";
    divImage.style.marginLeft = "10px";
    divImage.style.marginRight = "0px";
    divTexte.style.marginLeft = '360px';
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
/* Permet de rafraîchir l'affichage de l'heure toutes les secondes*/
function rafraichir() {
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout("heure_machine()", t);
}

/* Création de l'exercice */

function creer_exercice() {
  /* Récupération des données du formulaire */
  /* Récupère les boutons radio */
  var a0 = document.getElementById('a0');
  var a1 = document.getElementById('a1');
  var b0 = document.getElementById('b0');
  var b1 = document.getElementById('b1');
  /* Récupère le nom de la fonction affichée dans le menu déroulant */

  var menuDeroulantChoix = menuDeroulant.selectedIndex;
  var menuDeroulantValeur = menuDeroulant.options[menuDeroulantChoix].value;
  var menuDeroulantTexte = menuDeroulant.options[menuDeroulantChoix].text;
  /* Récupère les cases à cocher */
  var caseTableVerite = document.getElementById('table_verite');
  var caseQuestion = document.getElementById('question');
  var caseReponse = document.getElementById('reponse');

  /* si aucune fonction n'est choisie */
  //console.log('Menu déroulant ' + menuDeroulantValeur);
  boiteMessage.style.display = 'none';
  // console.log('Alerte ' + boiteMessage.style.display);
  if (menuDeroulantValeur == '0') {
    affichage_message('<span class="gras">Choisir une fonction logique</span>');
  } else {
    nomFonction.innerHTML = 'Fonction logique <span class="gras">' + menuDeroulantTexte.toUpperCase() + "</span>";
    //console.log('Choix de la fonction ' + menuDeroulantValeur);
    var a, b;
    /* Vérification des boutons radio*/
    if (a0.checked) {
      a = a0.value;
    }
    if (a1.checked) {
      a = a1.value;
    }
    if (b0.checked) {
      b = b0.value;
    }
    if (b1.checked) {
      b = b1.value;
    }

    tableVeriteOR.style.display = 'none';
    tableVeriteXOR.style.display = 'none';
    tableVeriteAND.style.display = 'none';
    if ((caseQuestion.checked == false) && (caseReponse.checked == false) && (caseTableVerite.checked == false)) {
      /* Aucune case n'est cochée */
      affichage_message('Choisir quelque chose à faire');
    }
    /* Vérification des cases à cocher */
    if (caseTableVerite.checked) {
      /* Affiche la table de vérité de la fonction choisie */
      switch (menuDeroulantValeur) {
        case 'and':
          tableVeriteAND.style.display = 'block';
          break;
        case 'xor':
          tableVeriteXOR.style.display = 'block';
          break;
        case 'or':
          tableVeriteOR.style.display = 'block';
          break;
        default:
          console.log(tableVeriteAND, tableVeriteXOR, tableVeriteXOR);
      }
    }
    if (caseQuestion.checked) {
      /* Affiche une question */
      tableauQuestion.style.display = 'block';
      /* Affichage de Vrai ou Faux dans le tableau de réponse élève */
      if (a == 1) {
        a = 'VRAI';
      } else {
        a = 'FAUX';
      }
      if (b == 1) {
        b = 'VRAI';
      } else {
        b = 'FAUX';
      }
      valeurA.innerHTML = ' est ' + a;
      valeurB.innerHTML = ' est ' + b;
    } else {
      tableauQuestion.style.display = 'none';
    }
  }


}
/* Menu déroulant changement à la sélection */
function change_valeur() {
  if (menuDeroulantValeur != '0') {
    nomFonction.innerHTML = 'Fonction logique <span class="gras">' + menuDeroulantTexte.toUpperCase() + "</span>";
  } else {
    affichage_message('<span class="gras">Choisir une fonction logique</span>');
  }
}

/* Fonction d'initialisation de la page : formulaires + heure */
function init() {
  heure_machine();
  raz();
}


/* Fonction vérification */
function verif() {

}

/* Affichage boite de messages */
function affichage_message(texte) {
  boiteMessage.style.display = 'block';
  var html = ' <div class="alerte"> \
   <span class = "fermeture"  onclick = "this.parentElement.style.display=\'none \';" > &times; </span>' + texte + ' </div> ';
  boiteMessage.innerHTML = html;
  console.log(texte);
}

/* Fonction de remise à zéro du formulaire */
function raz() {
  /* Récupération des données du formulaire */
  /* Récupère les boutons radio */
  var a0 = document.getElementById('a0');
  var a1 = document.getElementById('a1');
  var b0 = document.getElementById('b0');
  var b1 = document.getElementById('b1');
  /* Récupère les cases à cocher */
  var caseTableVerite = document.getElementById('table_verite');
  var caseQuestion = document.getElementById('question');
  var caseReponse = document.getElementById('reponse');
  /* ----- Remise à zéro des valeurs ----- */
  /* Menu déroulant */
  menuDeroulant.value = 0;
  /* Boutons radio */
  a0.checked = true;
  a1.checked = false;
  b0.checked = true;
  b1.checked = false;
  /* Case à cocher */
  caseQuestion.checked = false;
  caseReponse.checked = false;
  caseTableVerite.checked = false;
  /* Zones d'affichage */
  valeurA.innerHTML = '<!--valeur de A-->'
  valeurB.innerHTML = '<!--valeur de B-->'
  nomFonction.innerHTML = '<span class="gras">Choisir une fonction logique</span>'
  /* Tables de vérités */
  tableVeriteAND.style.display = "none";
  tableVeriteOR.style.display = "none";
  tableVeriteXOR.style.display = "none";
  /* Récupère l'affichage du tableau de question */
  tableauQuestion.style.display = 'none';
  boiteMessage.style.display = 'none';
}

/* appelle l'intialisation au chargement du script */
init();