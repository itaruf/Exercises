var nodemailer = require("nodemailer");
const configMail = require("./secretMail");

// Recoit en parametre le mail du destinataire ainsi qu'un objet paramMail contenant l'objet ainsi que le corp du mail

/**
 * Fonction qui recoit en parametre le mail du destinataire ainsi qu'un objet paramMail contenant l'objet ainsi que le corp du mail
 * @param {string} userMail -mail de l'utilisateur
 * @param {object} paramMail -schéma du mail composé de l'objet du mail et son corps (html)
 * @returns {Promise<void>} 
 */

const transmitMail = async (userMail,paramMail) => {
  // Configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: configMail.appMail,
      pass: configMail.mdpMail
    }
  });
  // Options du mail
  var mailOptions = {
    from: configMail.appMail, // expéditeur (nous même)
    to: userMail, // destinataire (récupéré en paramètre)
    subject: paramMail.subject, // Objet du mail (Configuré dans ./config/schemaMail)
    html: paramMail.html // Corps du mail (Configuré dans ./config/schemaMail)
      
  };
  // Envoie du mail
  return await transporter.sendMail(mailOptions);
};

exports.transmitMail = transmitMail;

