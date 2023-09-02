import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: Array<any> = [];
  @Input() label?: string;
  @Input() placeholder: string = 'test';
  open: boolean = false;

  selectOption(option: any) {

  }
}
