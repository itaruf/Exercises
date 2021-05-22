/**
 * Fonction permettant de mélanger les indices d'un tableau.
 * @param {array} array - Tableau de tout type de données
 */
const RandomizeArray = (array) => {
    var i, j, tmp;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}

export default RandomizeArray
