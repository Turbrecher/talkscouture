import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { TextEditorComponent } from '../../../shared/components/formComponents/text-editor/text-editor.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorComponent, NgxEditorModule, Toolbar } from 'ngx-editor';
import { Validators } from '@angular/forms';
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { SectionSelectComponent } from "../../../shared/components/formComponents/section-select/section-select.component";
import { WriterService } from '../../services/writer.service';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [InputComponent, ButtonComponent, NgxEditorModule, ReactiveFormsModule, FormsModule, SectionSelectComponent],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.sass'
})
export class ArticleCreateComponent {


  createArticleForm: FormGroup = this.fb.group({
    "title": ["", Validators.required],
    "description": ["", Validators.required],
    "readTime": ["", [Validators.required, Validators.pattern("[0-9]{1,2}")]],
    "photo": ["", []],
    "editorContent": [null, Validators.required],
    "section": [null, [Validators.required, Validators.pattern("The Thought|Dear Fashion|Mucho más que anuncios")]],
  });

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


  onChange(html: object) {
    this.html = '';
  }


  ngOnInit() {
    this.editor = new Editor()
  }

  ngOnDestroy() {
    this.editor.destroy()
  }

  constructor(private fb: FormBuilder, private writerService: WriterService) {

  }

  //Function that creates a new article
  createArticle(event: Event) {
    event.preventDefault()


    let article = {
      "title": this.title.value,
      "description": this.description.value,
      "photo": this.photo.value,
      "readTime": this.readTime.value,
      "content": this.editorContent.value,
      "section": this.section.value
    }

    this.writerService.createArticle(article).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err)

      }
    })
  }


  get title() {
    return this.createArticleForm.get('title') as FormControl
  }

  get description() {
    return this.createArticleForm.get('description') as FormControl
  }

  get photo() {
    return this.createArticleForm.get('photo') as FormControl
  }

  get readTime() {
    return this.createArticleForm.get('readTime') as FormControl
  }

  get editorContent() {
    return this.createArticleForm.get('editorContent') as FormControl
  }

  get section() {
    return this.createArticleForm.get('section') as FormControl

  }
}
