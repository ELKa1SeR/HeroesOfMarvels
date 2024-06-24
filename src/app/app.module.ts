import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesIconComponent } from './components/favorites-icon/favorites-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { MarvelLogoComponent } from './components/marvel-logo/marvel-logo.component';
import { FavoritesCountComponent } from './components/favorites-count/favorites-count';
import { ResultComponentComponent } from './components/result-character/result-component/result-component.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HeroComponent } from './pages/hero/hero/hero.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesIconComponent,
    SearchBarComponent,
    CharacterCardComponent,
    MarvelLogoComponent,
    FavoritesCountComponent,
    ResultComponentComponent,
    HomeComponent,
    HeroComponent,
    CabeceraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
