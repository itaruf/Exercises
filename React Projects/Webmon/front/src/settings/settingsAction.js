import apiCall from "../helpers/apiCall";
// Envoie une requête qui supprime le compte de l'utilisateur courant en Base de données
/**
 * Fonction qui permet d'envoyer une requête HTTP pour supprimer le compte d'un utilisateur(l'id de l'utilisateur est contenu dans le token)
 */
export async function deleteAccount() {
  // await apiCall("DELETE","deleteAccount",null);
  await fetch("http://localhost:8080/deleteAccount", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  })
}

/**
 * Fonction qui permet de récupérer le mail de l'utilisateur, si le token est invalide il est redirigé vers la page login 
 * @param {object} state - état local du composant Settings
 * @param {Function} setstate -setter (mutateur)
 * @returns {void}
 */
// Récupère le mail de l'utilisateur courant grâce à son ID stocké dans le payload du token
export async function getMail(state, setstate) {
  const data = await apiCall("GET", "getmail", null);
  if (data.errorToken) {
    localStorage.clear();
    window.location.href = "/login";
  }
  if (data.error) {
    localStorage.clear();
    window.location.href = "/login";
    return;
  } else {
    setstate({
      ...state,
      mail: data.mail
    });
  }

}