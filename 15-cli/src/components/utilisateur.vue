<template>
    <div>
        <h1>Hello Dounia</h1>
        <button @click="getUser">Recuperer les utilisateurs</button>
        <ul>
            <li v-for="utilisateur of utilisateurs" :key="utilisateur.id">
                {{ utilisateur.name }}
                {{ utilisateur.username }}
            </li>
        </ul>
        <form @submit.prevent="addArticle">
            <!-- <label for="identifiant">Id</label>
            <input type="number" name="identifiant"  id="identifiant"> -->
            <label for="titre">Titre</label>
            <input type="text" name="titre"  id="titre">

            <label for="msg">Message</label>
            <input type="text" name="msg"  id="msg">
            <input type="submit" value="Valider">
            <p v-if="newArticle">L'article n°{{ newArticle.id }} à bien été créer</p>
            
        </form>
        <input type="text" v-model="nomDuFilm" placeholder="ex:Avatar">
        <button @click="getMovie">Recuperer les Films</button>
        <ul>
            <li v-for="film of films" :key="film.id">
                {{ film.title }}  {{ film.release_date }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                utilisateurs: [],
                films: [],
                newArticle: null,
                nomDuFilm: ''
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
                
            },
           async addArticle(event){
                const titre = event.target.titre.value;
                const message = event.target.msg.value;
                const userId = 1;

                const article = {
                    userId,
                    title: titre,
                    body: message
                }
                // Dans une fonction asyn, on peut utiliser await pour recuperer la reponse d'une promesse
                const reponse = await axios.post('https://jsonplaceholder.typicode.com/posts',
                article);
                
                if (reponse.status == 201) {
                    this.newArticle = reponse.data;
                }
                console.log(reponse);
            },
            async getMovie(){
                const URL = "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query="
                const reponse = await axios.get(URL+this.nomDuFilm)
                console.log(reponse.data);
                this.films = reponse.data.results;
            }
        }, 
    }
</script>

<style scoped>

</style>