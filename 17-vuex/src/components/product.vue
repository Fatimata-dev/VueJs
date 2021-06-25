<template>
    <div>
        <h1>Liste des produits</h1>
        <img v-if="isLoading" src="https://thumbs.gfycat.com/AdorableMajesticJellyfish-size_restricted.gif" alt="">
        <ul>
            <li v-for="produit of produitsDispo" :key="produit.id">
                {{produit.title}} (il retse {{produit.inventory}})
                
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                //produits: []
                isLoading: false
            }
        },
        computed: {
            produits() {
                return this.$store.state.produits; 
            },
            produitsDispo(){
                return this.$store.getters.produitDisponible
            }
        },
        created() {
        //     shop.getProducts(
        //         (products) => this.produits = products
        //     );
         // pour appeler l'action on unitilse la methode dispatch
         this.isLoading = true
         this.$store.dispatch('fetchProduits').then( ()=>{
             this.isLoading = false;
         })
       
        }
    }
</script>

<style scoped>

</style>