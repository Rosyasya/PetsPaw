import {Component, OnInit} from '@angular/core';
import {VotingService} from "../../application/api/voting-data.service";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit{
  constructor(private votingService: VotingService) {}

  likes: Array<object> = [];

  removeLike(id: any) {
    this.votingService.deleteVoting(id)
      .subscribe((response: any) => {
        console.log(response)
        this.votingService.getVoting()
          .subscribe((response: any) => {
            response.forEach((data: any) => {
              if (data.value === 1) {
                this.likes.push(data)
              }
            })
          })
      })
  }

  ngOnInit(): void {
    this.votingService.getVoting()
      .subscribe((response: any) => {
        response.forEach((data: any) => {
          if (data.value === 1) {
            this.likes.push(data)
          }
        })
        console.log(this.likes)
      })
  }

}
