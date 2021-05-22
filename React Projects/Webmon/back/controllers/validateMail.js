const jwt = require("jsonwebtoken");
const config = require("../config/secretjwt");
const db = require("../data/database");



/**
 * Fonction qui confirme l'email de l'utilisateur suite à son inscription
 * @param {string} token - token provenant du lien du mail de confirmation de l'inscription de l'utilisateur
 * @param {object} res - réponse HTTP 
 * @returns {object} réponse HTTP qui redirige l'utilisateur vers la page d'authentification ou bien lui indique que le lien avec le token n'est plus valide
 */
const mailConfirm = (token, res) => {
  jwt.verify(token, config.secretMailToken, (err, user) => {
    if (err) {
       err = {
          message: 'Le lien a expiré'
       }
       return res.status(401).send(err); // Send close la connexion automatiquement ==> pas de pb de "Can't set Headers twice"
    }
    db.getDB().query({
      text: "UPDATE USERS SET confirmed = true where mail = $1",
      values: [user.mail]
    });
  
  return res.redirect("http://localhost:3000/login");
  });

};

exports.mailConfirm = mailConfirm;
