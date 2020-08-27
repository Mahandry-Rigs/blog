import { Component, OnInit } from '@angular/core';
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
  kategoria = ARTICLES;
  nbr = this.artikla;
  articleSelected: Article;

 searchAuteur(art) {
    if (art == '') {
      this.artikla = ARTICLES;
    }
    this.artikla = this.artikla.filter((Article) => {
      return Article.auteur.includes(art);
      })
  }

  checkValue(event: any) {
    console.log(event);
  }

  selectArticle(arta: Article){
    this.articleSelected = arta;
  }


  searchCategorie(kat) {
    if (kat == '') {
      this.kategoria = ARTICLES;
    }
    this.kategoria = this.kategoria.filter((Article) => {
      return Article.categorie.includes(kat);
      })
  }

  searchArticle(art) {
    if (art == '') {
      this.artikla = ARTICLES;
    }
    console.log(art)
    this.artikla = this.artikla.filter((Article) => {
      return Article.contenu.includes(art);
    })
  }
  
}
