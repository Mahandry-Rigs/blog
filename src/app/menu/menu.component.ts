import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../mock-article';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  artikla = ARTICLES;

  showModal: false;

  constructor() { }

  ngOnInit(): void {
  }


  searchArticle(art) {
    if (art == '') {
      this.artikla = ARTICLES;
    }
    this.artikla = this.artikla.filter(() => {
      return art.nom.includes(art);
    })
  }

  searchAuteur(art) {
    if (art == '') {
      this.artikla = ARTICLES;
    }
    this.artikla = this.artikla.filter(() => {
      return art.nom.includes(art);
    })
  }
}
