import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type?: string;
  @Input() btnBootstrapClass?: string;
  @Input() otherCssClass?: string;
  @Input() text?: string;

  @Output() clickValue: EventEmitter<any> = new EventEmitter();

  click() {
    this.clickValue.emit(true);
  }
}
