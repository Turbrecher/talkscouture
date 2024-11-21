import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {  Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { WriterService } from '../../../writer/services/writer.service';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { SectionSelectComponent } from "../../../shared/components/formComponents/section-select/section-select.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { ArticleAdminService } from '../../services/article-admin.service';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [InputComponent, SectionSelectComponent, ButtonComponent, ReactiveFormsModule, FormsModule, NgxEditorModule],
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

  constructor(private fb: FormBuilder, private adminArticleService: ArticleAdminService, private router: Router) {

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

    this.adminArticleService.createArticle(formData).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['/admin/articles/list'])
      },
      error: (err) => {
        console.log(err)

      }
    })
  }

  getFile(event: any) {
    this.file = event.target.files[0]

    console.log(this.file)
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
