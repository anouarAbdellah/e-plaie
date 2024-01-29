import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    {
        path: 'medicines',
        loadChildren: () => import('src/app/pages/medicines/medicines.module').then(m => m.MedicinesModule)
    },
    {
        path: 'cabinets',
        loadChildren: () => import('src/app/pages/cabinets/cabinets.module').then(m => m.CabinetsModule)
    },
    {
        path: 'antecedents',
        loadChildren: () => import('src/app/pages/antecedents/antecedents.module').then(m => m.AntecedentsModule)
    },
    {
        path: 'motifs',
        loadChildren: () => import('src/app/pages/motifs/motifs.module').then(m => m.MotifsModule)
    },
    {
        path: 'bilans',
        loadChildren: () => import('src/app/pages/bilans/bilans.module').then(m => m.BilansModule)
    },
    {
        path: 'ptis',
        loadChildren: () => import('src/app/pages/ptis/ptis.module').then(m => m.PtisModule)
    },
    {
        path: 'canvases',
        loadChildren: () => import('src/app/pages/canvases/canvases.module').then(m => m.CanvasesModule)
    },
    {
        path: 'custom-modules',
        loadChildren: () => import('src/app/pages/custom-modules/custom-modules.module').then(m => m.CustomModulesModule)
    },
    {
        path: 'patients',
        loadChildren: () => import('src/app/pages/patients/patients.module').then(m => m.PatientsModule)
    },


    // to delete later
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
