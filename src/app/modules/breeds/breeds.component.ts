import { Component } from '@angular/core';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent {
  breeds: Array<string> = ['A1', 'B2', 'C3', 'D4', 'E5'];

  test1() {
    console.log('test1');
    return this.breeds.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? -1 : 1);
  }

  test2() {
    console.log('test2');
    return this.breeds.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
  }
}
