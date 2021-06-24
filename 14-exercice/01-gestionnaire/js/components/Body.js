const Body = {
    props: ['rechercher'],
    template: `
        <main>
            <table v-if="films.length" class="table table-striped">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Année de sortie</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(film,index) of filmFiltrer">
                    <td>{{index + 1}}</td>
                    <td>{{ film.titre }}</td>
                    <td>{{ film.description }}</td>
                    <td>{{film.annee}}</td>
                    <td>
                        <img @click="supprimerFilm(index)" src="./ressources/delete.svg" width="32" alt="">
                    </td>
                </tr>
                </tbody>
            </table>
            <p v-else>Aucun Films disponibles</p>

            <form v-on:submit="ajouterFilm">
                <div class="form-group">
                <label for="title">Titre</label>
                <input type="text" class="form-control" id="title" name="title" placeholder="ex: Avatar">
                </div>
                <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" name="description" placeholder="ex: Lorem Ipsum">
                </div>
                <div class="form-group">
                    <label for="year">Année de Sortie</label>
                    <input type="number" class="form-control" id="year">
                </div>
                <button type="submit" class="btn btn-primary">Ajouter</button>
            </form>
        </main>
    `,
    data() {
        return {
            films: [
                { titre: 'Arsène Lupin', description: 'Lorem', annee: 2004 },
                { titre: 'Le prestige', description: 'Lorem Ipsum', annee: 2006 },
                { titre: 'Insaisissable', description: 'Dolor ipsum', annee: 2013 },
                { titre: 'Jeux interdits', description: 'Leviosa Ipsun', annee: 1952 }
            ]
        }
    },
    methods: {
        ajouterFilm(event) {
            const titre = event.target.title.value;
            const description = event.target.description.value;
            const annee = event.target.year.value;

            // console.log(titre, description, annee);
            const film = {
                titre,
                description,
                annee
            }
            this.films.push(film);
            event.preventDefault();
        },
        supprimerFilm(index) {
            // splice(index, nombreASupprimer);
            this.films.splice(index, 1);
        }
    },
    computed: {
        filmFiltrer() {
            const nomDuFilm = this.rechercher.toLowerCase();
            const filtre = this.films.filter( (film) => {
                const title = film.titre.toLowerCase();
                return title.includes(nomDuFilm);
            } );
            return filtre;
        }
    }
}

export default Body;