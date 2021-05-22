const userDB = require("../helpers/getUser");
const check = require("../helpers/password/checkPass");
const token = require("../helpers/token");
const mail = require("../config/transmitMail");
const schema = require("../helpers/schemaMail");


/**
 * Fonction d'authentification de l'utilisateur 
 * @param {object} user - objet contenant le mail et le mot de passe de l'utilisateur 
 * @param {object} res - réponse HTTP 
 * @returns {object}  réponse HTTP contenant soit une erreur soit un token
 */
const authUser = async (user, res) => {
  let infoDB = await userDB.getUser(user.mail); // Requete à la BDD pour récupérer les infos de l'utilisateur grâce au mail

  // Si l'utilisateur n'est pas inscrit (Si la db renvoie 0 ligne) on revoie un msg d'erreur
  if (!infoDB.rowCount) {
    return res.status(401).json({
      error: "Mail ou mot de passe incorrect" // Ne pas renvoyer "Vous n'êtes pas inscrit" => Evite à un tier de savoir que ce mail est stocké dans la BDD
    });
  }
  // Si il est inscrit,  on peux effectuer le traitement des infos recu

  let userDBHashPass = infoDB.rows[0].password;   // Recupere le mot de passe haché de la bdd dans la variable userDBHashPass
  let match = await check.checkPass(user.password, userDBHashPass); // Renvoie true si les mots de passe coincident false sinon
  let confirmedMailBoolean = infoDB.rows[0].confirmed; // Renvoie true si le mail a été confirmé false sinon

  // Si les deux mots de passe sont identiques , on verifie que le mail a été confirmé, s'il ne l'est pas, on renvoie une erreur et un mail de confirmation
  if (match) {
    if (!confirmedMailBoolean) {
      await mail.transmitMail(user.mail, schema.mailConfirmSchema(user.mail)); // envoie un mail avec le schéma "mailConfirmSchema" à l'utilisateur
      return res.status(401).json({
        error:
          "Le mail n'est pas confirmé ! Un mail de confirmation vient d'etre envoyé à l'adresse :  " +
          user.mail
      });
    }
    // Si tout se passe correctement , on renvoie un JWT à l'utilisateur
    let userID = infoDB.rows[0].id;
    return res.status(200).json({
      token: token.generateAccessToken({ id: userID })
    });
  }
  // Si les mots de passes ne "match" pas on revoie un message d'erreur
  return res.status(401).json({
    error: "Mail ou mot de passe incorrect"
  });
};

exports.authUser = authUser;
