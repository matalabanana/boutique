import { Component, OnInit } from '@angular/core';
import { Categorie } from './model/Categorie.component';
import { BoutiqueService } from './service/boutique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'caisse';

  categories : Array<Categorie> = []; 
  isOpen = false; 

  constructor(private mystore: BoutiqueService) { 
    
  }

  ngOnInit(): void {

    this.mystore.getStore().subscribe(
      ( value ) => {         
        this.mystore.setArticles(value['articles']) 
        this.mystore.setCategories(value['categories']) 
        this.categories = value['categories']; 
      }, 
      ( error ) => { console.log('erreur : '+error); }, 
      ()        => { console.log('Observable fini !'); this.isOpen = true; }
    ); 

  }


  getStore(): void {
    this.categories = this.mystore.getCategories()
    this.isOpen = true; 
  }

  montantPanier(): number {
    return this.mystore.montantPanier(); 
  }
}