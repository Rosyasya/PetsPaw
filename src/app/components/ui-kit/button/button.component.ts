import {Component, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title?: string;
  @Input() titleSize: string = '12px';
  @Input() icon: string = '';
  @Input() iconSize: string = '30px';
  @Input() iconColor: string = 'black';
  @Input() callback: any;
  @Input() isReversed: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() type?: string;
  @Input() class: string = '';
  @Input() padding: string = '15px';
  @Input() borderRadius: string = '';
  @Input() link?: string;
  @Input() background?: string;
  @Input() width?: string;
  @Input() height?: string;
}
