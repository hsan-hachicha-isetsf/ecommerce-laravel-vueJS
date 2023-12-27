import Accueil from './components/accueil.vue';
import Viewarticles from "./components/articles/Viewarticles.vue"
import Addarticle from "./components/articles/Addarticle.vue"
export const routes = [
{
name: 'accueil',
path: '/',
component: Accueil
},
{
    name: 'viewarticles',
    path: '/listart',
    component: Viewarticles
    },
    {
        name: 'Addarticle',
        path: '/addarticle',
        component: Addarticle
        }

];