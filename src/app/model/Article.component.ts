export class Article {
    public id: number; 
    public categorie: number; 
    public nom: string;
    public prix: number;
    public quantite: number;
    public panier: number; 
    public illustration: string; 

    public constructor(id: number, categorie:number, nom: string, prix: number, quantite: number, panier:number, illustration: string) 
    {
        this.id = id; 
        this.categorie = categorie; 
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
        this.panier = panier; 
        this.illustration = illustration; 
    }
} 