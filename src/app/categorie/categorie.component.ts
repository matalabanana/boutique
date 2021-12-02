import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/Article.component';
import { BoutiqueService } from '../service/boutique.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  id: number = 0; 
  articles: Array<Article> = []; 
  
  constructor(private mystore: BoutiqueService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("initialisation du component Categorie"); 
    this.route.params.subscribe(
      params => {
         this.id= +params['id'];

         var x = this.mystore.getArticles();  
         this.articles = [];  
         x.forEach((a) => {
           if (a.categorie == this.id) {
             this.articles.push(a); 
           }
         })
     

        });

    // ne fonctionne pas 
    // this.id = this.route.snapshot.params['id']; 

    
  }

  ajoute(id:number): void {
    this.mystore.ajoute(id,1); 
  }
}
