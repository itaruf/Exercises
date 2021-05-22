
const db = require('../data/database');

// Fonction qui permet de récupérer les informations d'un utilisateur par son mail dans la BDD
/**
 * Fonction qui récupère les informations de l'utilisateur dans la BDD grâce à son mail
 * @param {String} userMail -Mail de l'utilisateur
 * @returns {Object} =Renvoie un objet contenant les données de l'utilisateur (id,password,mail)
 */

const getUser = async userMail => {
  const reqDB = {
      text : "SELECT * FROM USERS WHERE mail = $1",
      values : [userMail]
  }
  return await db.getDB().query(reqDB).then( result => result);
}

exports.getUser = getUser;
