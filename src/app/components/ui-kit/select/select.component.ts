import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: Array<any> = [{name: 'asdasd'}, {name: 'test2'}];
  @Input() label?: string;
  @Input() placeholder: string = 'test';
  @Input() value: string = 'test';
  @Output() valueChange = new EventEmitter();
  open: boolean = false;

  selectOption(option: any) {
    this.value = option.name;
    this.valueChange.emit(option.id);
    this.open = !this.open;
  }
}
