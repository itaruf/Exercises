import format from "../utils/ValidateForm";
import apiCall from "../helpers/apiCall";

/**
 * Fonction qui vérifie le format des données entrées par l'utilisateur puis si celles-ci sont correctes envoie une requête au serveur et gère la réponse en modifiant le state
 * @param {object} state - état local du composant ChangePassword 
 * @param {Function} setstate - setter (mutateur) 
 * @returns {void}
 */
 async function changePass(state, setstate) {
  // Vérifie que les champs ont bien été remplis (password et passwordVerify sont non nul ou non undefined)
  if (!state.password || !state.passwordVerify) {
    setstate({
      ...state,
      error: "Tous les champs doivent etre renseignés"
    });
    return;
  }
  // Vérifie le format du mot de passe
  if (!format.validatePassword(state.password)) {
    setstate({
      ...state,
      password : "",
      passwordVerify : "",
      error: "Le format du mot de passe est incorrect"
    });
    return;
  }
  if (state.password !== state.passwordVerify) {
    setstate({
      ...state,
      password: "",
      passwordVerify : "",
      error: "Les mot de passes doivent être identiques !"
    });
  }
  // Envoie au serveur le nouveau mot de passe ainsi que le token
  // Si le serveur renvoie une erreur on l'affecte au state , sinon on met redirect à true => redirection à la page d'authentification
  const body = {
    password: state.password,
    passwordVerify: state.passwordVerify,
    token: state.token
  }
  const data = await apiCall("PUT","changePassword",body);
  if (data.error) {
    setstate({
      ...state,
      password : "",
      passwordVerify: "",
      error: data.error
    });
  }
  else{
    setstate({
      ...state,
      password : "",
      passwordVerify: "",
      redirect : true
    })
  }

}

export default changePass;
