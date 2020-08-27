import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ARTICLES } from '../mock-article';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {
  artikla = ARTICLES;
  iza = 'azera'

  @Input() articles;
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.articles.currentValue) {
      this.artikla = this.articles;
    }
  }
  ngOnInit(): void {
    this.listArticle;
  }

  listArticle() {
    return this.artikla;
  }
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
