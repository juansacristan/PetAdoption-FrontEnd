import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { CreditsComponent } from './pages/public/credits/credits.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/private/users/users.component';
import { RegisterPetComponent } from './pages/public/list-pets/register-pet/register-pet.component';
import { TypePetsComponent } from './pages/private/type-pets/type-pets.component';
import { ListPetsComponent } from './pages/public/list-pets/list-pets.component';
import { UserEditComponent } from './pages/private/users/user-edit/user-edit.component';
import { TypePetNewComponent } from './pages/private/type-pets/type-pet-new/type-pet-new.component';
import { ListOfEventsComponent } from './pages/private/events/list-of-events/list-of-events.component';
import { CreateEventComponent } from './pages/private/events/create-event/create-event.component';
import { EditEventComponent } from './pages/private/events/edit-event/edit-event.component';
import { EventsComponent } from './pages/public/events/events.component';
import { PetEditComponent } from './pages/public/list-pets/pet-edit/pet-edit.component';
import { PetEditPrivateComponent } from './pages/private/pets/pet-edit-private/pet-edit-private.component';
import { TypePetEditComponent } from './pages/private/type-pets/type-pet-edit/type-pet-edit.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'admin', component: DashboardComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: 'pets', component: ListPetsComponent},
    {path: "events", component: EventsComponent},
    {path: 'pet/new', component: RegisterPetComponent},
    {path: 'pet/edit', component: PetEditComponent},
    {path: 'admin/users', component: UsersComponent},
    {path: 'admin/pet/new', component: RegisterPetComponent},
    {path: 'admin/pet/edit', component: PetEditPrivateComponent},
    {path: 'admin/user/new', component: RegisterComponent},
    {path: 'admin/user/edit', component: UserEditComponent},
    {path: 'admin/pet/type', component: TypePetsComponent},
    {path: 'admin/pet/type/new', component: TypePetNewComponent},
    {path: 'admin/pet/type/edit', component: TypePetEditComponent},
    { path: "admin/events", component: ListOfEventsComponent},  
    { path: "admin/event/new", component: CreateEventComponent},
    { path: "admin/event/edit", component: EditEventComponent},
    { path: "admin/event/list", component: ListOfEventsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: '404', pathMatch: 'full'}
];
