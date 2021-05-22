const jwt = require("jsonwebtoken");
const config = require('../config/secretjwt');

// Génère un token avec comme payload,l'information passé en paramètre

/**
 * Fonction qui génere un token pour un utilisateur (valable 1h)
 * @param {object} user  -Information sur l'utilisateur à faire contenir dans le token (Payload)
 * @returns {string} - Renvoie un token 
 */


const generateAccessToken = user => jwt.sign(user, config.secret,{expiresIn : "1h"});


/**
 * Fonction de middleware permettant de vérifier que l'utilisateur possède un token valide
 * @param {object} req - Requête HTTP
 * @param {object} res - Réponse HTTP
 * @param {Function} next - next (middleware)
 * @returns {void}
 */


const authenticateToken = (req, res, next) => {
  // Récupère le token depuis le header de la requête
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(403).json({
      errorToken : true
    });
  }
  // Vérifie le token
  jwt.verify(token, config.secret, (err, user) => {
    if (err)
      return res.status(403).json({
        errorToken: true
      });
    
    // Si le token est valide  , on passe à la fonction suivante les informations contenues dans le payload
    req.user = user;
    next();
  });
};

exports.generateAccessToken = generateAccessToken;
exports.authenticateToken = authenticateToken;
