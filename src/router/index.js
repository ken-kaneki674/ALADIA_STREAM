import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Bureautique from '../pages/Bureautique.vue'
import Graphisme from '../pages/Graphisme.vue'
import VenteProduits from '../pages/VenteProduits.vue'
import Restauration from '../pages/Restauration.vue'
import Cosmetique from '../pages/Cosmetique.vue'
import Vetements from '../pages/Vetements.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/services/bureautique',
        name: 'Bureautique',
        component: Bureautique
    },
    {
        path: '/services/graphisme',
        name: 'Graphisme',
        component: Graphisme
    },
    {
        path: '/services/vente-produits',
        name: 'VenteProduits',
        component: VenteProduits
    },
    {
        path: '/services/restauration',
        name: 'Restauration',
        component: Restauration
    },
    {
        path: '/services/cosmetique',
        name: 'Cosmetique',
        component: Cosmetique
    },
    {
        path: '/services/vetements',
        name: 'Vetements',
        component: Vetements
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
