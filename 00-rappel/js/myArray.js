//Une classe est un modèle ("Moule") qui permet de créer nos propres objets
export class  MyArray {
    // Le nom de la fonction est imposée, elle permet l'initialisation de nos objets.
    constructor(prenoms) {
        this.monTableau = prenoms;
        console.log(this.monTableau);
    }
    myForEach(uneFonction){
        for(const element of this.monTableau){
            uneFonction(element);
        }
    }

    myFilter(myCallBack){
        let new_tab = [];
        for (const element of this.monTableau){
            let isOk = myCallBack(element);
         if (isOk) {
             new_tab.push(element);
         }
        }
        
         return new_tab;
    }
   
}
const MOVIES  = ["Avatar", "Titanic"]
export default MOVIES;

