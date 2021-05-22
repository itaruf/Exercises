const db = require("../data/database");

/**
 * Fonction qui vérifie si un utilisateur monitore ou non un site
 * @param {number} siteID -ID du site
 * @param {number} userID -ID de l'utilisateur
 * @returns {number} - Renvoie 1 si le site est déjà monitoré , 0 sinon
 */

const isAlreadyMonitored = async (siteID, userID) => {
  const reqDB = {
    text: "SELECT siteID FROM MONITORE WHERE siteID  = $1 AND userID = $2",
    values: [siteID, userID]
  };
  return await db
    .getDB()
    .query(reqDB)
    .then(result => result.rowCount);
};



/**
 * Fonction qui permet de récupérer l'id d'un site dans la BDD grâce à son URL
 * @param {string} url - URL
 * @returns {Array<object>} - Renvoie la ligne associé dans la BDD ([{id : number}])
 */



const getSiteID = async url => {
  const reqDB = {
    text: "SELECT id FROM SITES WHERE url = $1",
    values: [url]
  };
  return await db
    .getDB()
    .query(reqDB)
    .then(result => result);
};

/**
 * Fonction qui permet d'ajouter un site dans la table SITES de la BDD
 * @param {string} url  - URL du site à ajouter
 * @returns {void}
 */

const addtoSITES = async url => {
  const reqDB = {
    text: "INSERT INTO SITES (url) VALUES ($1)",
    values: [url]
  };
  return await db.getDB().query(reqDB);
};

/**
 * Fonction qui permet de supprimer un site de la table MONITORE ET de la table SITES (En cas d'échec : ROLLBACK)
 * @param {number} siteID -ID du site 
 * @param {number} userID -ID de l'utilisateur
 * @returns {void}
 */


const deleteFromTables = async (siteID, userID) => {
  const reqDB = {
    text: "DELETE FROM MONITORE WHERE userID = $1 AND siteID = $2",
    values: [userID, siteID]
  };
  const reqDB2 = {
    text: "DELETE FROM SITES WHERE id = $1",
    values: [siteID]
  };
  const client = db.getDB();
  // Supprime des 2 tables , s'il y a une erreur , on revient à l'état initial avant l'opération pour conserver sa cohérence
  try {
    // Début de la transaction
    await client.query("BEGIN;");
    await client.query(reqDB);
    await client.query(reqDB2);
    // Fin de la transaction
    await client.query("COMMIT;");
  } catch (error) {
    client.query("ROLLBACK;");
  }
};

/**
 * Fonction qui compte le nombre d'utilisateur monitorant un site grâce à son ID
 * @param {number} siteID - ID du site
 * @returns {number} - Renvoie le nombre de personne monitorant le site
 */

const monitoredBy = async siteID => {
  const reqDB = {
    text: "SELECT userID FROM MONITORE WHERE siteID = $1",
    values: [siteID]
  };
  return await db
    .getDB()
    .query(reqDB)
    .then(result => result.rowCount);
}

/**
 * Récupère l'ensemble des sites de la table SITES
 * @returns {Array<object>} -Renvoie un tableau d'objet contenant l'id et l'url de chacun de ces sites
 */


const getSITES = async () => {
  return await db.getDB().query("SELECT id, url FROM SITES").then(result => result.rows);
}

exports.getSITES = getSITES;
exports.monitoredBy = monitoredBy;
exports.isAlreadyMonitored = isAlreadyMonitored;
exports.getSiteID = getSiteID;
exports.addtoSITES = addtoSITES;
exports.deleteFromTables = deleteFromTables;
