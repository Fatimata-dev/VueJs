<template>
    <div>
        <h1>Id de l'utilisateur {{ id }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>