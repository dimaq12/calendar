import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { RegisterComponent } from './components/register/index';
import { AuthGuard } from './auth/index';

const appRoutes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);