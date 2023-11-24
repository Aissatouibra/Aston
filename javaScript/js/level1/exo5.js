/**
 * exo5 : Profit ou perte
 *  un programme qui demande à l'utilisateur de saisir le prix de fabrication et le prix de vente d'un produit et vérifiez-en le profit ou la perte.
 * @param {number} manufacturingPrice le prix de fabrication
 * @param {number} salePrice le pprix de vente
 */

function profitOrLoss(manufacturingPrice,salePrice){
    if (manufacturingPrice > salePrice) {
        console.log("Dommage vous avez fait une perte");
    }
    else{
        console.log("Félicitations vous avez fait du profit !!!!")
    }
}

profitOrLoss(2500, 45000);