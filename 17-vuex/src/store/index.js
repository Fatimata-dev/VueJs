import { createStore } from 'vuex'
import shop from '@/api/shop.js'

export default createStore({
  // L'état de l'application, dans le store equivalent de data pour les composant 
  // C'est ici qu'on, mettra les variable du store
  state: {
    produits: [],

  },

  // Equivalent à computed
  getters:{
    produitDisponible(state){
      return state.produits.filter(p => p.inventory > 0);
    }
  },
  // c'est des fonctions qui mettent à jur les variablesd
  mutations: {
    setProduits(state, new_produits){
        state.produits = new_produits;
    }
  },

  // L'équivalent des methodes pour les composants
  // les actions appellent les mutations
  actions: {
    fetchProduits(context){
      return new Promise((resolve)  => {
        shop.getProducts(
          //pour appeler une mutation on appel commit
          (products) => {
            context.commit('setProduits', products)
            resolve();

          }
      );
      });
    }
  },

  // On regrouper tous les morceaux de stores pour en former un seul
  modules: {
  }
})
