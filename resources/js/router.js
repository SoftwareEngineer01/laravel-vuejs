// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
    },
    {
        path: '/inventario',
        name: 'inventario',
        component: () => import('./views/Inventory.vue'),
    },
    {
        path: '/servicios',
        name: 'servicios',
        component: () => import('./views/Service.vue'),
    },
    {
        path: '/agregar-servicio',
        name: 'agregar-servicio',
        component: () => import('./components/Service/AddService.vue'),
    },
    {
        path: '/editar-servicio/:id',
        name: 'editar-servicio',
        component: () => import('./components/Service/EditService.vue'),
    },
    {
        path: '/detalle-servicio/:id',
        name: 'detalle-servicio',
        component: () => import('./components/Service/DataServiceId.vue'),
    },
    {
        path: '/tipo-inventarios',
        name: 'tipo-inventarios',
        component: () => import('./views/InventoryType.vue'),
    },
    {
        path: '/agregar-inventario',
        name: 'agregar-inventario',
        component: () => import('./components/Inventory/AddInventory.vue'),
    },
    {
        path: '/editar-inventario/:id',
        name: 'editar-inventario',
        component: () => import('./components/Inventory/EditInventory.vue'),
    },
    {
        path: '/detalle-inventario/:id',
        name: 'detalle-inventario',
        component: () => import('./components/Inventory/DataInventoryId.vue'),
    },
    {
        path: '/entrada-inventario',
        name: 'entrada-inventario',
        component: () => import('./views/InventoryEntry.vue'),
    },
    {
        path: '/agregar-entradaInventario',
        name: 'agregar-entradaInventario',
        component: () => import('./components/InventoryEntry/AddInventoryEntry.vue'),
    },
    {
        path: '/proveedores',
        name: 'proveedores',
        component: () => import('./views/Supplier.vue'),
    },
    {
        path: '/verProveedor/:id',
        name: 'verProveedor',
        component: () => import('./components/Supplier/DataSupplierId.vue'),
    },
];

const router = new Router({
    routes: routes
});

export default router;
