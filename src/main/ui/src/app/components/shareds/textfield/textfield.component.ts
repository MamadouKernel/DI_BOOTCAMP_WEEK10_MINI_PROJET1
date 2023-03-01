import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements ControlValueAccessor {
  @Input() type?: string;
  @Input() name?: string;
  @Input() id?: string;
  @Input() placeholder?: string;

  @Output() public textValue: EventEmitter<string> = new EventEmitter();

  keyupHandler(input: string) {
    this.textValue.emit(input);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
