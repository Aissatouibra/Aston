/**
 * exo 3: Somme
 * un programme qui demande à l'utilisateur de saisir un nombre "N".​Calculer la somme de tous les nombres entre 1 et N.
 * @param {number} number le nombre dont on calcul la somme 
 */

function somme(number){
    let affichage = "";
    let result=0;
    for (let i= 1; i< number; i++){
        affichage +=i + "+" ;
        result+=i;
    }
    affichage+=number;
    console.log(affichage + "=" + (result+number)) ;

}

somme(5);