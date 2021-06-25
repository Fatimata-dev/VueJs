<template>
 
    <div>
        <v-nav></v-nav>
        <router-view :key="$route.path"></router-view>
        
    </div>
  
</template>

<script>
import Title from './components/Title.vue'
import Navigation from './router/navigation.vue'
let appComponent = {
  components:{
    'v-title': Title,
    'v-nav': Navigation
  }
}
export default appComponent;
</script>

<style>

</style>
