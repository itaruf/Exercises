
/**
 * Classe qui permet de contrôler grâce à ses méthodes les formats de données entrées par l'utilisateur
 */

class ValidateForm {
  /**
   * Méthode qui vérifie si le mail respecte la regex
   * @param {string} mail - mail
   * @returns {boolean} - retourne true si le mail respecte la regex, sinon false
   */
  validateMail(mail) {
    const regexMail = /^[\w \- .]+@[a-z]{3,10}\.[a-z]{2,5}$/;
    if (regexMail.test(mail)) return true;
    return false;
  }
 
  /**
   * Méthode qui vérifie si le mot de passe respecte la regex
   * @param {string} password - password
   * @returns {boolean} - retourne true si le mot de passe respecte la regex, sinon false
   */
  validatePassword(password) {
    const regexPassword = /^[\w \- . " ']{8,20}$/;
    if (regexPassword.test(password)) return true;
    return false;
  }

  /**
   * Méthode qui vérifie si l'url respecte la regex
   * @param {string} url - url
   * @returns {boolean} - retourne true si l'url respecte la regex, sinon false
   */
  validateUrl(url) {
    const regexUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-._]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    // regex récupérer sur https://www.regextester.com/93652 
    if (regexUrl.test(url)) return true;
    return false;
  }
}

export default new ValidateForm();
