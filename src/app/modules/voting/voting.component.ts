import {Component, OnInit} from '@angular/core';
import {CatDataService} from "../../application/api/cat-data.service";

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit{
  constructor(private service: CatDataService) {
  }
  data: any;
  img: any;

  searchImg(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.service.getData().subscribe( (response: any) => {
      this.data = response;
      console.log(this.data);
    });
  }

}
