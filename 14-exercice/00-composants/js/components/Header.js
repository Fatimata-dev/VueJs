import TheNavigationHeader from './TheNavigation.js';

const Header = {
    template: `
        <header>
            <h1>Super Site</h1>
            <img width="32" src="https://image.flaticon.com/icons/png/512/4561/4561119.png" alt=""/>
            <the-navigation-header></the-navigation-header>
        </header>
    `,
    components: {
        'the-navigation-header': TheNavigationHeader
    }
}

export default Header;