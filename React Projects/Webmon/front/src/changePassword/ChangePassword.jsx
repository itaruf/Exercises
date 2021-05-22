import React, { useState } from "react";
import changePass from "./changePasswordAction";
import {useParams} from "react-router-dom";
import { Alert } from "@material-ui/lab";
import "./changePassword.css";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/button';


/**
 * Composant qui affiche la page lorsqu'il y a un token dans l'url (provenant du mail de réinitialisation) et gère l'intéractivité avec l'utilisateur, SINON on le redirige à la page mot de passe oublié
 */
const ChangePassword = () => {

  let {token} = useParams(); // Récupère le token contenu dans l'URL
  
  const [state, setstate] = useState({
    error: "",
    password: "",
    passwordVerify: "",
    token: token,
    redirect : false // Redirigé l'utilisateur une fois le mot de passe changé
  });

  
  const renderRedirect = e => {
    window.location.href="/login" // Redirection à la route /login
  };
  const redirectToPassLost = () => {
    window.location.href="/passLost" // Redirection à la route /passlost
  }
  
  const printMsg = () => {
    if (state.redirect) {
      setTimeout(renderRedirect, 3000); // Attendre 3 secondes avant de redirigé l'utilisateur vers la route /login pour qu'il puisse lire le message
      return (
        <Alert severity="success">
          Le mot de passe a bien été modifié !
        </Alert>
      );
    }
    if (state.error) return <Alert severity="error">{state.error}</Alert>;
  };
  
  //Rappel à l'utilisateur les contraintes à respecter avant de créer un mot de passe.
  const shoot = () => {
    alert("Veillez à respecter la contrainte des 8 caractères minimums.");
  };
  
  return token ? (
    <div className="body">
      <div className="bannerBoxChangePass">
        <h2 className="h2ChangePass">Changez votre mot de passe</h2>
        <div>{printMsg()}</div>
        <i className="fa fa-question-circle faChangeMP" onClick={shoot} > Format à respecter</i>


        <div className="inputWithIconChangePass inputIconBg">
          <div id="divChangePass">
            <label className="labelDesignChangePass">Nouveau mot de passe :
            </label>
          </div>
          <div className="inputChangePass">
            <i className="fa fa-asterisk">
            </i>
            <input
              id="password"
              type="password" placeholder="..."
              required
              minLength="8"
              onChange={e => {
                setstate({
                  ...state,
                  password: e.target.value
                });
              }}
            />
          </div>
        </div>
        <br />
        <div class="inputWithIconChangePassVerify inputIconBg">
          <div id="divChangePass">
            <label className="labelDesignChangePass">Ressaisissez le nouveau mot de passe
            </label>
          </div>

          <div className="inputChangePassVerify">
            <i className="fa fa-asterisk"></i>
            <input
              id="passwordVerify"
              type="password" placeholder="..."
              required
              minLength="8"
              onChange={e => {
                setstate({
                  ...state,
                  passwordVerify: e.target.value
                });
              }}
            />
          </div>
        </div>
        <Button style={{ marginBottom: "2em", textDecoration: "none" }} variant="contained" color="primary" disabled={false} onClick={() => changePass(state, setstate)}>Changer
        </Button>
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
  ) : <p>{redirectToPassLost()}</p>
};

export default ChangePassword;
