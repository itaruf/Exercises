const help = require("../helpers/helpApp");
const mail = require("../config/transmitMail");
const schema = require("../helpers/schemaMail");
const sc = require("./screenshot");


/**
 * Fonction qui envoie un mail à l'utilisateur monitorant un site modifié
 * @param {Array<String>} users - Tableau de mail d'utilisateur monitorant un site ayant subi des modifications
 * @returns {void}
 */

const alertUsers = async (users) => {
  for (var i = 0; i < users.length; i++) {
    let sites = await help.getModifiedSites(users[i].mail); // Récupere les sites ayant subi des modifications et monitoré par l'utilisateur
    // Envoie un mail à l'utilisateur contenant l'ensemble des sites modifiés et monitorés par l'utilisateur
    mail.transmitMail(users[i].mail, schema.alertUserSchema(sites));
  }
};

/**
 * fonction coeur du projet, ayant pour but d'appeler les fonctions qui vont : capturer, comparer et ensuite alerter les utilisateurs
 * @returns {void}
 */

const application = async () => {
  let arrayID = await sc.takeAndCompareScreenshots();
  // Supprime du tableau les -1 => les sites n'ayant pas été modifié ou responsable d'erreur
  arrayID = arrayID.filter((id) => id != -1);
  console.log('arrayID', arrayID);

  if (arrayID.length > 0) {
    await help.setModifiedSites(true, arrayID); // Met à True la colonne modified des sites ayant subi des modifications
    let users = await help.getUsersToNotify(); // Récupère l'ensemble des utilisateurs monitorant des sites modifiés
    console.log('users', users);
    alertUsers(users); // Alerter l'utilisateur
    await help.setModifiedSites(false, arrayID); // Remet à false la colonne modified des sites ayant subi des modifications
  }
};

exports.application = application;
