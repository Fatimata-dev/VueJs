<template>
    <div>
        <form @submit.prevent="login" >
            <label for="email">Identifiant</label>
            <input type="email" value="votre email" id="email" name="email">
            <label for="mdp">Mot de passe</label>
            <input type="password" value="votre mot de passe" id="mdp" name="mdp">
            <input type="submit" name="" id="" value="Se connecter">
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            login(event) {
                const email = event.target.email.value;
                const mdp = event.target.mdp.value;
                if(email == "admin@exemple.fr" && mdp == "root" ){
                    localStorage.setItem('email', email);
                    this.$router.push('/admin');
                }
            }
        },
        
    }
</script>

<style scoped>

</style>