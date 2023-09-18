import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor(private router: Router) {}

  @Input() width: string = '100%';
  @Input() icon: string = '';
  @Input() iconSize: string = '30px';
  @Input() iconColor: string = 'black';
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() isReversed: boolean = false;
  @Input() buttonClass: string = '';
  @Input() buttonPadding: string = '';
  @Input() buttonBorderRadius: string = '';

  handleInput(event: any) {
    this.router.navigate(['/search', event.target.value.trim()]);
  }
}
