import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Article } from '../model/Article.component';
import { Categorie } from '../model/Categorie.component';
import { Store } from '../model/Store.component';


@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  articles: Array<Article> = []; 
  categories: Array<Categorie> = []; 

  constructor(private httpClient: HttpClient) {
  }

  


  public getStore(): Observable<Store> {
    console.log("chargement du catalogue...");
    return this.httpClient.get<Store>('http://boutique.stolvezen.com/api/store.php');
  }




  payer(type: number) {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',    
      'Access-Control-Allow-Headers': 'Content-Type', 
      'Access-Control-Request-Headers': 'X-Requested-With, accept, content-type'
    
    })
    };
    
    
    this.httpClient.post('http://boutique.stolvezen.com/api/payer.php', 
      { title: 'Paiement de type '+type }, httpOptions)
      .subscribe(data => {
      console.log('ok');
    })
  }















  public getArticles(): Array<Article> 
  {
    return this.articles; 
  }

  public setArticles(articles: Array<Article>) {
    this.articles = articles; 
    this.articles.forEach(function(a) {
      a.panier = 0

      // pour dev, evite de remplir le panier 
      if (a.id < 5) { a.panier = a.id }
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
        a.panier = Math.min(a.stock, a.panier); 
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
