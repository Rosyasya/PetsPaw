import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{
  @Input() width: string = '100%';
  @Input() icon: string = '';
  @Input() iconSize: string = '30px';
  @Input() iconColor: string = 'black';
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() label: string = '';
  @Input() isReversed: boolean = false;
  @Input() buttonClass: string = '';
  @Input() buttonPadding: string = '';
  @Input() buttonBorderRadius: string = '';

  searchSubject = new Subject<string>;

  handleInput(event: any) {
    this.valueChange.emit(event.target.value);
    this.searchSubject.next(event.target.value.trim());
  }

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(2000),
        distinctUntilChanged())
      .subscribe((result: any) => {
        console.log(result)
      })
  }
}
