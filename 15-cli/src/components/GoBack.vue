<template>
    <div>
        <p>Retour sur la page precedente</p>
        <button @click="backTopage">Retour</button>
        <button @click="backToHome">Retour Acueil</button>
    </div>
</template>

<script>
    export default {
        methods: {
            backTopage() {
                this.$router.go(-1);
            },
          
                backToHome() {
                    this.$router.push('/');
                }
            },
       
    }
</script>

<style scoped>

</style>