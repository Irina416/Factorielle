// Syntaxe importation d'un export default est sans {...}
// Ici c'est avec car => export function factorielle(nombre) {...}
import { factorielle } from "./factorielle.js";

function combinaison(n, p) {
    if (n > p) {
        return factorielle(n) / (factorielle(p) * factorielle(n - p));
    } else {
        // Crée notre propre message d'erreur si n < p
        throw new Error('n must be greater than p')
    }
}

console.log(combinaison(5, 3));  // 10
