import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: Array<any> = [{name: 'asdasd', id: 1}, {name: 'test2', id: 2}];
  @Input() iconColor: string = 'black';
  @Input() background: string = '#F8F8F7';
  @Input() width: string = '100%';
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  open: boolean = false;

  selectOption(option: any) {
    this.value = option.name;
    this.placeholder = '';
    this.valueChange.emit(option.name);
    this.open = !this.open;
  }
}
