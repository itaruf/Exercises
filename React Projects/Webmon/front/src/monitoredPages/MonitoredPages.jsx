import React, { useState, useEffect } from "react";
import "./monitoredPages.css";
import { NavLink } from "react-router-dom";
import {
  addMonitoredPages,
  getMonitoredPages,
  deleteMonitoredPages,
} from "./monitoredPagesAction";
import { Alert } from "@material-ui/lab";
import config from "../config/config";



/**
 * Composant qui permet de gérer l'intéraction (ajout de pages, suppression de pages) et fait appel à getMonitoredPages pour récupérer les pages monitorés
 */
const MonitoredPages = () => {
  // l'attribut site permet de stocker localement les sites monitorés par l'utilisateur (recu depuis la BDD)
  const [state, setstate] = useState({
    error: "",
    url: "",
    site: [
      {
        url: "",
        id: "",
      },
    ],
  });

  // Si l'utilisateur est connecté , on appel la fonction getMonitoredPages qui va faire un appel serveur pour récupérer les pages monitorés
  // Sinon , on déconnecte l'utilisateur
  useEffect(() => {
    getMonitoredPages(state, setstate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Afficher les éventuelles erreur de format / du serveur ...
  const printErr = () => {
    if (state.error) return <Alert severity="error">{state.error}</Alert>;
  };

  //Rappel à l'utilisateur les formats à respecter avant d'entrer une URL
  const shoot = () => {
    alert("Veillez à respecter les formats suivants :  \nhttp://exemple.com\nhttps://exemple2.com \nPour vous faciliter la tâche, copiez directement le lien de la page à faire monitorer depuis votre navigateur web.");
  }
  // Affiche les pages uniquement s'il possède un token et qu'il est connecté
  return (
    <div className="body">

      <div className="bannerMP">

        <h2 className="h2MP">Mes pages monitorées</h2>

      </div>


      <div className="bannerBoxMP">

        <span className="bubbleMP">

          <div className="BannerSection">

            <div style={{ float: "right" }}>
              <i className="fa fa-question-circle faQuestion" onClick={shoot} ></i>
            </div>

            {/*</button>*/}

            <div className="labelDesignMP">
              <label htmlFor="add">Ajouter une page à faire monitorer :  </label>
            </div>
         
            <div className="divErrorMP">{printErr()}</div>

            <div className="inputUrl">
              <input
                type="text" placeholder="Entrez l'URL ici..."
                id="add"
                value={state.url}
                onChange={(e) => setstate({ ...state, url: e.target.value })}
              />
            </div>
            <div className="div-add">
              <br />

              <button className="btn-add"
                variant="contained" color="primary" onClick={() => addMonitoredPages(state, setstate)}>
                AJOUTER
    </button>
              <br />
            </div>
          </div>
        </span>
      </div>

      <div style={{ marginTop: "4em" }} className="bannerBoxMP">

        <span className="bubble2MP">
          <div className="BannerSection2">
            <section className="section">
              <div>
                <div className="labelDesignMP2">
                  <label style={{ marginLeft: "0.8em" }}>Supprimer</label>
                  <span style={{ marginLeft: "2em" }} className="span">Aperçu</span>
                  <span className="span">URL de la page monitorée</span></div>

              </div>

              {!!state.site
                ? state.site.map((element) => (
                  <div className="divMP" key={"site" + element.id}>
                    <button
                      className="btn-delete"
                      onClick={(e) => deleteMonitoredPages(e, state, setstate)}
                    >
                      <i id={element.id} className="fa fa-trash faDelete"></i>

                    </button>


                    <button
                      className="btn-see">
                      <a target="_blank" rel="noopener noreferrer" href={`${config.apiUrl}/site/${element.id}/${localStorage.getItem('token')}`}>
                        <i className="fa fa-image faImage"> </i>
                      </a>
                    </button>


                    {element.url}
                  </div>
                ))
                : null}
            </section>
          </div>
        </span>

      </div>

      <footer className="footer">
        <div style={{ justifyContent: "space-between", paddingTop: "1em", paddingBottom: "1em" }}>
          <li className="liHome">
            <NavLink id="linkToFaq" activeClassName="current" className="btn-nav" exact to="/faq">
              FAQ
            </NavLink>
            <span className="spanHome">Nous contacter :
              <i style={{ marginLeft: "1em" }} className="fa fa-envelope">
              </i> webmontest11@gmail.com
            </span>
          </li>
        </div>
      </footer>

    </div>
  );
};

export default MonitoredPages;
