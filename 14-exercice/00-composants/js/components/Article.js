const Article = {
    template: `
        <button @click="uptadateTitle" >Mettre à jour</button>
    `,
    methods: {
        uptadateTitle(){
            this.$emit('uptadate-title', 'Bonjour')
        }
    }
}

export default Article;