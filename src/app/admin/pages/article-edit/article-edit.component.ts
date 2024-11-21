import { Component } from '@angular/core';
import { ArticleAdminService } from '../../services/article-admin.service';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { WriterService } from '../../../writer/services/writer.service';
import { ArticleService } from '../../../public/services/article.service';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { SectionSelectComponent } from "../../../shared/components/formComponents/section-select/section-select.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [InputComponent, SectionSelectComponent, ButtonComponent, ReactiveFormsModule, FormsModule, NgxEditorModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.sass'
})
export class ArticleEditComponent {

  private file: any = " "

  id: string = "1"
  editArticleForm: FormGroup = this.fb.group({
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
    this.id = this.activatedRoute.snapshot.params['id']

    this.articleService.getArticle(this.id).subscribe({
      next: (response) => {
        this.title.setValue(response.title)
        this.description.setValue(response.description)
        this.section.setValue(response.section)
        this.readTime.setValue(response.readTime)
        this.editorContent.setValue(response.content)
      },

      error: (err) => {

      }
    })
  }

  ngOnDestroy() {
    this.editor.destroy()
  }

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private articleService: ArticleService, private articleAdminService: ArticleAdminService,
    private router: Router
  ) {

  }

  //Function that edit an article
  editArticle(event: Event) {
    event.preventDefault()

    let formData = new FormData()

    formData.append('title', this.title.value)
    formData.append('description', this.description.value)
    formData.append('readTime', this.readTime.value)
    formData.append('content', this.editorContent.value)
    formData.append('section', this.section.value)
    formData.append('id', this.id)

    if (this.file != " ") {
      formData.append('photo', this.file, this.file.name)
    }

    this.articleAdminService.editArticle(formData).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/articles/list'])
        console.log(response)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  //Function that deletes an article
  deleteArticle(event: Event) {
    event.preventDefault()


    if(confirm("¿Estás seguro/a?")){
      this.articleAdminService.deleteArticle(this.id).subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['/admin/articles/list'])
        },
        error: (err)=>{
          console.log(err)
        }
      })
    }
  }


  getFile(event: any) {
    this.file = event.target.files[0]

    console.log(this.file)
  }

  get title() {
    return this.editArticleForm.get('title') as FormControl
  }

  get description() {
    return this.editArticleForm.get('description') as FormControl
  }

  get photo() {
    return this.editArticleForm.get('photo') as FormControl
  }

  get readTime() {
    return this.editArticleForm.get('readTime') as FormControl
  }

  get editorContent() {
    return this.editArticleForm.get('editorContent') as FormControl
  }

  get section() {
    return this.editArticleForm.get('section') as FormControl

  }


}
