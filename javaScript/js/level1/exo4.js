/***
 * exo4: Club d'enfants
 * un programme qui demande d'entrer l'âge d'un enfant et qui vérifie dans quel catégorie il est
 * @param {number} age the child's old
 * 
 */

function childrensClub(age){
    if ( age >= 12 ){
        console.log("Cadet");
    }
    else if ( age >= 10 ){
        console.log("Minime");
    }
    else if ( age >= 8 ){
        console.log("Pupille");
    }
    else{
        console.log("Poussin");
    }
}

//childrensClub(0);