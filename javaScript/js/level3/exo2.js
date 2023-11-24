/***
 * exo2 : Le juste prix
 */

/**
 * fonction pour demander à l'utilisateur de saisir un nombre.
 */

function chooseANumber(){    
    var readlineSync = require("readline-sync");    
    let number = readlineSync.question("Veuillez saisir un nombre: ");   
    return parseInt(number);
}

/**
 * 
 * function permettant de générer aléatoirement un nombre entre 0 etle nombre passée en paramètre
 * @param {number} max le nombre maximal 
 * 
 */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
/***
 * function pour comparer deux nombre
 * @param {number} number1 l'un des deux nombres à comparer
 * @param {number} number2 l'autre nombre à comparer
 * @returns {number} renvoie :
 * - 0 si les deux nombres sont égaux
 * - 1 si le premier paramètre est supérieur 
 * - et 2 sinon
 */

function compareNumbers(number1, number2){
    if (number1 == number2) {
        return 0;
    }
    else if (number1 > number2) {
        return 1;
    }
    else{
        return 2;
    }
}

/***
 * programme qui après avoir comparer deux prix affiche sur la console si vous avez le bon prix
 * 
 * 
 */
function comparePrices(price1, price2){
    if (compareNumbers(price1,price2) == 0){
        console.log("Bravo vous avez trouvez le bon prix !")
    }
    else if(compareNumbers(price1,price2) ==1 ){
        console.log("Moins");
    }
    else{
        console.log("Plus");
    }
}


/***
 * 
 * Un programme permettant de :​ 
 * - Saisir un nombre qui sera le nombre de tentative
 * - Comparer le nombre avec le résultat attendu "N"​ ("N" étant un nombre générer aléatoirement)
 * - Afficher "Plus" ou "Moins"​
 * - Retirer une vie
 */

function theJustPrice(){
    let numberOfLife = chooseANumber();
    let thePrice= getRandomInt(numberOfLife);
    comparePrices(numberOfLife,thePrice);
    numberOfLife--;;
    while (numberOfLife >0){
        let price = (chooseANumber());
        compareNumbers(price,thePrice);
        numberOfLife--;
    }
}

theJustPrice();