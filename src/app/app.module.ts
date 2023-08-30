import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { PreviewComponent } from './modules/preview/preview.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { VotingComponent } from './modules/voting/voting.component';
import { BreedsComponent } from './modules/breeds/breeds.component';
import { GalleryComponent } from './modules/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: PreviewComponent},
  { path: 'voting', component: VotingComponent},
  { path: 'breeds', component: BreedsComponent},
  { path: 'gallery', component: GalleryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ChoiceComponent,
    VotingComponent,
    BreedsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
