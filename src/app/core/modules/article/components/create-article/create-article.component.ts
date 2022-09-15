import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})

export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: 'Teste',
    description: 'Teste',
    body: 'Teste',
    tagList: ['1']
  }

  constructor() { }

  ngOnInit(): void { }

  onSubmit(res: any) {
    console.log(res);
  }

}
