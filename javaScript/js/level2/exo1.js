/**
 * exo1 : Qui est le plus grand ?
 * un programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand.
 * @param {numbers} number1 une liste de nombres à comparer
 * @returns le plus grand nombre de la liste
 * 
 */

function compare(numbers){
    let result=0;
    for (let i=0 ; i< numbers.length; i++){
        if (numbers[i]> res){
            result=numbers[i];
        }
    }
    return result
}

/**
 * une fonction qui prend une liste d'entiers et affiche le plus grand  d'entre eux
 * @param {Array} numbers  une liste d'entiers 
 */

function affiche (numbers){
    console.log( "[ " + numbers + " ] " + " --> " + compare(numbers));

}
//affiche([12, 54, 32]);