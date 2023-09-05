import {Component, OnInit} from '@angular/core';
import {CatDataService} from "../../application/api/cat-data.service";

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent extends CatDataService implements OnInit{
  data: any;

  ngOnInit(): void {
    this.getData().subscribe( (response: any) => {
      this.data = response;
    });

    console.log(this.data);
  }

}
