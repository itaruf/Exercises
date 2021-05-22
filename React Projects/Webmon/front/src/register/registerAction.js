import format from "../utils/ValidateForm";
import apiCall from "../helpers/apiCall"

/**
 * Fonction qui vérifie le format des données entrées par l'utilisateur pour l'inscription puis si celles-ci 
 * sont correctes envoie une requête au serveur et gère la réponse en modifiant le state
 * @param {object} state - état local du composant Register
 * @param {Function} setstate -setter (mutateur)
 * @returns {void}
 */
async function onSave(state, setstate) {
  // Vérifie que les champs ne sont pas null ou undefined
  if (!state.mail || !state.password || !state.passwordVerify) {
    setstate({
      ...state,
      error: "Tous les champs doivent etre renseignés"
    });
    return;
  }
  // Vérifie que le format est correct, Si le format est correct, la fonction renvoie true SINON false
  if (!format.validateMail(state.mail)) {
    setstate({
      ...state,
      error: "Le format du mail est incorrect",
      mail: ""
    });
    return;
  }
  // Idem
  if (!format.validatePassword(state.password)) {
    setstate({
      ...state,
      error: "Le format du mot de passe est incorrect",
      password: "",
      passwordVerify: ""
    });
    return;
  }
  if (state.password !== state.passwordVerify) {
    setstate({
      ...state,
      error: "Les mots de passes doivent être identiques ! ",
      password: "",
      passwordVerify: ""
    });
    return;
  }
  const body = {
    mail: state.mail,
    password: state.password,
    passwordVerify: state.passwordVerify
  }
  const data = await apiCall("POST","register",body);
  // Si le serveur renvoie un message d'erreur , on l'affiche.
  if (data.error) {
    setstate({
      ...state,
      error: data.error
    });
    //SINON , on met redirect à TRUE ==> Redirection à la route /login
  } else {
    setstate({
      ...state,
      redirect: true
    });
  }
}


export default onSave;