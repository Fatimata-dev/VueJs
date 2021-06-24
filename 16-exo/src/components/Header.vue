<template>
     <header>
            <h1>Super Site</h1>
            <the-navigation-header @envoyer-recherche="$emit('update-recherche', $event)">
            </the-navigation-header>
        </header>
</template>
<script>


import TheNavigationHeader from './TheNavigation.vue';
const Header = {
    components: {
        'the-navigation-header': TheNavigationHeader
    }
}
export default Header;
</script>
<style >
    header {
        display: flex;
        color: white;
        justify-content: space-between;
        align-items: center;
        background-color: #343a40;
        padding: 10px 15px;
    }
</style>




