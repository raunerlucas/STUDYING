import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() img!: any;

 @Output() onClick:EventEmitter<String> = new EventEmitter()
}
