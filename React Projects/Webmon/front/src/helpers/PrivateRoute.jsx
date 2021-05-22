import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Source : https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146


/**
 * Composant qui redirige vers la page login si l’utilisateur n’est pas authentifié
 */
// Renvoie le composant SI l'utilisateur possède un token SINON redirection à /login
const PrivateRoute = ({component: Component ,...rest }) => (
  <Route {...rest}
  render = {props =>  !!localStorage.getItem("token")  ? 
    (<Component {...props} />) : (
      <Redirect to = {
        {
          pathname : "/login",
          state : {from: props.location}
        }}
        />
        )
      }
      />
    );

export default PrivateRoute;