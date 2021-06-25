<template>
    <div>
        <h1>Page d'administration</h1>
        <p>Vous devez etre connecté pour voir cette page</p>
        <button @click="logOut">Deconnexion</button>
    </div>
</template>

<script>
    export default {
        methods: {
            logOut() {
                localStorage.removeItem('email');
                this.$router.push('/login');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>