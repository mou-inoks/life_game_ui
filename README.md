# JEU DE LA VIE 🧬

Le Jeu de la vie est un « jeu à zéro joueur », puisqu'il ne nécessite aucune intervention du joueur lors de son déroulement.
Il s’agit d’un automate cellulaire, un modèle où chaque état conduit mécaniquement à l’état suivant à partir de règles préétablies.

## REGLES 🖥️

À chaque itération, l'état d’une cellule est entièrement déterminé par l’état de ses huit cellules voisines, selon les règles suivantes : 
                - une cellule morte possédant exactement trois cellules voisines vivantes devient vivante (elle naît) ; 
                - une cellule vivante possédant deux ou trois cellules voisines vivantes le reste, sinon elle meurt
                
                
Exemple : 

Ainsi, la configuration suivante: 
![image](https://user-images.githubusercontent.com/89457451/168296600-2e0fd297-41f1-4dd6-a2be-26d8a20125dc.png)
Deviendra au tours suivant : 
![image](https://user-images.githubusercontent.com/89457451/168296827-fa4f3796-0856-4ad5-8ce3-7c8b75f60eb5.png)
qui redonne ensuite la première.
