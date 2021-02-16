/*  ---------------------------------------------- */
/* | Javascript Evaluation HTML CSS Javascript    |*/
/* | auteurs : Marc Bouché Pillon, Nicolas Ogier  |*/
/* | Utilisé par le fichier xhtml.html            |*/
/*  ---------------------------------------------- */
console.log('Chargement du javascript')
/* Variables globales du programme */

/* Récupère la page sur laquelle on affiche le javascript */
var pageHtml = document.getElementById('page').value;
if (pageHtml == "xhtml") {
  /* PAGE XHTML */
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
} else {
  /* PAGE HTML 5 */

}
console.log("Page en cours " + pageHtml);
/* Fonction de changement de côté de l'image de Georges Boole et du bouton */
function changer_cote_float() {
  var divImage = document.getElementById("imageflottante");
  var divTexte = document.getElementById("texte");
  if (pageHtml == "xhtml") {

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
  } else {
    if (divImage.style.float == "right") {
      divImage.style.float = "left";
      divTexte.style.float = "right";
    } else {
      divImage.style.float = "right";
      divTexte.style.float = "left";
    }
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
  if (pageHtml == "xhtml") {
    item.innerHTML = "Heure machine " + h + ":" + m + ":" + s;
  } else {
    item.innerHTML = h + ":" + m + ":" + s;
  }
  rafraichir();
}
/* Permet de rafraîchir l'affichage de l'heure toutes les secondes*/
function rafraichir() {
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout("heure_machine()", t);
}


/* Vérification du formulaire Exercice, et enregistrement des valeurs */
function verif_formulaire_exercice() {
  /* on teste si le localStorage fonctionne */
  if (typeof localStorage == "undefined") {
    alert("localStorage n'est pas supporté");
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
  localStorage.setItem("fonction", menuDeroulantChoix);

  /* Récupération des valeurs de A et B dans les radio boutons */
  var a0 = document.getElementById("a0");
  var a1 = document.getElementById("a1");
  var b0 = document.getElementById("b0");
  var b1 = document.getElementById("b1");
  var a, b;
  if (a0.checked) {
    a = a0.value;
  } else {
    a = a1.value;
  }
  if (b0.checked) {
    b = b0.value;
  } else {
    b = b1.value;
  }
  localStorage.setItem("a", a);
  localStorage.setItem("b", b);

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
  localStorage.setItem("table_verite", caseTableVerite.checked);
  localStorage.setItem("question", caseQuestion.checked);
  localStorage.setItem("reponse", caseReponse.checked);
  return 1;
}


/* Affichage de l'exercice (suppose que le formulaire a ete verifie) */
function affichage_exercice() {
  console.log('AFFICHAGE EXERCICE')
  tableVeriteOR.style.display = "none";
  tableVeriteXOR.style.display = "none";
  tableVeriteAND.style.display = "none";
  console.log('Table vérité ' + localStorage.getItem("table_verite"))
  /* affiche ou non la table de verite */
  if (localStorage.getItem("table_verite") == 'true') {
    switch (menuDeroulant.options[localStorage.getItem("fonction")].value) {
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
  if (localStorage.getItem("question") == 'true') {
    tableauQuestion.style.display = "block";
    /* Affichage de Vrai ou Faux dans le tableau de réponse élève */
    if (localStorage.getItem("a") == '1') {
      var a = "VRAI";
    } else {
      var a = "FAUX";
    }
    if (localStorage.getItem("b") == '1') {
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

function verif() {
  if (pageHtml == "xhtml") {
    if (verif_formulaire_exercice() == 1) {
      console.log("formulaire XHTML vérifié")
      affichage_exercice();
    }
  } else {
    if (verif_formulaire_email() == 1) {
      console.log('formulaire HTML5 vérifié')
    }
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
  localStorage.setItem("reponse_eleve", reponseEleve);

  /* calcul de la bonne reponse */
  var bonneReponse;
  switch (menuDeroulant.options[localStorage.getItem("fonction")].value) {
    case "and":
      bonneReponse = parseInt(localStorage.getItem("a")) && parseInt(localStorage.getItem("b"));
      break;
    case "xor":
      // simulation du xor car javascript n'a pas de xor pour des booléens
      bonneReponse = (parseInt(localStorage.getItem("a")) && !parseInt(localStorage.getItem("b"))) ||
        (!parseInt(localStorage.getItem("a")) && parseInt(localStorage.getItem("b")));
      break;
    case "or":
      bonneReponse = parseInt(localStorage.getItem("a")) || parseInt(localStorage.getItem("b"));
      break;
    default:
      break;
  }

  /* Verification de la reponse de l'eleve */
  var caseReponse = document.getElementById("reponse");
  var reponse = "";
  if (localStorage.getItem("reponse") == 'true') {
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
  if (pageHtml == "xhtml") {
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
    /* on efface les donnees stockees */
    // localStorage.clear(); <- on efface tout même l'autre formulaire donc on efface une a une.
    localStorage.removeItem("reponse");
    localStorage.removeItem("question");
    localStorage.removeItem("fonction");
    localStorage.removeItem("table_verite");
    localStorage.removeItem("a");
    localStorage.removeItem("b");
    localStorage.removeItem("reponse_eleve");
  } else {
    var nom = document.getElementById('id_nom').value;
    var age = document.getElementById('id_age').value;
    var telephone = document.getElementById('id_telephone').value;
    var color = document.getElementById('id_color').value;
    var email = document.getElementById('id_email').value;
    var niveauHtml = document.getElementById('id_niveauHtmlValeur').value;
    var message = document.getElementById('id_votreMessage').value;
    nom = '';
    age = '';
    telephone = '';
    color = '#000000';
    email = '';
    niveauHtml = 20;
    message = '';
    /* Suppression des données stockées */
    localStorage.removeItem("nom");
    localStorage.removeItem("age");
    localStorage.removeItem("telephone");
    localStorage.removeItem("color");
    localStorage.removeItem("email");
    localStorage.removeItem("niveauHtml");
    localStorage.removeItem("message");
  }
}
/* Fonction pour afficher la valeur du slider range */
function miseAJourSlider(val) {
  document.getElementById('id_niveauHtmlValeur').value = val;
}

/* Fonction vérification du formulaire Email et enregistrement des valeurs */
function verif_formulaire_email() {
  var nom = document.getElementById('id_nom').value;
  var age = document.getElementById('id_age').value;
  var telephone = document.getElementById('id_telephone').value;
  var color = document.getElementById('id_color').value;
  var email = document.getElementById('id_email').value;
  var niveauHtml = document.getElementById('id_niveauHtmlValeur').value;
  var message = document.getElementById('id_votreMessage').value;
  /* On enregistre les élements dans localStorage */
  localStorage.setItem("nom", nom);
  localStorage.setItem("age", age);
  localStorage.setItem("telephone", telephone);
  localStorage.setItem("color", color);
  localStorage.setItem("email", email);
  localStorage.setItem("niveauHtml", niveauHtml);
  localStorage.setItem("message", message);
  /* On les lit pour afficher une boite d'alerte */
  var chaine = "Nom = " + localStorage.getItem("nom") + '\n' + 'Age = ' + localStorage.getItem("age") + '\n' + 'Téléphone = ' + localStorage.getItem("telephone") + '\n' + 'Couleur = ' + localStorage.getItem("color") + '\n' + 'Courriel = ' + localStorage.getItem("email") + '\n' + 'Niveau HTML = ' + localStorage.getItem("niveauHtml") + '%' + '\n' + 'Message = ' + localStorage.getItem("message");
  alert(chaine);
  return 1
}


/* Fonction pour lire les valeurs stockées localement */
function lire_local_storage() {
  var local_reponse = localStorage.getItem("reponse");
  var local_question = localStorage.getItem("question");
  var local_fonction = localStorage.getItem("fonction");
  var local_table_verite = localStorage.getItem("table_verite");
  var local_a = localStorage.getItem("a");
  var local_b = localStorage.getItem("b");
  var local_reponse_eleve = localStorage.getItem("reponse_eleve");

  var local_nom = localStorage.getItem('nom');
  var local_age = localStorage.getItem('age');
  var local_telephone = localStorage.getItem('telephone');
  var local_color = localStorage.getItem('color');
  var local_email = localStorage.getItem('email');
  var local_niveauHtml = localStorage.getItem('niveauHtml');
  var local_message = localStorage.getItem('message');
  /* On créé deux tableaux  pour chaque formulaire qui permettront d'associer description et valeur */
  let nom_variable_xhtml = [
    'Valeur de A', 'Valeur de B', 'Id de la fonction', 'Afficher la question', "Afficher la réponse", "Afficher la table de vérité", "Réponse de l'élève"
  ]
  let variables_formulaire_xhtml = [
    local_a, local_b, local_fonction, local_question, local_reponse, local_table_verite, local_reponse_eleve
  ]
  let nom_variable_html5 = [
    'Nom', 'Age', 'Téléphone', 'Couleur', 'Email', 'Niveau de HTML', 'Courriel'
  ]
  let variables_formulaire_html5 = [
    local_nom, local_age, local_telephone, local_color, local_email, local_niveauHtml, local_message
  ]
  // console.log(variables_formulaire_xhtml, variables_formulaire_html5);
  /* Création de la liste à puce d'affichage des variables */
  var liste = '<ul><li>Page XHTML&nbsp;:<ul>';
  for (let i = 0; i < variables_formulaire_xhtml.length; i++) {
    liste += '<li>' + nom_variable_xhtml[i] + '&nbsp;:&nbsp;<span class="italique">' + variables_formulaire_xhtml[i] + '</span></li>';
  }
  liste += "</ul></li><li> Page HTML5&nbsp;:<ul>";
  for (let i = 0; i < variables_formulaire_html5.length; i++) {
    liste += '<li>' + nom_variable_html5[i] + '&nbsp;:&nbsp;<span class="italique">' + variables_formulaire_html5[i] + '</span></li>';
  }
  liste += "</ul></li></ul>";
  var liste_variables = document.getElementById('id_liste_variables');
  liste_variables.innerHTML = liste;
}
/* Fonction d'initialisation de la page : formulaires + heure */
function init() {
  heure_machine();
  raz();
}


/* appelle l'intialisation au chargement du script */
init();