const jwt = require("jsonwebtoken");
const configToken = require("../config/secretjwt");

// Creation de schéma de mail afin de mieux modulariser le code



/**
 * Fonction qui créer le schéma du mail permettant d'alerter un utilisateur des modifications d'un ou de plusieurs sites
 * @param {Array<object>} sites - Tableau d'objet contenant une propriété url ( [{url : "urlsite"}] )
 * @returns {object} - Renvoie un objet contenant le corps et l'objet du mail respectivement (subject,html)
 */


const alertUserSchema = sites => {
  let textAlert;
  if(sites.length == 1)
    textAlert = `Un changement a été détecté sur <i>${sites[0].url}</i><br/> Consultez la page ici : <a style = "color : green" href = ${sites[0].url}>${sites[0].url}</a> <br> Cordialement,<br/>L'équipe Webmon.`
    
  

  
  if(sites.length > 1){
    textAlert = `Plusieurs changements ont été détectés. <br/> Voici la liste des sites ayant subi une modification : <br/>`
    for(let i = 0 ; i < sites.length; i++)
      textAlert += `&#x2022;&emsp;<a style = "color : green " href = ${sites[i].url}>${sites[i].url}</a><br/>`

    textAlert +=  "Cordialement,<br/>L'équipe Webmon."
    
  }
  return {
    subject : sites.length == 1 ? "Un site a été modifié ! " : "Plusieurs sites ont été modifiés ! ",
    html : textAlert
  }
}
  

   
// Schéma du mail de confirmation

/**
 * Fonction qui créer le schéma du mail de confirmation envoyé suite à une inscription
 * @param {string} mail - Mail de l'utilisateur venant de s'inscrire
 * @returns {object} - Renvoie un objet contenant le corps et l'objet du mail respectivement (subject,html)
 */



const mailConfirmSchema = mail => {
  const tokenMailConfirm = jwt.sign(
    { mail: mail },
    configToken.secretMailToken,
    {expiresIn : "15m"}
  );
  const textConfirm =
    "Vous n'êtes plus qu'à quelques pas de profiter des services de <b>Webmon</b> ! Cliquez sur ce lien pour confirmer votre adresse e-mail et activer votre compte : </br>" +
    '<a style = "color : green " href= "http://localhost:8080/confirmation/' +
    tokenMailConfirm +
    '"> http://webmon-lien-de-confirmation</a>' +
    "<br/>Si vous n'avez pas enregistré d'adresse e-mail, vous pouvez ignorer ce message.<br/>Cordialement,<br/>L'equipe Webmon";

  return {
    subject: "Confirmez votre adresse e-mail",
    html: textConfirm
  };
};




// Schéma du mail de réinitialisation du mot de passe
/**
 * Fonction qui permet de créer un schéma de mail pour un utilisateur souhaitant modifier son mot de passe
 * @param {string} mail - Mail de l'utilisateur
 * @returns {object} - Renvoie un objet contenant le corps et l'objet du mail respectivement (subject,html)
 */


const passLostSchema = mail => {
  const tokenPassLost = jwt.sign(
    { mail: mail },
    configToken.secretPassLostToken
  );
  const textPassLost =
    "Cliquez sur ce lien pour réinitialiser votre mot de passe : </br>" +
    '<a style = "color : green " href= "http://localhost:8080/passlost/confirm/' +
    tokenPassLost +
    '"> http://webmon-reinitialisation-motdepasse</a>' +
    "<br/><br/>Cordialement,<br/>L'equipe Webmon";
  return {
    subject: "Réinitialisez votre mot de passe ",
    html: textPassLost
  };
};

exports.passLostSchema = passLostSchema;
exports.mailConfirmSchema = mailConfirmSchema;
exports.alertUserSchema = alertUserSchema;
