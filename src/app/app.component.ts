import { Component } from '@angular/core';
import { ARTICLES } from './mock-article';
// import { Article } from './article';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'blog';
  artikla = ARTICLES;
  nbr = this.artikla;
  listArticles;


  searchArticle(articles) {
    this.listArticles = articles;
  }
  
  checkValue(event: any) {
    console.log(event);
  }

  searchAuteur(art) {
    if (art == '') {
      this.artikla = ARTICLES;
    }
    this.artikla = this.artikla.filter((Article) => {
      return Article.auteur.includes(art);
    })
  }


  searchCategori(kat) {
    if (kat == '') {
      this.artikla = ARTICLES;
    }
    this.artikla = this.artikla.filter((Article) => {
      return Article.categorie.includes(kat);
    })
  }

}
