const db = require("../data/database");
const monit = require("../helpers/monitoring");
const fs = require("fs");

// obtenir tous les sites monitorées par l'utilisateur
//  Boucle verifie que c'est pas le seul a le monit si c'est le seul supp aussi de SITES et la capture d'écran


/**
 * Fonction qui récupére les sites monitorés par l'utilisateur
 * @param {number} userID -ID de l'utilisateur en base de données 
 * @returns {Array<number>} renvoie un tableau contenant les ID des sites monitorés par l'utilisateur
 */
// Récupere les sites monitorés par l'utilisateur
const getMonitoredSitesToDelete = async (userID) => {
  const reqDB = {
    text: "SELECT siteID FROM MONITORE WHERE userID = $1",
    values: [userID],
  };
  return await db
    .getDB()
    .query(reqDB)
    .then((res) => res.rows);
};



/**
 * Supprime les sites monitorés par l'utilisateur des tables MONITORE et éventuellement de la table SITES puis supprime le compte de l'utilisateur
 * @param {number} userID -ID de l'utilisateur contenu dans le token
 * @returns {Promise<number>} renvoie 1 si l'utilisateur a été supprimé de la table, 0 sinon
 */
// Supprime l'ensemble des sites monitorés par l'utilisateur puis supprime l'utilisateur .
// Renvoie 1 si l'utilisateur a bien été supprimé

const helpDeleteAccount = async (userID) => {
  const sitesToDeletes = await getMonitoredSitesToDelete(userID);
  const reqDB2 = {
    text: "DELETE FROM USERS WHERE id = $1",
    values: [userID],
  };

  for (var i = 0; i < sitesToDeletes.length; i++) {
    let siteID = await sitesToDeletes[i].siteid;
    let isMonitoredBy = await monit.monitoredBy(siteID);

    if (isMonitoredBy > 1) {
      await db.getDB().query("DELETE FROM MONITORE WHERE siteID = $1", [siteID]);
    } else {
      await monit.deleteFromTables(siteID, userID);
      fs.unlinkSync(`scShot/site_${siteID}.png`);
    }
  }
  return await db.getDB().query(reqDB2).then(res => res.rowCount);
};

/**
 * Fonction qui renvoie une réponse pour la suppression d'un utilisateur
 * @param {number} userID - ID de l'utilisateur contenu dans le token 
 * @param {object} res - réponse HTTP
 * @returns {objet} contient un attribut message indiquant si le site a bien été supprimé ou non 
 */
// Renvoie une réponse si l'utilisateur a été supprimé
const deleteAccount = async (userID, res) => {
  if (await helpDeleteAccount(userID))
    return res.status(204).json({
      message: "Le compte a bien été supprimé",
    });
  else
    return res.status(500).json({
      message: "Une erreur est survenue lors de la suppression du compte",
    });
};

exports.deleteAccount = deleteAccount;
