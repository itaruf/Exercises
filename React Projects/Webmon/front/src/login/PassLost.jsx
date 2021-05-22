import React, { useState } from "react";
// eslint-disable-next-line
import passLostAction from "./passLostAction";
import "./passLost.css";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/button';
import { Alert } from "@material-ui/lab";


/**
 * Composant permettant d'afficher la page passlost et  gérer l'intéraction avec l'utilisateur 
 */
const PassLost = () => {
  const [state, setstate] = useState({
    mail: "",
    message: "",
    error: ""
  });

  const printError = () => {
    if (state.error) return <Alert id="errorLogin" severity="error">{state.error}</Alert>;
  };

  return (
    <div className="body">
      <div id="bannerBoxPassLost">

        <h2 id="h2PassLost">Réinitialisation du mot de passe</h2>

        <h3 id="h3PassLost">
          Entrez votre adresse e-mail et recevez un lien pour réinitialiser votre
          mot de passe.
        </h3>

        <div>{printError()}</div>

        <div className="inputWithIconPassLost">

          <div className="inputPassLost">
            <input placeholder="..."
              type="mail"
              value={state.mail}
              onChange={e => {
                setstate({
                  ...state,
                  mail: e.target.value
                });
              }}
            />
          </div>

          <i className="fa fa-envelope"></i>

        </div>
        <Button style={{ marginTop: "1.8em", textDecoration: "none" }} variant="contained" color="primary" onClick={() => passLostAction(state, setstate)}>
          Envoyer
        </Button>

        <p className="pLost">{state.message}</p>


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

export default PassLost;
