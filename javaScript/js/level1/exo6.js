/**
 * exo6: Pair ou Impair
 * un programme qui demande à l'utilisateur de saisir un nombre et qui affiche si ce nombre est pair ou impair.
 * @param {number} number le nombre  à vérifier
 * 
 */
function evenOrOdd(number) {
    if (number % 2 == 0){
        console.log(number + " est un nombre pair")
    }
    else{
        console.log(number + " est un nombre impair")
    }
}

//evenOrOdd(78924);