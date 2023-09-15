import {Component, OnInit} from '@angular/core';
import {FavouriteService} from "../../application/api/favourite-data.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit{
  constructor(private favouriteService: FavouriteService) {}

  favourite: Array<object> = [];

  removeLike(id: any) {
    this.favouriteService.deleteFavourite(id)
      .subscribe(() => {
        this.favouriteService.getFavourite()
          .subscribe((response: any) => {
            this.favourite = response;
          })
      })
  }

  ngOnInit(): void {
    this.favouriteService.getFavourite()
      .subscribe((response: any) => {
        this.favourite = response;
        console.log(this.favourite)
      })
  }
}
