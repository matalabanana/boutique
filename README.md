# Logiciel de caisse 


# Stockage des données

Afin de faciliter la communication entre les composants et que les données persistent à la navigation, il faut stocker les données dans le service. 

# Passer en prod

```
ng build --base-href=/boutique1/ --prod
```

puis copier le répertoire de dist/ sur la prod. 

base-href est l'url de production 



## Discuter avec une API

Il faut utiliser la bonne méthode de httpClient
* GET pour select en BDD
* POST pour insert
* PUT pour update
* DELETE pour delete 

Il faut également que le fichier PHP débute par 
```
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$method = $_SERVER['REQUEST_METHOD'];
$data = file_get_contents('php://input');
$info = json_decode($data);

``` 


