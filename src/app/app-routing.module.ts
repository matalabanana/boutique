import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path: 'panier', component: PanierComponent }, 
  {path: 'categorie/:id', component: CategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
