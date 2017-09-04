import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

import { UploadService } from './services/upload.service';
import { ImageService } from './services/image.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthguardService } from './services/authguard.service';

import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    LoginComponent,
    ImageDetailComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthenticationService,
    AuthguardService,
    ImageService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
