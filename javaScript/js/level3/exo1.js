/**
 * exo1: Fizz Buzz
 */


/**
 * fonction pour demander à l'utilisateur de saisir un nombre.
 */


function chooseANumber(){    
    var readlineSync = require("readline-sync");    
    let number = readlineSync.question("Veuillez saisir un nombre : ");   
    return parseInt(number);
}
/**
 * function qui permet de recuperer dans un tableau les nombres de 0 à N.
 * @param {number} number le nombre donné
 * @returns {Array} un tableau de nombre de 0 à number
 */
function getNumbersFrom0toN(number){
    let array=[];
    for (let i= 0; i< number+1; i++){
        array.push(i);
    }
    return array;

}


/**

 *   Un programme qui demande à l'utilisateur de saisir un nombre "N" grâce à la @function chooseANumber. 
 *   Afficher tous les nombres allant de 0 à "N",  avec la @function getNumbersFrom0toN 
 *   et ensuite il affiche les nombres avec les particularités suivantes :
 * - Remplace tous les multiples de 3 par "FIZZ"​
 * - Remplace tous les multiples de 5 par "BUZZ"​
 * - Remplace tous les multiples de 3 ET 5 par "FIZZBUZZ"
 * 
 */

function fizzBuzz() {

    let numbers=getNumbersFrom0toN(chooseANumber());
    let fiz = "FIZZ";
    let buz = "BUZZ";
    for (let number in numbers){
        if (number%3 == 0 && number %5 == 0){
            console.log(fiz + buz);

        }
        else if (number %3 == 0)  {
            console.log(fiz);
        }
        else if( number %5 == 0 ){
            console.log(buz);
        }
        else {
            console.log(number);
        }
    }    

}

//fizzBuzz();