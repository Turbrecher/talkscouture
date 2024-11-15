import { Component, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ]
})
export class InputComponent {
  @Input() inputType: String = "text"
  @Input() inputValue: String = ""
  @Input() inputPlaceholder: String = "Insert text..."
  @Input() label: String = "This is an input"


  //CONTROL VALUE ACCESSORS ATTRIBUTES.
  input!: string
  onChange: any = () => { }
  onTouched: any = () => { }
  isDisabled!: boolean

  //CONTROL VALUE ACCESSORS METHODS.
  writeValue(input: string): void {
    this.input = input
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}
