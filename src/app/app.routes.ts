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
import { UserRegisterComponent } from './pages/private/users/user-register/user-register.component';
import { UserEditComponent } from './pages/private/users/user-edit/user-edit.component';
import { TypePetNewComponent } from './pages/private/type-pets/type-pet-new/type-pet-new.component';
import { ListOfEventsComponent } from './pages/private/events/list-of-events/list-of-events.component';
import { CreateEventComponent } from './pages/private/events/create-event/create-event.component';
import { EditEventComponent } from './pages/private/events/edit-event/edit-event.component';
import { EventsComponent } from './pages/public/events/events.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'admin', component: DashboardComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: 'pets', component: ListPetsComponent},
    { path: "events", component: EventsComponent},
    {path: 'admin/users', component: UsersComponent},
    {path: 'admin/user/new', component: UserRegisterComponent},
    {path: 'admin/user/edit', component: UserEditComponent},
    {path: 'admin/pet/edit', component: EditPetsComponent},
    {path: 'admin/pet/new', component: RegisterPetComponent},
    {path: 'admin/pet/type', component: TypePetsComponent},
    {path: 'admin/pet/type/new', component: TypePetNewComponent},
    { path: "admin/events", component: ListOfEventsComponent},  
    { path: "admin/event/new", component: CreateEventComponent},
    { path: "admin/event/edit", component: EditEventComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: '404', pathMatch: 'full'}
];
