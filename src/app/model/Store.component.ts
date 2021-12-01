import { Article } from "./Article.component";
import { Categorie } from "./Categorie.component";

export class Store {
    public categories: Array<Categorie>;
    public articles: Array<Article>; 

    public constructor(categories: Array<Categorie>, articles: Array<Article>) 
    {
        this.categories = categories; 
        this.articles = articles; 
    }
} 