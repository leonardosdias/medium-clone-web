import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  },
  {
    path: 'new-article',
    component: CreateArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArticleRoutingModule { }
