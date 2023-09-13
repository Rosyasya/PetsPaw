import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { PreviewComponent } from './modules/preview/preview.component';
import { CardComponent } from './components/card/card.component';
import { VotingComponent } from './modules/voting/voting.component';
import { BreedsComponent } from './modules/breeds/breeds.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { BreedsInfoComponent } from './modules/breeds/breeds-info/breeds-info.component';
import { ButtonComponent } from './components/ui-kit/button/button.component';
import { SelectComponent } from './components/ui-kit/select/select.component';
import { GridComponent } from './components/ui-kit/grid/grid.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { SliderComponent } from './components/ui-kit/slider/slider.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BreedSearchComponent } from './modules/breed-search/breed-search.component';
import { FavouritesComponent } from './modules/favourites/favourites.component';
import { LikesComponent } from './modules/likes/likes.component';
import { DislikesComponent } from './modules/dislikes/dislikes.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: PreviewComponent},
      { path: 'voting', component: VotingComponent},
      { path: 'breeds', children: [
          { path: '', component: BreedsComponent},
          { path: ':id', component: BreedsInfoComponent},
        ]},
      { path: 'gallery', component: GalleryComponent},
      { path: 'search', component: BreedSearchComponent},
      { path: 'favourites', component: FavouritesComponent},
      { path: 'likes', component: LikesComponent},
      { path: 'dislikes', component: DislikesComponent},
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    CardComponent,
    VotingComponent,
    BreedsComponent,
    GalleryComponent,
    BreedsInfoComponent,
    ButtonComponent,
    SelectComponent,
    GridComponent,
    InputComponent,
    SliderComponent,
    BreedSearchComponent,
    FavouritesComponent,
    LikesComponent,
    DislikesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
