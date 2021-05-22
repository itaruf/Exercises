import React, { useState, useEffect } from "react";
import { getMail } from "./settingsAction";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/button';
import { NavLink } from "react-router-dom";
import "./settings.css";

/**
 * Composant qui permet l'affichage de la page paramètres du compte ainsi que de gérer les intéractions avec celles-ci
 */
const Settings = () => {
  const [state, setstate] = useState({
    mail: "",
  });
  let history = useHistory();

  // Lance la fonction getMail permettant de récupérer le mail de l'utilisateur courant
  // La fonction est lancé uniquement lorsque le composant se charge
  useEffect(() => {
    if (state.mail === "") {
      getMail(state, setstate);
    }
  }, [state]);
  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div className="body">

      <div className="bannerSettings">


        <h2 className="h2Settings">Paramètres du compte</h2>


      </div>



      <div className="bannerBoxSettings">

        <span className="bubbleSettings">

          <div className="bannerSectionSettings">


            <h2 className="h1Settings">
              Modifier votre adresse e-mail
        </h2>


            <div label="Adresse e-mail">
              <fieldset>

                <p className="pSettings">Votre adresse e-mail actuelle :</p>

                <br />

                <div className="inputWithIconSettings inputIconBg">

                  <div className="inputSettings">

                    <input type="mail" value={state.mail} readOnly />
                    <i className="fa fa-envelope"></i>

                  </div>
                </div>

                <br />

                <Button variant="contained" color="primary">
                  Modifier
             </Button>
                <br />


              </fieldset>

            </div>

          </div>
        </span>
      </div>

      <div style={{ background: "linear-gradient(to right,rgb(51, 235, 255) , rgb(95, 174, 255),rgb(152, 130, 255))" }}>
        <div className="bannerBoxSettings2">

          <span className="bubble2Settings">
            <div className="bannerSectionSettings">

              <h2 className="h1Settings">
                Modifier votre mot de passe
        </h2>

              <div label="Mot de passe">

                <fieldset>

                  <label htmlFor="password"></label>

                  <br />

                  <Button variant="contained" color="primary" onClick={() => handleClick("/settings/password")}>
                    Modifier
              </Button>
                  <br />

                </fieldset>

              </div>

            </div>
          </span>
        </div>

      </div>
      <div className="bannerBoxSettings3">
        <span className="bubble3Settings">
          <div className="bannerSectionSettings">

            <h2 className="h1Settings">
              Suppression du compte
        </h2>

            <div label="Suppression du compte">

              <fieldset>

                <div>

                  <p className="pSettings2">La suppression du compte est une action définitive et irréversible.

                <br />
                    <br />
                Toutes vos données personnelles ainsi que tous les sites web
                <br />
                mis sous surveillance seront supprimés.
              </p>

                </div>

                <br />
                <Button variant="contained" color="primary" onClick={() => handleClick("/settings/confirm")}>
                  Supprimer le compte
              </Button>
                <br />

              </fieldset>
            </div>
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

export default Settings;
