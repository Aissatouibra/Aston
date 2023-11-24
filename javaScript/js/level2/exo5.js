/***
 * exo 5: Drôle de pyramide
 * Adaptez l'exercice 4 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide.
 * @param {number} number le nombre saisit par l'ultilisateur
 * 
 */

function funnyPyramide(number){
    let affichage = "";
    let array=[] ;
     for (let i=0; i < number; i++){ 
         array.push(affichage +="*");
         console.log(affichage);
     }
     for (let i= (number -1); i >=0; i--){
        console.log(array[i]);
    }

 }

//funnyPyramide(5);

