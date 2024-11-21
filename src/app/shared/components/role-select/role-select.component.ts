import { Component, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { SectionSelectComponent } from '../formComponents/section-select/section-select.component';

@Component({
  selector: 'app-role-select',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './role-select.component.html',
  styleUrl: './role-select.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RoleSelectComponent,
      multi: true,
    },
  ]
})
export class RoleSelectComponent {

  @Input() role1: string = "role1"
  @Input() role2: string = "role2"
  @Input() role1Name: string = "role1Name"
  @Input() role2Name: string = "role2Name"
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
