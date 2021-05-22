import React, { useState } from "react";
import onSave from "./registerAction";
import { Alert } from "@material-ui/lab";
import { NavLink, useHistory } from "react-router-dom";
import "./register.css";
import Button from '@material-ui/core/button';

/**
 * Composant qui permet l'affichage de la register et de l'intéraction avec celle-ci 
 */
const Register = () => {
  const [state, setstate] = useState({
    mail: "",
    password: "",
    passwordVerify: "",
    error: "",
    redirect: false
  });
  let history = useHistory();
  const renderRedirect = () => {
    history.push("/login")// Redirection à la route /login
  };

  const printMsg = () => {
    if (state.redirect) {
      setTimeout(renderRedirect, 3000); // Attendre 3 secondes avant de redirigé l'utilisateur vers la route /login
      return (
        <Alert severity="success">
          Votre inscription a été prise en compte ! <br /> Un mail de confirmation a
          été envoyé à
          <br /> <div style={{ textAlign: "center" }}>
            {state.mail}</div>
        </Alert>
      );
    }
    if (state.error) return <Alert id="error" severity="error">{state.error}</Alert>;
  };

  //Rappel à l'utilisateur les contraintes à respecter avant de définir un mot de passe.
  const shoot = () => {
    alert("Veillez à respecter la contrainte des 8 caractères minimums pour définir votre mot de passe.");
  };

  return (

    <div className="body">

      <div id="bannerBoxInscription">

        <h2 id="h2Inscription"> Créer un compte</h2>
        <i className="fa fa-question-circle faChangeMP" onClick={shoot} > Format à respecter</i>

        <div>{printMsg()}</div>

        <p></p>

        <div class="inputWithIconRegister inputIconBg">

          <div id="divInscription">
            <label htmlFor="mailRegister">Votre adresse e-mail :</label>
          </div>

          <div class="inputRegister">
            <input
              type="mail"
              id="mailRegister" placeholder="..."
              name="mail"
              required
              maxLength="40"
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

        <br />

        <div class="inputWithIconRegisterPass inputIconBg">
          <div id="divInscription">
            <label htmlFor="password">Votre mot de passe : </label>
          </div>

          <div class="inputRegisterPass">
            <input
              type="password"
              id="password" placeholder="..."
              name="password"
              required
              maxLength="30"
              value={state.password}
              onChange={e => {
                setstate({
                  ...state,
                  password: e.target.value
                });
              }}
            />
          </div>
          <i className="fa fa-asterisk"></i>
        </div>


        <br />

        <div class="inputWithIconRegisterPassVerify inputIconBg">
          <div id="divInscription">
            <label htmlFor="passwordVerify">Confirmer votre mot de passe : </label>
          </div>


          <div class="inputRegisterPassVerify">
            <input
              type="password"
              id="passwordVerify" placeholder="..."
              name="passwordVerify"
              required
              maxLength="30"
              value={state.passwordVerify}
              onChange={e => {
                setstate({
                  ...state,
                  passwordVerify: e.target.value
                });
              }}
            /> </div>
          <i className="fa fa-asterisk"></i>
        </div>

        <h3 id="h3Inscription">
          En créeant ce compte, vous vous engagez à respecter nos conditions.
    </h3>
        <Button style={{ marginTop: "0em", textDecoration: "none" }} variant="contained" color="primary" onClick={() => onSave(state, setstate)}>S'INSCRIRE</Button>
        <p></p>
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

export default Register;
