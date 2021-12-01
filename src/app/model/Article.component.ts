export class Article {
    public id: number; 
    public categorie: number; 
    public nom: string;
    public prix: number;
    public quantite: number;
    public illustration: string; 

    public constructor(id: number, categorie:number, nom: string, prix: number, quantite: number, illustration: string) 
    {
        this.id = id; 
        this.categorie = categorie; 
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
        this.illustration = illustration; 
    }
} 