import {Component, OnInit} from '@angular/core';
import {BreedService} from "../../application/api/breed-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit{
  constructor(private breedService: BreedService, private route: Router) {}
  breeds: Array<any> = [];
  limitOption: Array<any> = [{name: 'Limit: 5', id: 0}, {name: 'Limit: 10', id: 1}, {name: 'Limit: 15', id: 2}, {name: 'Limit: 20', id: 3}];
  breedOption: Array<any> = []
  activeBreedOption: string = 'All breeds';

  onLimitChange(id: any) {
    this.breedService.getLimitedBreed(this.limitOption[id].name.split(' ')[1])
      .subscribe((response: any) => {
        response.forEach((data: any) => {
            if (data.name === this.activeBreedOption) {
              this.breeds = [];
              this.breeds.push(data);
            } else if (this.activeBreedOption === 'All breeds') {
              this.breeds = response;
            }
          }
        )
      })
  }

  onBreedChange(id: any) {
    this.breedService.getBreed()
      .subscribe((response) => {
        response.forEach((data: any) => {
          if (data.id === id) {
            this.breeds = [];
            this.breeds.push(data);
            this.activeBreedOption = data.name;
          }
        })
      })
  }

  onBreedChoose(id: any) {
    this.route.navigate(['/breeds', id]);
  }

  filterUpHandle() {
    this.breeds.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  filterDownHandle() {
    this.breeds.sort((a, b) => a.name > b.name ? -1 : 1);
  }

  ngOnInit(): void {
    this.breedService.getLimitedBreed(10)
      .subscribe((response: any) => {
        this.breeds = response
      })

    this.breedService.getBreed()
      .subscribe((response: any) => {
        response.forEach((data: any) => {
          this.breedOption.push({name: data.name, id: data.id})
        })
      })
  }
}
