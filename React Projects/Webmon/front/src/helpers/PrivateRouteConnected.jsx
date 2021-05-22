import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Source : https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146



/**
 * Composant qui redirige vers la page monitoredpages si l’utilisateur essaie d’accéder à une ressource uniquement disponible en mode non connecté (page login ou page register)
 */

const PrivateRouteConnected = ({component: Component ,...rest }) => (
  <Route {...rest}
  render = {props =>  !localStorage.getItem("token")  ? 
    (<Component {...props} />) : (
      <Redirect to = {
        {
          pathname : "/monitoredPages",
          state : {from: props.location}
        }}
        />
        )
      }
      />
    );

export default PrivateRouteConnected;