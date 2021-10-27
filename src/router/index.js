import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/Home";
import Supplier from "../components/SuppliersList";
import NotFound from  "../components/404";
import Map from  "../components/OnMapClick";
import Reseller from "../components/ResellersList";
import Customer from "@/components/CustomersList";
import Order from "@/components/OrdersList";

const routes = [
    {
        path: '/home',
        component: Home,
        meta: {
            title: 'Accueil'
        }
    },{
        path: '/',
        redirect : '/home',
        meta: {
            title: 'Accueil'
        }
    },{
        path: '/SuppliersList',
        component: Supplier,Reseller,
        meta: {
            title: 'Liste Fournisseurs'
        }
    },{
        path: '/ResellersList',
        component: Reseller,
        meta: {
            title: 'Liste des Revendeurs'
        }
    },{
        path: '/CustomersList',
        component: Customer,
        meta: {
            title: 'Liste des clients'
        }
    },{
        path: '/OrdersList',
        component: Order,
        meta: {
            title: 'Liste des Commandes'
        }
    },
    {
        path: '/OnMapClick',
        component: Map,
        meta: {
            title: 'Map'
        }
    },{
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found'
        }
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

router.afterEach((from) => {

    document.title = from.meta.title;
})

export default router
