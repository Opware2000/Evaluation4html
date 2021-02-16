/*  ---------------------------------------------- */
/* | Javascript Evaluation HTML CSS Javascript    |*/
/* | auteurs : Marc Bouché Pillon, Nicolas Ogier  |*/
/* | Utilisé par le fichier xhtml.html            |*/
/*  ---------------------------------------------- */

/* Variables globales du programme */
/* Zones d'affichage */
var valeurA = document.getElementById("valeurA");
var valeurB = document.getElementById("valeurB");
var nomFonction = document.getElementById("valeur_fonction_logique");
var menuDeroulant = document.getElementById("fonctionLogique");
/* Récupère l'affichage des tables de vérité */
var tableVeriteAND = document.getElementById("tableVeriteAND");
var tableVeriteOR = document.getElementById("tableVeriteOR");
var tableVeriteXOR = document.getElementById("tableVeriteXOR");
/* Récupère l'affichage du tableau de question */
var tableauQuestion = document.getElementById("tableauQuestion");
/* Récupère l'affichage de la boite de message */
var boiteMessage = document.getElementById("boiteMessage");

/* Fonction de changement de côté de l'image de Georges Boole et du bouton */
function changer_cote_float() {
  var divImage = document.getElementById("imageflottante");
  var divTexte = document.getElementById("texte");
  if (divImage.style.float == "right") {
    divImage.style.float = "left";
    divImage.style.marginLeft = "0px";
    divImage.style.marginRight = "10px";
    divTexte.style.marginLeft = "360px";
    divTexte.style.marginRight = "0px";
  } else {
    divImage.style.float = "right";
    divImage.style.marginLeft = "10px";
    divImage.style.marginRight = "0px";
    divTexte.style.marginRight = "360px";
    divTexte.style.marginLeft = "0px";
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


/* Vérification du formulaire, et enregistrement des valeurs */
function verif() {
  /* on teste si le sessionStorage fonctionne */
  if (typeof sessionStorage == "undefined") {
    alert("sessionStorage n'est pas supporté");
    return 0;
  }
  
  /* Récupération de la fonction logique affichée dans le menu déroulant */
  var menuDeroulantChoix = menuDeroulant.selectedIndex;
  boiteMessage.style.display = "none";
  if (menuDeroulantChoix == 0) {
    affichage_message('<span class="gras">Choisir une fonction logique</span>', 0);
    return 0;
  }
  nomFonction.innerHTML = 'Fonction logique <span class="gras">' +
                          menuDeroulant.options[menuDeroulantChoix].text.toUpperCase() +
                          "</span>";
  sessionStorage.setItem("fonction", menuDeroulantChoix);
  
  /* Récupération des valeurs de A et B dans les radio boutons */
  var a0 = document.getElementById("a0");
  var a1 = document.getElementById("a1");
  var b0 = document.getElementById("b0");
  var b1 = document.getElementById("b1");
  var a, b;
  if (a0.checked) {
    a = a0.value;
  }
  else {
    a = a1.value;
  }
  if (b0.checked) {
    b = b0.value;
  }
  else {
    b = b1.value;
  }
  sessionStorage.setItem("a", a);
  sessionStorage.setItem("b", b);
  
  /* Récupération des options dans les cases à cocher */
  var caseTableVerite = document.getElementById("table_verite");
  var caseQuestion = document.getElementById("question");
  var caseReponse = document.getElementById("reponse");
  if (caseQuestion.checked == false &&
      caseReponse.checked == false &&
      caseTableVerite.checked == false) {
      /* Aucune case n'est cochée */
      affichage_message("Choisir quelque chose &agrave; faire", 0);
      return 0;
  }
  sessionStorage.setItem("table_verite", caseTableVerite.checked);
  sessionStorage.setItem("question", caseQuestion.checked);
  sessionStorage.setItem("reponse", caseReponse.checked);
  return 1;
}


/* Affichage de l'exercice (suppose que le formulaire a ete verifie) */
function affichage_exercice() {
  console.log('AFFICHAGE EXERCICE')
  tableVeriteOR.style.display = "none";
  tableVeriteXOR.style.display = "none";
  tableVeriteAND.style.display = "none";
  console.log('Table vérité ' + sessionStorage.getItem("table_verite") )
  /* affiche ou non la table de verite */
  if (sessionStorage.getItem("table_verite") == 'true') {
    switch (menuDeroulant.options[sessionStorage.getItem("fonction")].value) {
      case "and":
        tableVeriteAND.style.display = "block";
        break;
      case "xor":
        tableVeriteXOR.style.display = "block";
        break;
      case "or":
        tableVeriteOR.style.display = "block";
        break;
      default:
        console.log(tableVeriteAND, tableVeriteXOR, tableVeriteXOR);
        break;
    }
  }

  /* affiche ou non la question */
  if (sessionStorage.getItem("question") == 'true') {
    tableauQuestion.style.display = "block";
    /* Affichage de Vrai ou Faux dans le tableau de réponse élève */
    if (sessionStorage.getItem("a") == '1') {
      var a = "VRAI";
    } else {
      var a = "FAUX";
    }
    if (sessionStorage.getItem("b") == '1') {
      var b = "VRAI";
    } else {
      var b = "FAUX";
    }
    valeurA.innerHTML = " est " + a;
    valeurB.innerHTML = " est " + b;
  } else {
    tableauQuestion.style.display = "none";
  }
}

function creation_exercice() {
  if (verif() == 1) {
    console.log("formulaire vérifié")
    affichage_exercice();
  }
}


/* Fonction de validation de la réponse élève */
function valider_reponse() {
  /* recuperation de la reponse de l'utilisateur */
  var reponseEleve = document.getElementById("reponseEleve").value;
  reponseEleve = reponseEleve.toUpperCase();
  /* On traite juste le cas où l'élève réponds un mot, ou les valeurs 1 et 0 */
  if (reponseEleve == "VRAI" || reponseEleve == "VRAIE" || reponseEleve == "1") {
    reponseEleve = true;
  } else {
    reponseEleve = false;
  }
  sessionStorage.setItem("reponse_eleve", reponseEleve);
  
  /* calcul de la bonne reponse */
  var bonneReponse;
  switch (menuDeroulant.options[sessionStorage.get("fonction")].value) {
    case "and":
      bonneReponse = parseInt(sessionStorage.get("a")) && parseInt(sessionStorage.get("b"));
      break;
    case "xor":
       // simulation du xor car javascript n'a pas de xor pour des booléens
      bonneReponse = ((parseInt(sessionStorage.get("a")) && !parseInt(sessionStorage.get("b"))) ||
                     (!parseInt(sessionStorage.get("a")) && parseInt(sessionStorage.get("b"))));
      break;
    case "or":
      bonneReponse = parseInt(sessionStorage.get("a")) || parseInt(sessionStorage.get("b"));
      break;
    default:
      break;
  }
  
  /* Verification de la reponse de l'eleve */
  var caseReponse = document.getElementById("reponse");
  var reponse = "";
  if (sessionStorage.getItem("reponse") == 'true') {
    if (bonneReponse == true) {
      reponse = 'Le r&eacute;sultat est <span class="italique">VRAI</span>.';
    } else {
      reponse = 'Le r&eacute;sultat est <span class="italique">FAUX</span>.';
    }
  }
  if (reponseEleve == bonneReponse) {
    affichage_message("BONNE R&Eacute;PONSE ! " + reponse, 1);
  } else {
    affichage_message("MAUVAISE R&Eacute;PONSE ! " + reponse, 0);
  }
}


/* Affichage boite de messages */
function affichage_message(texte, type) {
  boiteMessage.style.display = "block";
  var html = "";
  if (type == 0) {
    html = ' <div class="alerte">';
  } else {
    html = ' <div class="alerte reussite">';
  }
  html =
    html +
    '<span class = "fermeture"  onclick = "this.parentElement.style.display=\'none \';" > &times; </span>' +
    texte +
    " </div> ";
  boiteMessage.innerHTML = html;
  console.log(texte);
}


/* Fonction de remise à zéro du formulaire */
function raz() {
  /* Récupération des données du formulaire */
  /* Récupère les boutons radio */
  var a0 = document.getElementById("a0");
  var a1 = document.getElementById("a1");
  var b0 = document.getElementById("b0");
  var b1 = document.getElementById("b1");
  /* Récupère les cases à cocher */
  var caseTableVerite = document.getElementById("table_verite");
  var caseQuestion = document.getElementById("question");
  var caseReponse = document.getElementById("reponse");
  var reponseEleve = document.getElementById("reponseEleve");
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
  valeurA.innerHTML = "<!--valeur de A-->";
  valeurB.innerHTML = "<!--valeur de B-->";
  nomFonction.innerHTML =
    '<span class="gras">Choisir une fonction logique</span>';
  /* Tables de vérités */
  tableVeriteAND.style.display = "none";
  tableVeriteOR.style.display = "none";
  tableVeriteXOR.style.display = "none";
  /* Récupère l'affichage du tableau de question */
  tableauQuestion.style.display = "none";
  boiteMessage.style.display = "none";
  reponseEleve.value = "votre réponse";
}

/* Fonction de stockage du nombre de visites de la page en localStorage */
function nombre_de_visites() {
  if (typeof localStorage != "undefined") {
    // Récupération de la valeur dans web storage
    var nbvisites = localStorage.getItem("visites");
    // Vérification de la présence du compteur
    if (nbvisites != null) {
      // Si oui, on convertit en nombre entier la chaîne de texte qui fut stockée
      nbvisites = parseInt(nbvisites);
    } else {
      nbvisites = 0;
    }
    // Incrémentation
    nbvisites++;
    // Stockage à nouveau en attendant la prochaine visite...
    localStorage.setItem("visites", nbvisites);
    // Affichage dans la page
    document.getElementById("visites").innerHTML = nbvisites;
  } else {
    alert("localStorage n'est pas supporté");
  }
}

/* Fonction d'initialisation de la page : formulaires + heure */
function init() {
  heure_machine();
  raz();
  nombre_de_visites();
}

/* appelle l'intialisation au chargement du script */
init();
