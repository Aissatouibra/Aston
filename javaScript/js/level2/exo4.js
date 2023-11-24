
/***
 * exo4 : Escalier
 * un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles
 * @param {number} number le nombre à saisir par l'utilisateur
 */
function stair(number){
   let affichage = "";
    for (let i=0; i < number; i++){
        console.log(affichage +="*");
    }
}
//stair(5);