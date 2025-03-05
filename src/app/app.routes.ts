import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { CreditsComponent } from './pages/public/credits/credits.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/private/users/users.component';
import { RegisterPetComponent } from './pages/public/register-pet/register-pet.component';
import { EditPetsComponent } from './pages/private/edit.pets/edit.pets.component';
import { TypePetsComponent } from './pages/private/type-pets/type-pets.component';
import { ListPetsComponent } from './pages/public/list-pets/list-pets.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'admin', component: DashboardComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: 'pets', component: ListPetsComponent},
    {path: 'admin/users', component: UsersComponent},
    {path: 'admin/pet/edit', component: EditPetsComponent},
    {path: 'admin/pet/new', component: RegisterPetComponent},
    {path: 'admin/pet/type', component: TypePetsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: '404', pathMatch: 'full'}
];
