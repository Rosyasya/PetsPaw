import {Component, OnInit} from '@angular/core';
import {VotingService} from "../../application/api/voting-data.service";

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit{
  constructor(private service: VotingService) {
  }
  cat: any;
  voting: any;

  searchImg(event: any) {
    console.log(event);
  }

  getTime(voteTime: string) {
    const hours = new Date(voteTime).getHours();
    const minutes = new Date(voteTime).getMinutes();

    return hours + ':' + minutes;
  }

  likeHandle() {
    this.service.postData({
      "image_id": this.cat[0].id,
      "value": 1,
    });

    this.service.getData()
      .subscribe((response: any) => {
        this.cat = response[0];
        this.voting = response[1];
      })
  }

  favouriteHandle() {
    this.service.postData({
      "image_id": this.cat[0].id,
      "value": 0,
    });

    this.service.getData()
      .subscribe((response: any) => {
        this.cat = response[0];
        this.voting = response[1];
      })
  }

  dislikeHandle() {
    this.service.postData({
      "image_id": this.cat[0].id,
      "value": -1,
    });

    this.service.getData()
      .subscribe((response: any) => {
        this.cat = response[0];
        this.voting = response[1];
      })
  }

  ngOnInit(): void {
    this.service.getData()
      .subscribe((response: any) => {
        this.cat = response[0];
        this.voting = response[1];
      })
  }

}
