/**
 * exo8: Positif, négatif ou nul ?
 * un programme qui demande un nombre à l'utilisateur puis vérifie si ce nombre est positif, négatif ou nul.
 * @param {number} number le nombre à vérififier
 */

function numberType(number){
    if(number >= 0){
        console.log(number +" est un nombre  positif");
    }
    else if( number == 0){
        console.log(number +" est nul")
    }
    else {
        console.log(number +" est un nombre  négatif")
    }
}
//numberType(45);