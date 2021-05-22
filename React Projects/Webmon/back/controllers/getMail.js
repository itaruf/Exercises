const db = require("../data/database");
 

/**
 * Fonction qui récupére le mail d'un utilisateur grâce à son ID 
 * @param {number} userID - ID de l'utilisateur provenant du token 
 * @param {object} res - réponse HTTP
 * @returns {object} renvoie une réponse HTTP contenant le mail de l'utilisateur
 */
// Récupère le mail d'un utilisateur grâce à son ID
const getMail = async (userID, res) => {
  const reqDB = {
    text: "SELECT mail FROM USERS WHERE id = $1",
    values: [userID],
  };
  const userMail = await db
    .getDB()
    .query(reqDB)
    .then((result) => result.rows[0].mail);
    if(!userMail){
      return res.status(403).json({
        error : "Erreur"
      })
    }
 
  return res.status(200).json({
    mail: userMail,
  });
};
exports.getMail = getMail;