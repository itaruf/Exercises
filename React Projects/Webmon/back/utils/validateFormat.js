const Joi = require("joi");




/**
 * Fonction qui vérifie si le format du mail entré par l'utilisateur est conforme
 * @param {string} mail - mail entré
 * @returns {null|string} renvoie une erreur si le mail ne respecte pas le format, NULL Sinon
 */

// Prend en parametre un mail et renvoie une erreur si le mail ne respecte pas le format NULL Sinon
const validateFormatMail = mail => {
  const schema = Joi.object().keys({
    mail: Joi.string().max(30).email().trim().required().regex(/^[\w \- \.]+@[a-z]{3,10}\.[a-z]{2,5}$/)
  });
  return Joi.validate({ mail: mail }, schema).error;
}

/**
 * Fonction qui vérifie si le format du mot de passe entré par l'utilisateur est conforme
 * @param {string} password - mot de passe entré
 * @returns {null|string} renvoie une erreur si le mot de passe ne respecte pas le format, NULL Sinon
 */

// Prend en parametre un mot de passe et renvoie une erreur si le mail ne respecte pas le format NULL Sinon
const validateFormatPassword = password => {
  const schema = Joi.object().keys({
    password: Joi.string().min(8).max(20).required().regex(/^[\w \- . " ']{8,20}$/) // Chaine de caractere , taille : entre 8 et 20 caracteres, respecte la regex
  })
  return Joi.validate({ password: password }, schema).error;
}

/**
 * Fonction qui vérifie si le format de l'URL entré par l'utilisateur est conforme
 * @param {string} url - URL à 
 * @returns {null|string} renvoie une erreur si l'URL ne respecte pas le format, NULL Sinon
 */


const validateUrl = url => {
  const schema = Joi.object().keys({
    url: Joi.string().uri().required().trim().max(200)
  })
  return Joi.validate({ url: url }, schema).error;
}


exports.validateUrl = validateUrl;
exports.validateFormatPassword = validateFormatPassword;
exports.validateFormatMail = validateFormatMail;

