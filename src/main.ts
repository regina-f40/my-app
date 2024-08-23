import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { AboutComponent } from './app/about/about.component';
import { HomeComponent } from './app/home/home.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ContactComponent } from './app/contact/contact.component';
import { StartPageComponent } from './app/start-page/start-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const routes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent }
]


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes), provideAnimationsAsync()
  ]
})
  .catch((err) => console.error(err));

