import format from "../utils/ValidateForm";
import apiCall from "../helpers/apiCall";


/**
 * Fonction qui vérifie le format des données entrées par l'utilisateur puis si celles-ci 
 * sont correctes envoie une requête au serveur et gère la réponse en modifiant le state
 * @param {object} state - état local du composant PassLost
 * @param {Function} setstate -setter (mutateur)
 * @returns {void}
 */
// Envoie au serveur le mail de la personne voulant réinitialiser son mot de passe
async function passLostAction(state, setstate) {
  if (!state.mail) {
    setstate({
      ...state,
      error: "Tous les champs doivent etre renseignés"
    });
    return;
  }
  if (!format.validateMail(state.mail)) {
    setstate({
      ...state,
      error: "Le mail est incorrect"
    });
    return;
  }
  const data = await apiCall("POST","passlost",{mail: state.mail});
  if (data.error) {
    setstate({
      ...state,
      error: data.error,
      mail : ""
    });
  } else {
    setstate({
      ...state,
      message: data.message,
      mail : ""
    });
  }

}

export default passLostAction;