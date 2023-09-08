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

  likeHandle() {
    this.service.postData({
      "image_id": this.cat[0].id,
      "sub_id": 1,
      "value": 1,
    });

    this.service.getImage().subscribe( (response: any) => {
      this.cat = response;
      console.log(this.cat);
    });

    this.service.getVoting().subscribe( (response: any) => {
      this.voting = response;
      console.log('voting after like =>', this.voting);
    });
  }

  favouriteHandle() {
    this.service.getImage().subscribe( (response: any) => {
      this.cat = response;
      console.log(this.cat);
    });
  }

  dislikeHandle() {
    this.service.getImage().subscribe( (response: any) => {
      this.cat = response;
      console.log(this.cat);
    });
  }

  ngOnInit(): void {
    this.service.getImage().subscribe( (response: any) => {
      this.cat = response;
      console.log(this.cat);
    });

    this.service.getVoting().subscribe( (response: any) => {
      this.voting = response;
      console.log(this.voting);
    });
  }

}
