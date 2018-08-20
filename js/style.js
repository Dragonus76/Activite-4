/**
Code jQuery activité partie 3
 * Donnez de l'allure au générateur de formulaires
 * 
 * Intégration de Bootstrap dans le générateur à partir de l'activité 2
 * Pour cette nouvelle activité, j'ai utilisé le code développer lors de l'activité partie 2
 * 
 * Dans l'activité 2 j'ai utilisé html(), last() et append() à la place de after() et append()
 * J'utilise donc ici de nouveau html(), last() et append()
 * 
 * Choix du formulaire de base - Orientation simple
 * On peut imaginer la possibilité de modifier le style d'orientation du formulaire (inline, horizontale etc.)
 * On peut également imaginer la possibilité de choisir le style du formulaire (default, info, etc.)
 * 
 * Dans cet exercice de base, il faut suivre un parcours hierarchique de construction :
 *      label puis champ,
 *      label puis champ etc.
 *      et terminer par le bouton.
 * On peut alors imaginer choisir la destination des champs par exemple
 * On peut également développer la possibilité de réorganiser l'ordre des form-group
 * 
 * Contrôle de saisie de l'utilisateur : L'utilisateur doit saisir des caractères, pas de chaine vide
 * 
 * Pour une meilleure comprehension, commentaire du code uniquement sur la partie création label
 * 
 * Cours jQuery OpenClassrooms
*/


/*fonction qui permet l'effet blink en javascript*/


function blink(ob) 
{ 
if (ob.style.visibility == "visible" ) 
{ 
ob.style.visibility = "hidden"; 
} 
else 
{ 
ob.style.visibility = "visible"; 
} 
} 
setInterval("blink(bl)",500); 


/*fonction qui permet de faire defiler  le texte (javascript)**/

var svg = document.querySelector('svg') ;
	var text = document.querySelector('text');
	X = 900;
	Y = 100;
	var x = X ;
	var boucle = setInterval(animate,10);
	function animate()
		{
			x = x-1 ;
			if (x<=-600) x = X ;
			text.setAttribute('x',x); 

		} //fin des fonctions animate (javascript)
