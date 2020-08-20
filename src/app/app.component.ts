import { Component } from '@angular/core';
import { ARTICLES } from './mock-article';
import { Article } from './article';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'blog';
  artikla = ARTICLES;
  nbr = this.artikla
  listArticles;

 searchAuteur(art) {
    if (art == '') {
      this.artikla = ARTICLES;
      console.log(this.artikla)
    }
    this.artikla = this.artikla.filter(() => {
      return art.nom.includes(art);
    })
  }

  searchArticle(articles) {
    this.listArticles = articles;
  }
  
}
