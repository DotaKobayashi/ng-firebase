import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { LoginComponent } from './app/login/login.component';
import { AuthguardService } from './app/services/authguard.service';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { UploadComponent } from './app/upload/upload.component';

export const appRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthguardService]},
    { path: 'upload', component: UploadComponent, canActivate: [AuthguardService]},
    { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthguardService]},
    { path: '', redirectTo: '/gallery', pathMatch: 'full'},
    { path: 'login', component: LoginComponent}
];
