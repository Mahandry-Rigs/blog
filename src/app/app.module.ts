import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PublicationComponent } from './publication/publication.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { MenuComponent } from './menu/menu.component';
import { ArticleComponent } from './article/article.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PublicationComponent,
    CommentaireComponent,
    MenuComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
