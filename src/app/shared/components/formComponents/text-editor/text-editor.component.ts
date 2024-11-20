import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorComponent, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [NgxEditorModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.sass'
})
export class TextEditorComponent {

  editor !: Editor
  html: string = ""
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  onChange(html: string) {
    this.html = '';
  }


  ngOnInit() {
    this.editor = new Editor()
  }

  ngOnDestroy() {
    this.editor.destroy()
  }

}
