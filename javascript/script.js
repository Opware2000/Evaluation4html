/*  ---------------------------------------------- */
/* | Javascript Evaluation HTML CSS Javascript    |*/
/* | auteurs : Marc Bouché Pillon, Nicolas Ogier  |*/
/* | Utilisé par le fichier xhtml.html            |*/
/*  ---------------------------------------------- */

/* Fonction de changement de côté de l'image de Georges Boole */
function changer_cote_float()
{
  var item = document.getElementById('imageflottante');
  var bouton = document.getElementById('position_bouton');
  if (item.style.float == 'right')
    {
      item.style.float = 'left';
      item.style.marginLeft = "0";
      item.style.marginRight= "10px";
      bouton.style.float = 'left';
    }
  else
    {
      item.style.float ='right';
      item.style.marginLeft = "10px";
      item.style.marginRight= "0px";
      bouton.style.float = 'right';
    }
}

/* Fonction qui affiche l'heure machine */
function heure_machine()
{
  var item = document.getElementById('heure');
  var now = new Date()
  var h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  if (h<10)
  {
    h = "0" + h;
  }
  if (m<10)
  {
    m = "0" + m;
  }
  if (s<10)
  {
    s = "0" + s;
  }
  item.innerHTML = "Heure machine " + h + ":" + m + ":" + s;
}

/* Fonction d'initialisation de la page : formulaire + heure */
function init()
{
  heure_machine();
}

init();