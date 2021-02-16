% Evaluation HTML CSS JAVASCRIPT - DIU
% Marc Bouché Pillon & Nicolas Ogier
% 17 février 2021
# Evaluation HTML CSS JAVASCRIPT


## Page au format XHTML

La page  [```xhtml.html```](xhtml.html)  est un exerciseur sur l'algèbre de Boole.

On y choisit la fonction à travailler, on peut afficher ou non la table de vérité associée, la question, la réponse si on le souhaite. On peut choisir les valeurs des entrées binaires A et B par une série de boutons radio.

## Page au format HTML5

La page  [```html5.html```](html5.html)  est une page reprenant la citation de Wikipédia sur Boole, son image (déplaçable à gauche et à droite), ainsi qu'une vidéo d'exercice sur le Ou exclusif.
Vous pouvez y écouter une musique au format mp3.

Le formulaire de la page permet d'envoyer un courriel (la fonction d'envois du courriel n'est pas implémenté, juste la validation du formulaire par affichage d'une boite de dialogue reprenant les valeurs saisies).

Le dernier bouton permet d'afficher une liste à puce des valeurs des variables saisies dans les formulaires. Pour stocker ces valeurs, nous avons eu recours aux localStorage afin de permettre à la page html5 de lire les valeurs de la page xhtml.

## Fichiers CSS

Chaque page à son propre fichier CSS :

- [``` style.css```](styles/styles.css)  pour la page xhtml.html
- [``` style_html5.css```](styles/styles_html5.css)  pour la page html5.html car elle contient des balises spécifiques au HTML5

## Fichier Javascript

Le fichier [``` script.js```](javascript/script.js)  est commun aux deux pages, la lecture d'un ```input``` masqué (```hidden```) permet de vérifier sur quelle page est appelé le javascript afin de ne pas générer d'erreur par la lecture d'éléments de formulaire non présents sur cette page par exemple, ou pour tenir compte des particularité du HTML5.

## Crédits :

### Vidéo : [video_booleens_mon_lycee_numerique.mp4](media/video_booleens_mon_lycee_numerique.mp4)

#### Auteur :

Pascal Thérèse : professeur de mathématiques dans un lycée de Haute-Marne , formateur en mathématique/SNT

#### Licence :

Licence Creative Commons Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International 

#### Source :

[Mon lycée numérique : cours sur les booléens](http://monlyceenumerique.fr/nsi_premiere/bases_b/b5_cours_sur_les_booleens.php)

### Musique : [Slainte-StaroftheCountyDown.mp3](media/Slainte-StaroftheCountyDown.mp3)

####  Auteur :

Sláinte

####  Track :

Star of the County Down

####  Licence :

https://creativecommons.org/licenses/by-sa/3.0/deed.fr 

####  Source :

[Télécharger gratuitement Sláinte - Star of the County Down ](https://auboutdufil.com/?id=555)

### Images de George Boole : [George_Boole.jpg](media/George_Boole.jpg)
#### Auteur :

inconnu

#### Lien :

[http://schools.keldysh.ru/sch444/museum/1_17-19.htm](http://schools.keldysh.ru/sch444/museum/1_17-19.htm)

#### Licence :

Domaine publique