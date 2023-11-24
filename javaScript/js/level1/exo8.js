/**
 * exo8: Table de multiplication
 * un programme JS qui prend un nombre en entrée et affiche sa table de multiplication jusqu’à 10
 * @param {number} number le nombre dont on affiche la table de multiplication
 * 
 */

function multiplicationTable(number) {
    for (let i=1; i<11; i++){
        console.log(number + " x " + i +" = " + number * i);
    }
}

//multiplicationTable(5);