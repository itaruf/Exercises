/**
 * Fonction permettant de supprimer tous les doublons présents dans un tableau entré entré
 * @param {array} data Tableau de String
 */
const DeleteOccurrences = (data) => {
    for (let i = 0; i < Object.keys(data).length; i++) {
        for (let j = 0; j < Object.keys(data).length; j++) {
            if (data[i]["Nom"] == data[j]["Nom"] && i != j) {
                data.splice(j, 1)
                i--
                j--
            }
        }
    }
    return (data)
}

export default DeleteOccurrences
