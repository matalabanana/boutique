import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/Article.component';
import { Categorie } from '../model/Categorie.component';
import { BoutiqueService } from '../service/boutique.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  articles : Array<any> = []; 
  categories : Array<Categorie> = []; 
  vue : number = 0; 
  cat: number = 0; 

  constructor(private mystore: BoutiqueService) { }

  ngOnInit(): void 
  {
   
    //type Observable donc async 
    var obs = this.mystore.getStore(); 
   
    obs.subscribe(
      ( value ) => { 
        
        this.articles = value['articles']        
        this.categories = value['categories']
        this.articles.forEach(function(a) {
          a.panier = 0
        })
        console.log('chargement local store')
      }, 
      ( error ) => { console.log('erreur : '+error); }, 
      ()        => { console.log('Observable fini !'); }
    ); 
     
  }

  ajoute(id: number, inc: number = 1) 
  {
    this.articles.forEach(function(a) {
      if (a.id==id) {
        console.log("ajoute "+id); 
        a.panier += inc; 
        a.panier = Math.max(0, a.panier); 
        a.panier = Math.min(a.quantite, a.panier); 
      }
    }) 
  }

  montantPanier(): number 
  {
    var x = 0; 
    this.articles.forEach(function(a) {
      x += a.prix * a.panier; 
    })
    return x; 
  }

  page(x: number, categorie: number)
  {
    this.vue = x; 
    this.cat = categorie; 
  }
}
