/*  ---------------------------------------------- */
/* | Javascript Evaluation HTML CSS Javascript    |*/
/* | auteurs : Marc Bouché Pillon, Nicolas Ogier  |*/
/* | Utilisé par le fichier xhtml.html            |*/
/*  ---------------------------------------------- */

/* Fonction de changement de côté de l'image de Georges Boole et du bouton */
function changer_cote_float()
{
  var div = document.getElementById('imageflottante');
  if (div.style.float == 'right')
    {
      div.style.float = 'left';
      div.style.marginLeft = "0";
      div.style.marginRight= "10px";
    }
  else
    {
      div.style.float ='right';
      div.style.marginLeft = "10px";
      div.style.marginRight= "0px";
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
  refresh();
}

/* Fonction d'initialisation de la page : formulaire + heure */
function init()
{
  heure_machine();
}

init();