import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() data: any;
  @Output() callback = new EventEmitter();

  onClick(id: any) {
    this.callback.emit(id);
  }
}
