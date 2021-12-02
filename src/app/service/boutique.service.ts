import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Article } from '../model/Article.component';
import { Categorie } from '../model/Categorie.component';
import { Store } from '../model/Store.component';


@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  url = 'http://localhost/cellier-catalogue.php';


  articles: Array<Article> = []; 
  categories: Array<Categorie> = []; 

  constructor(private httpClient: HttpClient) {
  }

  
  public getStore(): Observable<Store> {
    console.log("chargement du catalogue...");
    return this.httpClient.get<Store>(this.url);
  }




  public getArticles(): Array<Article> 
  {
    return this.articles; 
  }
  public setArticles(articles: Array<Article>) {
    this.articles = articles; 
    this.articles.forEach(function(a) {
      a.panier = 0
    })
    console.log('chargement local store')
  }

  public getCategories(): Array<Categorie>
  {
    return this.categories; 
  }

  public setCategories(categories: Array<Categorie>) {
    this.categories = categories; 
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


  // public ajouter(article: any): Observable<any> {
  //   return this.httpClient.post(this.url, article);
  // }




}
