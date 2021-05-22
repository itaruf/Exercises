import config from "../config/config";


/**
 * Fonction qui configure le header de la requête HTTP
 * @returns {object} Renvoie le header de la requête HTTP selon la présence d'un token ou non
 */
const getHeader = () => {
  
  return localStorage.getItem("token") ? ({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token")
  })
  :
  ({
    Accept: "application/json",
    "Content-Type": "application/json"
  })
}

/**
 * Fonction qui permet de configurer et d'envoyer une requête pour les méthodes POST et PUT
 * @param {string} path - chemin d'acccès à la ressource au serveur (endpoint)
 * @param {object} body - contient le corps de la requête HTTP
 * @param {string} method - méthode HTTP utilisée
 * @returns {object} les données de la réponse au format JSON
 */
const POSTorPUT_API = async (path,body,method) => {
  return await fetch(`${config.apiUrl}/${path}`,{
    method : method,
    headers : getHeader(),
    body : JSON.stringify(body)
  }).then(data => data.json());
}


/**
 * Fonction qui permet de configurer et d'envoyer une requête pour les méthodes GET et DELETE
 * @param {string} path - chemin d'acccès à la ressource au serveur (endpoint)
 * @param {string} method - méthode HTTP utilisée 
 * @returns {object} les données de la réponse au format JSON
 */
const GETorDELETE_API = async (path,method) => {
  return await fetch(`${config.apiUrl}/${path}`,{
    method : method,
    headers : getHeader()
  }).then(data => data.json());
}

/**
 * Fonction qui permet de récupérer les données de la requête
 * @param {string} method - méthode HTTP utilisée
 * @param {string} path - chemin d'acccès à la ressource au serveur (endpoint)
 * @param {object} body - contient le corps de la requête HTTP
 * @returns {object} les données de la réponse au format JSON
 */
const apiCall = async (method,path,body) => {
  if(method === "POST" || method === "PUT"){
    return POSTorPUT_API(path,body,method); 
  }
  if(method === "GET" || method === "DELETE"){
    return GETorDELETE_API(path,method);
  }  
}

export default apiCall;
