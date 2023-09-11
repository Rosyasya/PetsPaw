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
  constructor(private votingService: VotingService, private imageService: ImageService, public favouriteService: FavouriteService) {
  }
  cat: any;
  voting: any;

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
    this.votingService.postVoting({
      "image_id": this.cat[0].id,
      "value": 1,
    })
      .subscribe((response: any) => {
        this.votingService.getVoting()
          .subscribe((response: any) => this.voting = response)
        this.imageService.getImage()
          .subscribe((response: any) => this.cat = response)
      });
  }

  favouriteHandle() {
    this.favouriteService.postFavourite({
      "image_id": this.cat[0].id,
    })
      .subscribe((response: any) => {
        this.votingService.getVoting()
          .subscribe((response: any) => this.voting = response)
        this.imageService.getImage()
          .subscribe((response: any) => this.cat = response)
        this.favouriteService.getFavourite()
          .subscribe((response: any) => console.log(response))
      });
  }

  dislikeHandle() {
    this.votingService.postVoting({
      "image_id": this.cat[0].id,
      "value": -1,
    })
      .subscribe((response: any) => {
        this.votingService.getVoting()
          .subscribe((response: any) => this.voting = response)
        this.imageService.getImage()
          .subscribe((response: any) => this.cat = response)
      });
  }

  ngOnInit(): void {
    this.votingService.getVoting()
      .subscribe((response: any) => this.voting = response);
    this.imageService.getImage()
      .subscribe((response: any) => this.cat = response);
  }

}
