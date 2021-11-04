import { createRouter, createWebHistory } from 'vue-router';

import Deities from '../views/Deities'
import Actions from '../views/Actions'

const routes = [
    {
        path: '/',
        redirect: {
            name: 'Deities'
        }
    },
    {
        path: '/deities',
        name: "Deities",
        component: Deities,
        props: true,
    },
    {
        path: '/actions',
        name: 'Actions',
        component: Actions,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;