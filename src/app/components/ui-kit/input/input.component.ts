import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
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
}
