import { Component, OnInit } from '@angular/core';

import { NGXLogger } from "ngx-logger";

import { Categorie } from '../model/Categorie.component';
import { BoutiqueService } from '../service/boutique.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  articles : Array<any> = []; 

  constructor(private mystore: BoutiqueService, private logger: NGXLogger) { }

  ngOnInit(): void 
  {
    var x = this.mystore.getArticles();    
    x.forEach((a) => {
      if (a.panier > 0) {
        this.articles.push(a); 
      }
    })
  }


  ajoute(id: number, inc: number = 1) 
  {
    this.mystore.ajoute(id, inc); 
    this.logger.info("ajoute "+id+" au panier avec inc="+inc);
  }

  montantPanier() 
  {
    return this.mystore.montantPanier()
  }

  payer(type: number) 
  {
    this.mystore.payer(type); 
  }

}
