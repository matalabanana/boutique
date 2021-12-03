export class Article {
    public id: number; 
    public categorie_id: number; 
    public nom: string;
    public prix: number;
    public stock: number;
    public panier: number; 
    public illustration: string; 

    public constructor(id: number, categorie_id:number, nom: string, prix: number, stock: number, panier:number, illustration: string) 
    {
        this.id = id; 
        this.categorie_id = categorie_id; 
        this.nom = nom;
        this.prix = prix;
        this.stock = stock;
        this.panier = panier; 
        this.illustration = illustration; 
    }
} 