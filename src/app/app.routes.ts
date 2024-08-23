import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
];
