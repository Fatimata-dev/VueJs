import Article from './Article.js';

const Body = {
    template: `
        <main>
            <h2>{{ titre }}</h2>
            <v-article @uptadate-title="titre = $event"></v-article>
        </main>
    `,
    data() {
        return {
            titre: 'Good morning'
        }
    },
    
    components: {
        'v-article': Article
    }
}

export default Body;