function combinaison(n, p){
    if (n > p) {
        return factorielle(n) / factorielle (n-p) * factorielle(p);
    } else {
        throw new Error('n must be greater than p')
    }
}