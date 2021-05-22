import React  from "react";
import Home from "./page/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import Faq from "./faq/Faq";
import PassLost from "./login/PassLost";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Layout from "./layout";
import MonitoredPages from './monitoredPages/MonitoredPages';
import PrivateRoute from './helpers/PrivateRoute';
import ChangePassword from "./changePassword/ChangePassword";
import Settings from "./settings/Settings";
import PrivateRouteConnected from "./helpers/PrivateRouteConnected";
import alertDialog from "./settings/alertDialog";
import formDialog from "./settings/formDialog";


/**
 * Fonction principale qui permet de gérer le routage de l'application
 */
function App() {
  
  let token = localStorage.getItem("token"); // Récupère le token stocké dans le localStorage
  return (
    <div className="App">
      <Router>{/* Permet de configurer les routes et d'afficher un composant selon la route*/}
          <Layout isConnected={!!token}> {/* Permet de configurer la Navbar selon la présence d'un token ou non*/}
            <Switch> {/* Permet d'autoriser l'affichage d'un seul composant à la fois */}
              <Route exact path="/home" component={Home} />
              <PrivateRouteConnected exact path="/register" component={Register}  />
              <PrivateRouteConnected exact path="/login" component={Login} />
              <Route exact path="/faq" component={Faq} />
              <PrivateRouteConnected exact path="/passlost" component={PassLost} />
              <PrivateRoute path = "/monitoredPages" component={MonitoredPages} /> {/* Route privé => si pas de token redirection à la route /login */}
              <Route path = "/changePassword/:token" component={ChangePassword} />
              <PrivateRoute exact path = "/settings" component = {Settings} />
              <PrivateRoute path = "/settings/confirm" component = {alertDialog} />
              <PrivateRoute path = "/settings/password" component = {formDialog} />
              <Route path = "/" component = {() => <p>{window.location.href = "/home"}</p>}/>  {/* Si l'url ne coincide avec aucune des routes précédentes , on redirife l'utilisateur à /home*/}
            </Switch>
          </Layout>
      </Router>
    </div>
  );
}

export default App;
