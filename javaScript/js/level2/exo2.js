/**
 * exo 2: le prof
 * Un programme qui prend une liste de note et affiche un commentaire pour chaque note donnée
 * @param {Array} marks  une liste de notes
 */
function teacher(marks){
    for (let i= 0;i <marks.length; i++){
        if(marks[i] <5){
            console.log("Catastrophique il faut tout revoir");
        }
        else if(marks[i] < 11){
            console.log("Insuffissant");
        }
        else if(marks[i] < 15){
            console.log("Peut mieux faire");
        }
        else if (marks[i] <18){
            console.log("Bien");
        }
        else if(marks[i] <21) {
            console.log("Excellent, bon travail");
        }
        else {
            console.log("Il y'a une erreur dans votre note");
        }
    }
}

//teacher([3,8,11,16,19]);