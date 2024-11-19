import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),

    },

    {
        path: "",
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
    },

    {
        path: "",
        loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
    },

    {
        path: "",
        loadChildren: () => import('./writer/writer.module').then(m => m.WriterModule)
    },
];
