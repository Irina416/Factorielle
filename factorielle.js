//Avec defaut  => importation syntaxe = import factorielle from "./factorielle.js";
// Sans {...}
export function factorielle(nombre) { 
    let produit = 1
    for (let i = 1; i <= nombre; i++) {
        produit *= i;
    }
    return produit;
}


// Ajouter "type": "module" dans le packge.json pour permettre de faire une exportation 