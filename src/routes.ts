import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { LoginComponent } from './app/login/login.component';
import { AuthguardService } from './app/services/authguard.service';

export const appRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthguardService]},
    { path: '', redirectTo: '/gallery', pathMatch: 'full'},
    { path: 'login', component: LoginComponent}
];
