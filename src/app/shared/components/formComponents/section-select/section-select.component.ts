import { Component, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-section-select',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './section-select.component.html',
  styleUrl: './section-select.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SectionSelectComponent,
      multi: true,
    },
  ]
})
export class SectionSelectComponent {

  @Input() section1: string = "section1"
  @Input() section2: string = "section2"
  @Input() section3: string = "section3"
  @Input() section1Name: string = "section1Name"
  @Input() section2Name: string = "section2Name"
  @Input() section3Name: string = "section3Name"
  @Input() label: string = "Label"


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
