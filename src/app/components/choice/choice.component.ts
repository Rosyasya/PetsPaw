import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() background: string = '';
  isActivated: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  switchTab() {
    this.router.navigate(['/', this.title.toLowerCase()]);
  }

}
