const bcrypt = require('bcrypt');

// Fonction qui renvoie vrai si le hash et le mot de passe passé en paramètre coincide faux sinon
/**
 * Fonction qui indique si le mot de passe fourni par l'utilisateur coincide avec celui de la BDD
 * @param {String} password -Mot de passe haché comparé
 * @param {String} hash - Mot de passe haché de la base de données
 * @returns {Boolean} -Coincidence des mots de passe
 */



const checkPass = async (password, hash) => await bcrypt.compare(password, hash).then(isMatch => isMatch);


exports.checkPass = checkPass;