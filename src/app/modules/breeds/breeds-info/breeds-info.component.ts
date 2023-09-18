import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BreedService} from "../../../application/api/breed-data.service";

@Component({
  selector: 'app-breeds-info',
  templateUrl: './breeds-info.component.html',
  styleUrls: ['./breeds-info.component.scss']
})
export class BreedsInfoComponent implements OnInit {
  constructor(private breedService: BreedService, private activatedRoute: ActivatedRoute) {}

  breedInfo: any;

  breedId: string = '';

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.breedId = params['id'];
        this.breedService.getBreed()
          .subscribe((response: any) => {
            response.forEach((data: any) => {
              if (data.id === this.breedId) {
                this.breedInfo = data;
              }
            })
          })
      })
  }

}
