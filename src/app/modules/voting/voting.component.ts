import {Component, OnInit} from '@angular/core';
import {VotingService} from "../../application/api/voting-data.service";
import {ImageService} from "../../application/api/image-data.service";
import {FavouriteService} from "../../application/api/favourite-data.service";

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit{
  constructor(private votingService: VotingService, private imageService: ImageService, private favouriteService: FavouriteService) {}

  isDisabled: boolean = false;
  cat: any;

  history = new History([], []);

  searchImg(event: any) {
    console.log(event);
  }

  getTime(voteTime: string) {
    const date = new Date(voteTime);

    return date.getHours() + ':' + date.getMinutes();
  }

  getOption(voteValue:number ) {
    switch (voteValue) {
      case 1: return `was added to Likes`
        break;
      case 0: return `was added to Favourite`
        break;
      case -1: return `was added to Dislikes`
        break;
      default: return ''
        break;
    }
  }

  getIcon(voteValue: number) {
    switch (voteValue) {
      case 1: return 'icon-like'
        break;
      case 0: return 'icon-favourite'
        break;
      case -1: return 'icon-dislike'
        break;
      default: return ''
        break;
    }
  }

  likeHandle() {
    this.isDisabled = true;
    this.votingService.postVoting({
      "image_id": this.cat[0].id,
      "value": 1,
    })
      .subscribe(() => {
        this.votingService.getLimitedVoting()
          .subscribe((response: any) => this.history.action = response)
        this.imageService.getImage()
          .subscribe((response: any) => {
            this.cat = response;
            this.isDisabled = false;
          })
      });
  }

  favouriteHandle() {
    this.isDisabled = true;
    this.favouriteService.postFavourite({
      "image_id": this.cat[0].id,
    })
      .subscribe(() => {
        this.favouriteService.getFavourite()
          .subscribe((response: any) => this.history.favourites = response);
        this.imageService.getImage()
          .subscribe((response: any) => {
            this.cat = response;
            this.isDisabled = false;
          })
      });
  }

  dislikeHandle() {
    this.isDisabled = true;
    this.votingService.postVoting({
      "image_id": this.cat[0].id,
      "value": -1,
    })
      .subscribe(() => {
        this.votingService.getLimitedVoting()
          .subscribe((response: any) => this.history.action = response)
        this.imageService.getImage()
          .subscribe((response: any) => {
            this.cat = response;
            this.isDisabled = false;
          })
      });
  }

  ngOnInit(): void {
    this.favouriteService.getFavourite()
      .subscribe((response: any) => this.history.favourites = response);
    this.votingService.getLimitedVoting()
      .subscribe((response: any) => this.history.action = response);
    this.imageService.getImage()
      .subscribe((response: any) => this.cat = response);
  }

}

export class History {
  constructor(public action: any = [], public favourites: any = []) {}

  get list() {
    return [...this.action, ...this.favourites].sort((a, b) => a.created_at > b.created_at ? -1 : 1);
  }
}
