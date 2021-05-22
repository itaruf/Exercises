import format from "../utils/ValidateForm";
import apiCall from "../helpers/apiCall";



/**
 * 
 * Fonction qui permet d'envoyer requête HTTP permettant de récupérer les pages monitorés d'un utilisateur, si le token n'est pas valide alors l'utilisateur est renvoyé vers la page de login
 * @param {object} state - état local du composant MonitoredPages (sites)
 * @param {Function} setstate -setter (mutateur)
 * @returns {void}
 */
// Récupère les pages monitorés par l'utilisateur et les stocke dans l'état local du composant MonitoredPages
export async function getMonitoredPages(state, setstate) {
  const data = await apiCall("GET","monitoredPages",null);
  if(data.errorToken){
    localStorage.clear();
    window.location.href = "/login";
  }
  if (data.error) {
    setstate({
      ...state,
      error: data.error,
    });
  } else {
    setstate({
      ...state,
      error: "",
      site: data.site,
    });
  }

}

/**
 * Fonction qui permet d'envoyer une requête HTTP permettant la suppression d'un site monitoré par un utilisateur, redirige sur la page d'authentification si le token n'est pas valide
 * @param {object} e - objet renvoyé par l'évènement onClick 
* @param {object} state - état local du composant MonitoredPages (sites)
 * @param {Function} setstate -setter (mutateur)
 * @returns {void}
 */
// Permet de ne plus monitoré une page
export async function deleteMonitoredPages(e, state, setstate) {
  const data = await apiCall("DELETE",`delete/${e.target.id}`,null);
  if(data.errorToken){
    localStorage.clear();
    window.location.href = "/login";
  }
  if(state.error)
    setstate({
      ...state,
      error : data.error
    })
  else
    setstate({
      ...state,
      error : "",
      site: data.site
    });

}

/**
 * Fonction qui permet d'envoyer une requête HTTP permettant l'ajout d'un site à monitorer par un utilisateur, redirige sur la page d'authentification si le token n'est pas valide
 * @param {object} state - état local du composant MonitoredPages (sites)
 * @param {Function} setstate -setter (mutateur)
 * @returns {void}
 */
// Permet d'ajouter une page à sa liste des pages monitorés
export async function addMonitoredPages(state, setstate) {
  if (!state.url) {
    setstate({
      ...state,
      error: "Tous les champs doivent etre renseignés"
    });
    return;
  }
  if (!format.validateUrl(state.url)) {
    setstate({
      ...state,
      url: "",
      error: "Le format de l'url est incorrect"
    });
    return;
  }

  
  const data = await apiCall("POST","add",{url: state.url});
  if(data.errorToken){
    localStorage.clear();
    window.location.href = "/login";
  }
  if(data.error){
    setstate({
      ...state,
      error : data.error,
      url : ""
    });
  }
  else{
    setstate({
      ...state,
      site: data.site,
      error : "",
      url : ""
    });
  }
}

