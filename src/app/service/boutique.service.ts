import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Article } from '../model/Article.component';
import { Store } from '../model/Store.component';


@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  url = 'http://localhost/cellier-catalogue.php';

  constructor(private httpClient: HttpClient) {
  }

  public getStore(): Observable<Store> {
    console.log("chargement du catalogue...");
    return this.httpClient.get<Store>(this.url);
  }


  // public ajouter(article: any): Observable<any> {
  //   return this.httpClient.post(this.url, article);
  // }




}
