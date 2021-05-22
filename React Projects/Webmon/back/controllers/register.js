const secure = require("../helpers/password/hashPass");
const format = require("../utils/validateFormat");
const db = require("../data/database");
const userDB = require("../helpers/getUser");
const mail = require("../config/transmitMail");
const schema = require("../helpers/schemaMail");



/**
 * Fonction qui permet l'inscription de l'utilisateur (envoie au passage un mail de confirmation)
 * @param {object} user - objet contenant les informations de l'utilisateur (mail,password,passwordVerify)
 * @param {object} res - réponse HTTP 
 * @returns {object} réponse HTTP contenant un message si l'inscription a bien eu lieu ou si les champs ont été remplis de manière incorrecte
 */
const addUser = async (user, res) => {
  const infoDB = await userDB.getUser(user.mail); // Récupère les infos de l'utilisateur depuis la BDD (afin de vérifier qu'il n'existe pas déjà)
  const alreadyExist = infoDB.rowCount; // Récupère le nombre de ligne renvoyé par le SGBD (O si l'utilisateur n'existe pas 1 sinon)

  // Vérifie que les champs ne sont pas null ou undefined
  if (!user.password || !user.passwordVerify || !user.mail) {
    return res
      .status(400)
      .json({ error: "Tous les champs doivent être renseignés" });
  }
  
  if (user.password !== user.passwordVerify) {
    return res.status(400).json({
      error: "Les mots de passe doivent être identiques !"
    });
  }
    // ValidateFormat renvoie une erreur si le mail ne respecte pas le format => on entre dans le if ::: Sinon il renvoie null => on entre pas dans le if
  if (format.validateFormatMail(user.mail)) {
    return res.status(400).json({
      error: "Le format du mail est incorrect !"
    });
  }
  // Idem
  if (format.validateFormatPassword(user.password)) {
    return res.status(400).json({
      error: "Le format du mot de passe est incorrect !"
    });
  }

  // Vérifie si l'utilisateur existe dans la BDD , s'il existe déjà on renvoie un message d'erreur
  if (alreadyExist) {
    return res.status(400).json({
      error: "Vous etes deja inscrit sur notre site !"
    });
  }
  // Hachage du mot de passe
  const securePassword = await secure.hashPass(user.password);
  // "Requête préparée" permet d'éviter les injections SQL
  const reqDB = {
    text: "INSERT INTO USERS (mail,password) VALUES ($1,$2)",
    values: [user.mail, securePassword]
  };
  // Ajoute l'utilisateur dans la BDD , SI erreur: renvoie un message d'erreur SINON on envoie un mail de confirmation et un status 200
  db.getDB().query(reqDB, async err => {
    if (err) {
      return res.status(500).json({
        error: "Erreur lors de l'inscription"
      });
    } else {
      await mail.transmitMail(user.mail, schema.mailConfirmSchema(user.mail)); // Envoie le destinataire et le schéma du mail à envoyer a la fonction transmitMail
      return res.status(200).json({message : "L'inscription a été prise en compte"});
    }
  });
};

exports.addUser = addUser;
