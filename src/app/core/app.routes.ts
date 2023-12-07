import { Routes } from '@angular/router';

//une variable qui vas stocker le nom de l'application
const appName = 'LeMarche Portail Admin';

export const routes: Routes = [
    {
        path: 'login',
        title: `Login - ${appName}`,
        loadComponent: () => import('../components/auth/login.component'),

    },
    {
        path: 'shop-register',
        title: `Inscription - ${appName}`,
        loadComponent: () => import('../components/auth/shop-register.component'),

    },
    {
        path: '',
        title: `Dashboard - ${appName}`,
        loadComponent: () => import('../components/dashboard/dashboard.component'),
        //les routes enfant de dashboard
        children:[
            {
                path: 'ge-stock',
                title: `Gestion de stock - ${appName}`,
                loadComponent: () => import('../components/dashboard/ge-stock/ge-stock.component'),
                children:[
                    {
                        path: 'sale',
                        title: `Vente - ${appName}`,
                        loadComponent: () => import('../components/dashboard/ge-stock/sale/sale.component'),
                    },
                    {
                        path: 'purchase',
                        title: `Approvissionnement - ${appName}`,
                        loadComponent: () => import('../components/dashboard/ge-stock/purchase/purchase.component'),
                    },
                    {
                        path: 'stock',
                        title: `Stockage - ${appName}`,
                        loadComponent: () => import('../components/dashboard/ge-stock/stock/stock.component'),
                    },
                    {
                        path: 'archive',
                        title: `Approvissionnement - ${appName}`,
                        loadComponent: () => import('../components/dashboard/ge-stock/archive/archive.component'),
                    },
                    {path:'', redirectTo:'sale', pathMatch:'full'}
                ]
        
            },
            {
                path: 'finance',
                title: `Finance - ${appName}`,
                loadComponent: () => import('../components/dashboard/finance/finance.component'),
        
            },
            {
                path: 'setting',
                title: `Parametre - ${appName}`,
                loadComponent: () => import('../components/dashboard/setting/setting.component'),
        
            },
            {path:'', redirectTo:'ge-stock', pathMatch:'full'}
        ]
    },
    //route generique
    {path:'**', redirectTo:''}
];

