<template>
    <div>
        <h1>Hello Dounia</h1>
        <button @click="getUser">Recuperer les utilisateurs</button>
        <ul>
            <li v-for="utilisateur of utilisateurs" :key="utilisateur.id">
                {{ utilisateur.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                utilisateurs: []
            }
        },
        methods: {

            getUser() {
                const URL = 'https://jsonplaceholder.typicode.com/users';
                axios.get(URL).then(
                    (reponse)=>{console.log(reponse); 
                    this.utilisateurs = reponse.data;
                    }
                );
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>