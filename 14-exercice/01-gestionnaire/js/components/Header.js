import TheNavigationHeader from './TheNavigation.js';

const Header = {
    template: `
        <header>
            <h1>Super Site</h1>
            <the-navigation-header @envoyer-recherche="$emit('update-recherche', $event)">
            </the-navigation-header>
        </header>
    `,
    // methods: {
    //     update(event) {
    //         this.$emit('update-recherche', $event)
    //     }
    // },
    components: {
        'the-navigation-header': TheNavigationHeader
    }
}

export default Header;