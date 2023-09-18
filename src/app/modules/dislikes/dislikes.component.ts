import {Component, OnInit} from '@angular/core';
import {VotingService} from "../../application/api/voting-data.service";

@Component({
  selector: 'app-dislikes',
  templateUrl: './dislikes.component.html',
  styleUrls: ['./dislikes.component.scss']
})
export class DislikesComponent implements OnInit {
  constructor(private votingService: VotingService) {}

  dislikes: Array<object> = [];
  cache: Array<object> = [];

  removeLike(id: any) {
    this.votingService.deleteVoting(id)
      .subscribe(() => {
        this.votingService.getVoting()
          .subscribe((response: any) => {
            response.forEach((data: any) => {
              if (data.value === -1) {
                this.cache.push(data)
              }
            })
            console.log(this.cache)
            this.dislikes = this.cache;
            this.cache = [];
          })
      })
  }

  ngOnInit(): void {
    this.votingService.getVoting()
      .subscribe((response: any) => {
        response.forEach((data: any) => {
          if (data.value === -1) {
            this.dislikes.push(data)
          }
        })
        console.log(this.dislikes)
      })
  }
}
