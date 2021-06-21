import { Employe } from './index.js';

Vue.createApp({
    data: function() {
        const variables = {
            personnes: Employe.makeTenEmploye()
        }
        return variables;
    }
}).mount("#app");