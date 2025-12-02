import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth/home', pathMatch: 'full' },
        {
          path: 'auth',
          loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES),
        },
        {
          path: 'papeleria',
          loadChildren: () => import('./pages/dashboard/papeleria.routes').then(m => m.PAPELERIA_ROUTES),
        },

    { path: '**', component: NotFoundComponent } // Redirige a Home si la ruta no existe
];
