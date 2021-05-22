/**
 * Fonction permettant de trier par ordre alphabétique un tableau de String
 * @param {String} a une chaîne de caractère a (un nom)
 * @param {String} b une chaîne de caractère b (un nom)
 */
export default function SortAlphabetically(a, b) {
    const nameA = a.Nom.toUpperCase();
    const nameB = b.Nom.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}