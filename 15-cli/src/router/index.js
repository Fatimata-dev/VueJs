import { createRouter, createWebHistory} from 'vue-router';
import Title from '@/components/Title.vue';
import welcome from '@/components/welcome.vue';
import params from '@/components/params.vue';
import GoBack from '@/components/GoBack.vue';
import notFound from '@/components/notFound.vue';
import admin from '@/components/admin.vue';
import login from '@/components/login.vue';
import Utilisateur from '@/components/utilisateur.vue';

const routes = [
    { path: '/', component: Title},
    { path: '/welcome', component:welcome},
    { path: '/param/:id', component:params},
    { path: '/back', component:GoBack},
        { path: '/admin', component:admin , meta:{
                    authRequired: true
        }
   },
    { path: '/login', component:login},
    { path: '/users', component: Utilisateur},
    { path: '/:pathMatch(.*)*', component:notFound}
];
const router = createRouter({
        routes, 
        history: createWebHistory()
});
// beforeEach avant chaque navigation to= verd from = d'ou next =  suivant
router.beforeEach( (to, from, next)=>{
    if (to.meta.authRequired) {
      const email =   localStorage.getItem('email');
        if(email){
            next();
        }else{
            next('/login');
        }
    }else{
        next()
    }
});
export default router;