import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article/article.model';
import { Price } from '../article/price/price.model';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {
  catalogue: Article[]
  constructor() {

    this.catalogue = [
      new Article('Veste trop cool', 'vêtements extérieurs', 'Une super veste pour les mecs trop cools', 'Doudoune', new Price(199, '€', 20), 'https://www.bonnegueule.fr/wp-content/uploads/2015/04/blouson-bombardier-en-mouton-lainee-classique-homme-marron-selection-cesare-nori-bombh.jpg'),
       new Article('Chaussures de la mort', 'chaussures/femmes', 'Des chaussures pour faire dégager les mecs relouds', 'Chauss On', new Price(148.99, '$', 0), 'https://imgfave.azureedge.net/image_cache/1324924374378447.jpg'),
       new Article('String Aleze Blaise', 'sous-vêtements/hommes', 'Pour devenir THE KING OF THE BEACH', 'Helas Stick', new Price(29.99, '$',10), 'http://mycrazystuff.com/2078-image_produit/borat-mankini-vert.jpg')]
      }

  ngOnInit() {
  }
  deleteArticle(article:Article){
    // const pointer = this.catalogue.indexOf(article);
    // if (pointer > -1) {
    //   this.catalogue.splice(pointer, 1);

      
    // } ou bien
    this.catalogue = this.catalogue.filter(item => item !== article);
    
  }

}
