const userDB = require("../helpers/getUser");
const schema = require("../helpers/schemaMail");
const mail = require("../config/transmitMail");
const format = require("../utils/validateFormat");
const jwt = require("jsonwebtoken");
const config = require("../config/secretjwt");
const db = require("../data/database");
const secure = require("../helpers/password/hashPass");


/**
 * Fonction qui envoie par mail un lien de réinitialisation du mot de passe si celui-ci est valable
 * @param {string} userMail - mail de l'utilisateur
 * @param {object} res - réponse HTTP
 * @returns {object} réponse HTTP contenant un message indiquant si le mot de passe a bien été modifié ou non
*/
const passLost = async (userMail, res) => {
  if (format.validateFormatMail(userMail)) {
    return res.status(400).json({
      error: "Le format du mail est incorrect"
    });
  }
  let infoDB = await userDB.getUser(userMail);
  if (!infoDB.rowCount) {
    return res.status(400).json({
      error: "Le mail est incorrect" // Existe pas dans la BDD
    });
  }

  mail.transmitMail(userMail, schema.passLostSchema(userMail)); // envoie un mail pour réinitialiser le mot de passe
  return res.status(200).json({
    message: "Un lien de réinitialisation a été envoyé à " + userMail
  });
};


/**
 * Fonction qui va gérer le lien permettant la modification du mot de passe de l'utilisateur
 * @param {string} token - token provenant de l'url du lien de réinitialisation du mot de passe
 * @param {object} res - réponse HTTP
 * @returns {object} réponse HTTP : renvoyant un message d'erreur si le lien a expiré sinon redirige vers la page de modification de mot de passe avec comme paramètre le token
 */
// Vérifie si le lien de changement de mot de passe est correct/ toujours valable
const checkLink = (token, res) => {
  jwt.verify(token, config.secretPassLostToken, err => {
    if (err)
      return res
        .status(403)
        .send("Le lien de changement de mot de passe a expiré");
  });

  // Redirection à la route /changePassword avec le token pour identifier l'utilisateur voulant changer son mot de passe
  return res.redirect("http://localhost:3000/changePassword/" + token);
};


/**
 * Fonction qui modifie le mot de passe d'un utilisateur à condition que le format du mot de passe soit conforme 
 * @param {string} token - token qui provient des paramètres de l'url de modification de mot de passe
 * @param {object} newpass - contient deux attributs : password et passwordVerify
 * @param {object} res - réponse HTTP 
 * @returns {object} réponse HTTP contenant un message si le changement de mot de passe a bien été opéré
 */
const changePassword = async (token, newpass, res) => {
  if (newpass.password !== newpass.passwordVerify)
    return res.status(400).json({
      error: "Les mots de passes doivent être identiques !"
    });
  if (format.validateFormatPassword(newpass.password))
    return res.status(400).json({
      error: "Le format du mot de passe est incorrect"
    });
  let securePassword = await secure.hashPass(newpass.password);
  // Vérifie que le token provenant du mail de confirmation est toujours valable
  // Si il l'est , on modifie le mot de passe en récupérant le mail depuis le payload du token. SINON on affiche un message d'erreur

  jwt.verify(token, config.secretPassLostToken, (err, user) => {
    if (err) return res.status(403).send("Le lien a expiré");
    // Vérifie que l'utilisateur existe
    db.getDB().query({
      text: "UPDATE USERS SET password = $1 where mail = $2",
      values: [securePassword, user.mail]
    });
  });
  return res.status(201).json({
    message: "Le mot de passe a bien été modifié !"
  });
};

exports.passLost = passLost;
exports.checkLink = checkLink;
exports.changePassword = changePassword;
