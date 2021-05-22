import format from "../utils/ValidateForm";
import apiCall from "../helpers/apiCall";


/**
 * Fonction qui vérifie le format des données entrées par l'utilisateur puis si celles-ci 
 * sont correctes envoie une requête au serveur et gère la réponse en modifiant le state et en ajoutant un token au localstorage
 * @param {object} state - état local du composant Login
 * @param {Function} setstate -setter (mutateur)
 * @returns {void}
 */
 async function onSave(state, setstate) {

  if (!state.mail || !state.password) {
    setstate({
      ...state,
      error: "Tous les champs doivent etre renseignés"
    });
    return;
  }
  if (!format.validateMail(state.mail)) {
    setstate({
      ...state,
      error: "Le format du mail est incorrect"
    });
    return;
  }
  if (!format.validatePassword(state.password)) {
    setstate({
      ...state,
      error: "Le format du mot de passe est incorrect"
    });
    return;
  }
  // Envoie au serveur les données entrées par l'utilisateur qui renvoie une erreur si les données sont fausses ou incomplète , sinon un JWT
  const body = {mail: state.mail,password: state.password}
  const data = await apiCall("POST","login",body);

  if (data.error) {
    setstate({
      ...state,
      password: "",
      error: data.error
    });
  } else {
    setstate({
      ...state,
      password: "",
      error: "",
      isConnected: true
    });
    // Met le token recu par le serveur dans le local storage
    localStorage.setItem("token", data.token);
  }

}

export default onSave;