import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ARTICLES } from '../mock-article';
import { Article } from '../article';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  closeResult = '';
  artikla = ARTICLES;
  showModal: false;
  @Output() termArticle = new EventEmitter();

  constructor(private modalService: NgbModal) {
      // this.termArticle = new EventEmitter();
   }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }


  searchArticle(art) {
    if (art == '') {
      this.artikla = ARTICLES;
    }
    console.log(art)
    this.artikla = ARTICLES.filter((Article) => {
      
      return Article.contenu.includes(art);
    })
    this.termArticle.emit(this.artikla);
  }


}
