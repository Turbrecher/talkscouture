import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { TextEditorComponent } from '../../../shared/components/formComponents/text-editor/text-editor.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorComponent, NgxEditorModule, Toolbar } from 'ngx-editor';
import { Validators } from '@angular/forms';
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { SectionSelectComponent } from "../../../shared/components/formComponents/section-select/section-select.component";
import { WriterService } from '../../services/writer.service';
import { Router } from '@angular/router';

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
    "photo": ["", [Validators.required]],
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

  private file: any = " "


  onChange(html: object) {
    this.html = '';
  }


  ngOnInit() {
    this.editor = new Editor()
  }

  ngOnDestroy() {
    this.editor.destroy()
  }

  constructor(private fb: FormBuilder, private writerService: WriterService, private router: Router) {

  }

  //Function that creates a new article
  createArticle(event: Event) {
    event.preventDefault()


    let formData = new FormData()

    formData.append('title', this.title.value)
    formData.append('description', this.description.value)
    formData.append('readTime', this.readTime.value)
    formData.append('content', this.editorContent.value)
    formData.append('section', this.section.value)
    formData.append('photo', this.file, this.file.name)

    this.writerService.createArticle(formData).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['/writer/articles/list'])
      },
      error: (err) => {
        console.log(err)

      }
    })
  }


  //getters

  getFile(event: any) {
    this.file = event.target.files[0]
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
