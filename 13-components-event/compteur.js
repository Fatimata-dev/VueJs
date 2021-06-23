const compteurComponent = {
    template: ` 
        <h2>Compteur Enfant {{ compteur}} </h2>
        <button @click="comptIncrement">Increment</button>
    `,
    props: ['parentcompteur'],
    data: function(){
        return {
            compteur: this.parentcompteur
        }
        
    },
    methods: {
        comptIncrement(){
            this.compteur++;

            // $emit emet un événement vers le composant parent
            // elle prend 2 paramettre : 1 le nom de l'évément, 2 la valeur
            this.$emit('my-incrementer',  this.compteur);
        }
    }
}

export default compteurComponent;