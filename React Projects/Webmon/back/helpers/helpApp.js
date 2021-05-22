const db = require("../data/database");

// Met à true ou false les sites contenu dans le tableau d'id passé en parametre
/**
 * Fonction qui permet de modifier l'attribut modified de la table SITES selon un tableau d'ID
 * @param {Boolean} setTo -Booléen indiquant la valeur devant être prise par l'attibut Modified de la table SITES
 * @param {Array<number>} arrayID -Tableau contenant les ID des sites ayant été considéré comme modifié (différence pixel > SEUIL)
 * @returns {number} -renvoie le nombre de ligne dans la BDD ayant été modifié
 */

const setModifiedSites = async (setTo, arrayID) => {
  const reqDB = {
    text: "UPDATE SITES SET modified = $1 WHERE ID =  ANY ($2)",
    values: [setTo, arrayID]
  };
  return await db
    .getDB()
    .query(reqDB)
    .then(res => res.rowCount); // Renvoie le nombre de ligne modifié (null si 0 modification)
};

/** Fonction qui récupère les mails des utilisateurs dont leurs sites monitorées ont été modifiés
 * @returns {Array<Object>|number} // Renvoie un tableau de l'ensemble des utilisateurs monitorant un site ayant subi des modifications sinon 0
 */

const getUsersToNotify = async () => {
  
  return await db
    .getDB()
    .query(
      "SELECT mail FROM USERS WHERE id IN (SELECT userID FROM MONITORE,SITES WHERE modified = TRUE AND id = siteID)"
    )
    .then(arrayMail => arrayMail.rows)
    .catch(err => 0);
};

// Récupère un tableau contenatn l'ensemble des URLs des sites ayant subi des modifications pour un utilisateur passé en paramètre
/**
 * Fonction qui récupère pour un utilisateur,grâce à son mail,la liste des sites modifiés qu'il monitore
 * @param {string} userMail - Mail de l'utilisateur
 * @returns {Array<string>} - Renvoie un tableau contenant les sites ayant subi des modifications
 */




const getModifiedSites = async userMail => {
  const reqDB = {
    text:
      "SELECT url FROM SITES WHERE modified = TRUE AND id IN (SELECT siteID FROM MONITORE,USERS U WHERE userID = U.id AND mail = $1) ",
    values: [userMail]
  };
  return await db
    .getDB()
    .query(reqDB)
    .then(res => res.rows);
};

exports.setModifiedSites = setModifiedSites;
exports.getUsersToNotify = getUsersToNotify;
exports.getModifiedSites = getModifiedSites;
