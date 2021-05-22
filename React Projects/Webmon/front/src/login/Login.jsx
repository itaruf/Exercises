import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import onSave from "./loginAction";
import "./login.css";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/button';

/**
 * Composant permettant d'afficher la page login et  gérer l'intéraction avec l'utilisateur  
 */
const Login = () => {
  const [state, setstate] = useState({
    mail: "",
    password: "",
    error: "",
    isConnected: false,
  });
  const renderRedirect = () => {
    if (state.isConnected || localStorage.getItem('token')) window.location.href = "/monitoredPages";
  };
  const printError = () => {
    if (state.error)
      return (
        <Alert id="errorLogin" severity="error">
          {state.error}
        </Alert>
      );
  };

  // Si l'utilisateur n'a pas de token on affiche le composant Login Sinon on le redirige à la route /monitoredPages
  return (
    (
      <div className="body">
        <div className="bannerBoxConnexion">
          <h2 className="h2Connexion">Connectez-vous !</h2>

          <div>{printError()}</div>
          <p className="pConnexion">{renderRedirect()}</p>

          <div className="inputWithIconLogin inputIconBg">
            <div id="divConnexion">
              <label htmlFor="mailLogin">
                Votre adresse e-mail :{" "}
              </label>
            </div>

            <div className="inputLogin">
              <input
                type="mail"
                id="mailLogin"
                placeholder="..."
                value={state.mail}
                onChange={(e) => {
                  setstate({
                    ...state,
                    mail: e.target.value,
                  });
                }}
              />
              <i className="fa fa-envelope"> </i>
            </div>

          </div>
          <br />
          <div className="inputWithIconLoginPass inputIconBg">
            <div id="divConnexion">
              <label htmlFor="passwordLogin">
                Votre mot de passe :{" "}
              </label>
            </div>

            <div className="inputLoginPass">
              <input
                type="password"
                id="passwordLogin"
                placeholder="..."
                value={state.password}
                label="Mot de passe"
                variant="outlined"
                onChange={(e) => {
                  setstate({
                    ...state,
                    password: e.target.value,
                  });
                }}
              />
              <i className="fa fa-asterisk"> </i>
            </div>

          </div>

          <br />

          <Button style={{ marginTop: "0em", textDecoration: "none" }} variant="contained" color="primary" onClick={() => onSave(state, setstate)}>
            SE CONNECTER
      </Button>
          <br />
          <p>
            <Link id="linkToPassLost" className="linkDesignLogin under" to="/passlost">
              {" "}
        Mot de passe oublié ?{" "}
            </Link>
          </p>
          <p style={{ fontFamily: " 'Lucida Sans Unicode', 'Lucida Grande', sans-serif", color: "rgb(29, 29, 29)", letteSpacing: "0.5px!important" }}>
            Nouveau ?{" "}
            <Link id="linkToRegister" className="linkDesignLogin under" to="/register">
              Inscrivez-vous !
      </Link>
          </p>
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
    )
  )


};

export default Login;
