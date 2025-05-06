import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { CreditsComponent } from './pages/public/credits/credits.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/private/users/users.component';
import { RegisterPetPublicComponent } from './pages/public/list-pets/register-pet/register-pet.component';
import { RegisterPetComponent } from './pages/private/pets/register-pet/register-pet.component';
import { TypePetsComponent } from './pages/private/type-pets/type-pets.component';
import { ListPetsComponent } from './pages/public/list-pets/list-pets.component';
import { UserEditComponent } from './pages/private/users/user-edit/user-edit.component';
import { TypePetNewComponent } from './pages/private/type-pets/type-pet-new/type-pet-new.component';
import { ListOfEventsComponent } from './pages/private/events/list-of-events/list-of-events.component';
import { CreateEventComponent } from './pages/private/events/create-event/create-event.component';
import { EditEventComponent } from './pages/private/events/edit-event/edit-event.component';
import { PetEditPrivateComponent } from './pages/private/pets/pet-edit-private/pet-edit-private.component';
import { TypePetEditComponent } from './pages/private/type-pets/type-pet-edit/type-pet-edit.component';
import { PetsComponent } from './pages/private/pets/pets.component';
import { NosotrosComponent } from './pages/public/nosotros/nosotros.component';
import { authGuard } from './guards/auth.guard';
import { noauthGuard } from './guards/no-auth.guard';
import { EventsComponent } from './pages/public/events/events.component';
import { ContactComponent } from './pages/public/contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent, canActivate:[noauthGuard]},
    {path: 'register', component: RegisterComponent, canActivate:[noauthGuard]},
    {path: 'credits', component: CreditsComponent},
    {path: 'admin', component: DashboardComponent, canActivate: [authGuard]},
    {path: 'about-us', component: NosotrosComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: 'list-pets', component: ListPetsComponent},
    {path: "events", component: EventsComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'pet/new', component: RegisterPetPublicComponent},
    {path: 'admin/users', component: UsersComponent, canActivate: [authGuard]},
    {path: 'admin/pets', component: PetsComponent, canActivate: [authGuard]},
    {path: 'admin/events', component: ListOfEventsComponent, canActivate: [authGuard]}, 
    {path: 'admin/pet/new', component: RegisterPetComponent, canActivate: [authGuard]},
    {path: 'admin/pet/edit/:id', component: PetEditPrivateComponent, canActivate: [authGuard]},
    {path: 'admin/user/new', component: RegisterComponent, canActivate: [authGuard]},
    {path: 'admin/user/edit', component: UserEditComponent, canActivate: [authGuard]},
    {path: 'admin/pet/type', component: TypePetsComponent, canActivate: [authGuard]},
    {path: 'admin/pet/type/new', component: TypePetNewComponent, canActivate: [authGuard]},
    {path: 'admin/pet/type/edit', component: TypePetEditComponent, canActivate: [authGuard]}, 
    {path: 'admin/event/new', component: CreateEventComponent, canActivate: [authGuard]},
    {path: 'admin/event/edit/:id', component: EditEventComponent, canActivate: [authGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: '404', pathMatch: 'full'}
];
