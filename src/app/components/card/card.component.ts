import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() background: string = '';
  isActivated: boolean = false;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
  }

  switchTab() {
    this.route.navigate(['/', this.title.toLowerCase()]);


  }

}
