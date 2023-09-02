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
import { GridItemComponent } from './components/ui-kit/grid/grid-item/grid-item.component';
import { InputComponent } from './components/ui-kit/input/input.component';

const routes: Routes = [
  { path: '', component: PreviewComponent},
  { path: 'voting', component: VotingComponent},
  { path: 'breeds', component: BreedsComponent, children: [
      { path: 'info', component: BreedsInfoComponent},
    ]},
  { path: 'gallery', component: GalleryComponent},
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
    GridItemComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
