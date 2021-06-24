<template>
  <!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercice</title>
        
    </head>
    <body>
        <div id="app">
            <the-header @update-recherche="updateRecherche"></the-header>
            <the-body :rechercher="recherche"></the-body>
        </div>
    </body>
</html>

</template>

<script>

    import TheHeader from './components/Header.vue';
    import TheBody from './components/Body.vue';


    const App =  {
        components: {
            // 'the-header': TheHeader,
            // 'the-body': TheBody
            TheHeader,
            TheBody
        },
        data() {
            return {
                recherche: ''
            }
        },
        methods:{
            updateRecherche(event) {
                console.log("Recherche: " + event);
                this.recherche = event;
            }
        }
    }
export default App ;
</script>

<style>
/* vbase pour recuperer les la structure de base */
</style>
