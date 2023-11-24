/**
 * exo6
 * Adaptez l'exercice 5 pour que la pyramide soit dans le bon sens.
 * @param {number} taille un nombre correspondant à la taille du pyramide
 */


function pyramide(taille){
    let affichage="";
    for(let i=0;i< taille; i++){
        affichage = (" ").repeat(taille-i) ;
        console.log(affichage+="*".repeat(2*i + 1));
    }
 }
 pyramide(5);