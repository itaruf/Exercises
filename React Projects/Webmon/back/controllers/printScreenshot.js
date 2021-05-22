const monit = require("../helpers/monitoring");
const jwt = require("jsonwebtoken");
const config = require("../config/secretjwt");


/**
 * Fonction qui permet à l'utilisateur de visualiser les captures d'écrans des sites qu'il monitore
 * @param {number} siteID - ID du site demandant à être visualisé par l'utilisateur 
 * @param {string} token - token contenant l'ID de l'utilisateur 
 * @param {string} dirname - renvoie le chemin d'accès absolu du dossier du fichier appelant (serveur)
 * @param {object} res - réponse HTTP 
 * @returns {object} affiche l'image demandé par l'utilisateur si celui-ci a les droits (connecté et monitore le site) sinon il reçoit un message d'erreur
 */
const printScreenshot = async (siteID, token, dirname, res) => {
  return jwt.verify(token, config.secret, async (err, user) => {
    if (err) return res.send("Accès non autorisé");

    const monitoredByUser = await monit.isAlreadyMonitored(siteID, user.id);
    if (!monitoredByUser) return res.send({ message: "Accès non autorisé" });
    else return res.sendFile(dirname + `/scShot/site_${siteID}.png`);
  });
};
exports.printScreenshot = printScreenshot;
