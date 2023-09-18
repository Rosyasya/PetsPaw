import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  url: any;

  @Input() isOpen: boolean = true;
  @Output() openChange = new EventEmitter();

  inputChangeHandle(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.url = reader.result
    }
  }

  @HostListener('drop', ['$event']) onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.url = reader.result
    }
  }

}
