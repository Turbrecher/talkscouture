import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { ButtonComponent } from '../../../shared/components/formComponents/button/button.component';
import { InputComponent } from '../../../shared/components/formComponents/input/input.component';
import { SectionSelectComponent } from '../../../shared/components/formComponents/section-select/section-select.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../public/services/article.service';
import { WriterService } from '../../services/writer.service';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [InputComponent, ButtonComponent, NgxEditorModule, ReactiveFormsModule, FormsModule, SectionSelectComponent],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.sass'
})
export class ArticleEditComponent {

  private headerPhotoFile: any = " "
  private thumbnailFile: any = " "

  id: string = "1"
  editArticleForm: FormGroup = this.fb.group({
    "title": ["", Validators.required],
    "short_title": ["", Validators.required],
    "description": ["", Validators.required],
    "readTime": ["", [Validators.required, Validators.pattern("[0-9]{1,2}")]],
    "editorContent": [null, Validators.required],
    "section": [null, [Validators.required, Validators.pattern("The Thought|Dear Fashion|Mucho más que anuncios")]],
    "headerPhoto": ["", []],
    "thumbnail": ["", []],
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

    //Gets the article that is going to be edited
    this.articleService.getArticle(this.id).subscribe({
      next: (response) => {
        this.title.setValue(response.title)
        this.short_title.setValue(response.short_title)
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

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private articleService: ArticleService, private writerService: WriterService,
    private router: Router
  ) {

  }

  //Function that edits an article
  editArticle(event: Event) {
    event.preventDefault()


    let formData = new FormData()

    formData.append('title', this.title.value)
    formData.append('short_title', this.short_title.value)
    formData.append('description', this.description.value)
    formData.append('readTime', this.readTime.value)
    formData.append('content', this.editorContent.value)
    formData.append('section', this.section.value)
    formData.append('id', this.id)
    
    
    if(this.headerPhotoFile != " "){
      formData.append('headerPhoto', this.headerPhotoFile, this.headerPhotoFile.name)
    }

    if(this.thumbnailFile != " "){
      formData.append('thumbnail', this.thumbnailFile, this.thumbnailFile.name)
    }




    this.writerService.editArticle(formData).subscribe({
      next: (response) => {
        this.router.navigate(['/writer/articles/list'])
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
      this.writerService.deleteArticle(this.id).subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['/writer/articles/list'])
        },
        error: (err)=>{
          console.log(err)
        }
      })
    }

  }


  //getters
  getHeaderPhoto(event: any) {
    this.headerPhotoFile = event.target.files[0]
  }

  getThumbanil(event: any) {
    this.thumbnailFile = event.target.files[0]
  }

  get title() {
    return this.editArticleForm.get('title') as FormControl
  }

  get short_title() {
    return this.editArticleForm.get('short_title') as FormControl
  }

  get description() {
    return this.editArticleForm.get('description') as FormControl
  }

  get headerPhoto() {
    return this.editArticleForm.get('headerPhoto') as FormControl
  }

  get thumbnail() {
    return this.editArticleForm.get('thumbnail') as FormControl
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
