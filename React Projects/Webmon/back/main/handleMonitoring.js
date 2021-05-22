const db = require("../data/database");
const monit = require("../helpers/monitoring");
const format = require("../utils/validateFormat");
const sc = require("./screenshot");
const fs = require("fs");
const { uuid } = require("uuidv4");

/**
 * fonction renvoyant les sites monitorés par un utilisateur
 * @param {number} userID - ID de l'utilisateur en base de données
 * @param {object} res - réponse HTTP

 * @returns {(string|sites)}  
 */

// fonction renvoyant les sites monitorés par un utilisateur
const getMonitoredPages = (userID, res) => {
  // Requete qui permet de récupérer les sites monitorés par un utilisateur
  const reqDB = {
    text:
      "SELECT url, id FROM SITES  , MONITORE M  WHERE M.userID = $1 AND M.siteID = SITES.id",
    values: [userID],
  };

  db.getDB().query(reqDB, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "ERREUR SERVEUR",
      });
    }
    // Renvoie les sites monitorés par l'utilisateur
    return res.status(200).json({
      site: result.rows,
    });
  });
};


/**
 * fonction qui permet d'ajouter un site pour un utilisateur 
 * @param {number} userID - ID de l'utilisateur en base de données
 * @param {string} url - adresse url que l'utilisateur veut monitorer
 * @param {object} res - réponse HTTP
 * @returns {(string|sites)}  
 */

// permet d'ajouter un site à monitorer
const addMonitoredPage = async (userID, url, res) => {
  let infoDB = await monit.getSiteID(url); // récupère les informations du site dans la table SITES (la table regroupant tous les sites de tous les utilisateurs)

  // Si le site est déjà monitoré par un autre utilisateur :
  if (infoDB.rowCount) {
    let siteID = await infoDB.rows[0].id; // Récupère l'id du site dans la table SITES
    let isMonitored = await monit.isAlreadyMonitored(siteID, userID); // Renvoie 1 si le site est déja monitoré par l'utilisateur 0 sinon
    if (isMonitored) {
      return res.status(400).json({ error: "Vous monitorez déjà ce site !" }); // ==> Si le site est deja monitoré : On renvoie un message d'erreur
    }
    // Si le site n'est pas monitoré par l'utilisateur , on l'ajoute dans la BDD
    await db.getDB().query({
      text: "INSERT INTO MONITORE(userID,siteID) VALUES ($1,$2)",
      values: [userID, siteID],
    });
    return getMonitoredPages(userID, res); // Renvoie la nouvelle liste de site monitoré par l'utilisateur
  }

  // Vérifie le format de l'URL
  if (format.validateUrl(url)) {
    return res.status(400).json({
      error: "Le format de l'URL est incorrect !",
    });
  }
  // Si le site est monitoré par aucun utilisateur , on l'ajoute à la table SITES

  const tmpID = uuid();
  let screenshotTaken = await sc.screenshot(url, `scShot/site_${tmpID}.png`);
  // Vérifie si le screenshot a fonctionné
  if (!screenshotTaken) {
    return res.status(400).json({
      error: `Le site ${url} ne répond pas`,
    });
  }

  // Maintenant que le site est présent dans la table SITES, on l'ajoute à la table MONITORE
  try {
    await monit.addtoSITES(url);

    infoDB = await monit.getSiteID(url);
    let siteID = await infoDB.rows[0].id;
    fs.rename(
      `scShot/site_${tmpID}.png`,
      `scShot/site_${siteID}.png`,
      (err) => {
        if (err) console.log("erreur lors du renommage du fichier");
      }
    );
    await db.getDB().query({
      text: "INSERT INTO MONITORE(userID,siteID) VALUES ($1,$2)",
      values: [userID, siteID],
    });
    return getMonitoredPages(userID, res);
  } catch (err) {
    fs.unlinkSync(`scShot/site_${tmpID}.png`);
    return getMonitoredPages(userID, res);
  }
};



/**
 * Fonction qui permet de supprimer un site monitoré par l'utilisateur 
 * @param {number} userID - ID de l'utilisateur en base de données
 * @param {number} siteID - ID du site à supprimer envoyé par l'utilisateur
 * @param {object} res - réponse HTTP
 * @returns {(string|sites)}  
 */


// Permet de supprimer un site monitoré
const deleteMonitoredPages = async (userID, siteID, res) => {
  // Si l'ID du site envoyé par le client n'est pas un nombre on renvoie une erreur (peut arrivé dans le cas où l'utilisateur change le code Source)
  if (isNaN(siteID)) {
    return res.status(400).json({
      error: "Le site est introuvable",
    });
  }
  const reqDB = {
    text: "DELETE FROM MONITORE WHERE userID = $1 AND siteID = $2",
    values: [userID, siteID],
  };


  // Vérifier qu'il monitore effectivement le site qu'il veux supprimer.
  let isAlreadyMonitored = await monit.isAlreadyMonitored(siteID, userID);
  if (!isAlreadyMonitored) {
    return res.status(400).json({
      error: "Le site à supprimer est introuvable", // car il ne le monitore pas
    });
  }
  // Vérifier combien de personne monitore le site qu'il veux supprimer . Si 1 Alors supprimer aussi de la table SITES
  let isMonitoredBy = await monit.monitoredBy(siteID);
  if (isMonitoredBy > 1) {
    await db.getDB().query(reqDB); // Supprime le site de la table MONITORE
  } else {
    // Supprime de la table monitore ET de la table SITES car il est le seul à le monitorer (Ordre : supp de monitore puis de sites (clé étrangère))
    if (fs.existsSync(`scShot/site_${siteID}.png`))
      fs.unlink(`scShot/site_${siteID}.png`, (err) => err); // supprime le fichier contenant la capture d'écran s'il existe
    await monit.deleteFromTables(siteID, userID);
  }

  return getMonitoredPages(userID, res); // Renvoie la nouvelle liste des sites monitorés
};

exports.addMonitoredPage = addMonitoredPage;
exports.deleteMonitoredPages = deleteMonitoredPages;
exports.getMonitoredPages = getMonitoredPages;
