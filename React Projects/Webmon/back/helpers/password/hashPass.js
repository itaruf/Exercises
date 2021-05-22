const bcrypt = require("bcrypt");


/**
 * Fonction qui a pour but d'hacher un mot de passe
 * @param {String} password  - Mot de passe à hacher
 * @returns {String} - Renvoie le mot de passe haché
 */

const hashPass = async password => {
    // Generer une clé secrete pour effectuer le salage du mot de passe et eviter les colisions
    const salt = await bcrypt.genSalt();
    // Hachage du mot de passe avec la clé secrète
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

exports.hashPass = hashPass;
