/**
 * exo9: somme du tableau
 * une fonction qui prend un tableau d'entiers en paramètre et renvoie la somme de tous les éléments du tableau.
 * @param {Array} table le tableau d'entiers dont on somme les éléments
 */

function sumTable(table){
    result=0;
    for (let i=0;i< table.length;i++){
        result +=table[i];
    }
    console.log(result);
}

//sumTable([1,2,3]);