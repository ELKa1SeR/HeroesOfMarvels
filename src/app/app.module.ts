import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesIconComponent } from './components/favorites-icon/favorites-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { MarvelLogoComponent } from './components/marvel-logo/marvel-logo.component';
import { FavoritesCountComponent } from './components/favorites-count/favorites-count';
import { ResultComponentComponent } from './components/result-character/result-component/result-component.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HeroComponent } from './pages/hero/hero/hero.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ComicModelComponent } from "./models/comic.model/comic.model.component";
import {  HttpClientModule } from '@angular/common/http';
import { MarvelApiService } from './services/marvel-api.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterModelComponent } from './models/character.model/character.model.component';

@NgModule({
  declarations: [
      AppComponent,
      FavoritesIconComponent,
      SearchBarComponent,
      MarvelLogoComponent,
      FavoritesCountComponent,
      ResultComponentComponent,
      HomeComponent,
      HeroComponent,
      CabeceraComponent,
      ComicModelComponent,
      CharacterCardComponent,
      CharacterModelComponent,

  ],
  providers: [MarvelApiService],
  bootstrap: [AppComponent],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,



  ],
  exports:[CharacterCardComponent],

})
export class AppModule { }

