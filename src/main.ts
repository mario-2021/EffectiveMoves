import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { environment } from './environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';

import { HomeComponent } from './app/home/home.component';
import { DetailsComponent } from './app/details/details.component';
import { MoviesComponent } from './app/movies/movies.component';
import { SeriesComponent } from './app/series/series.component';
import { TvShowComponent } from './app/tv-show/tv-show.component';
import { AboutComponent } from './app/about/about.component';
import { BlogComponent } from './app/blog/blog.component';
import { ContactComponent } from './app/contact/contact.component';
import { SearchComponent } from './app/search/search.component';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'tvShow', component: TvShowComponent },
  { path: 'aboutUS', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
}).catch((err) => console.error(err));
