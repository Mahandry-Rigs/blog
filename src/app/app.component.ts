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

  nbr = this.artikla


  addArticle(art) {
    let lastArticle = this.artikla.slice(-1);
    console.log(lastArticle[0]);
    let newArticle = new Article;
    newArticle.auteur = art.auteur;
    newArticle.categorie = art.categorie;
    newArticle.contenu = art.contenu;
    newArticle.id = lastArticle[0].id + 1;
    this.artikla.push(newArticle);
    console.log(newArticle);

  }

}
