import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BreedService} from "../../application/api/breed-data.service";

@Component({
  selector: 'app-breed-search',
  templateUrl: './breed-search.component.html',
  styleUrls: ['./breed-search.component.scss']
})
export class BreedSearchComponent implements OnInit{
  constructor(private breedService: BreedService, private activatedRoute: ActivatedRoute) {}

  breed: any = [];

  name: string = '';

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.name = params['id'];

        this.breedService.getBreed()
          .subscribe((response: any) => {
            this.breed = [];
            response.forEach((data: any) => {
              if (data.name.toLowerCase() === this.name.toLowerCase()) {
                this.breed.push(data);
              }
            })
          })
      })
  }

}
