import React from "react";
import NavBarConnected from "../navbar/NavBarConnect";
import NavBar from "../navbar/Navbar";

// renvoie la NavBar en mode connecté si l'utilisateur est "connecté" sinon renvoie la NavBar 
// Renvoie aussi tout ses fils c'est à dire l'ensemble des composants qu'il englobe (voir ../App)

/**
 * Composant qui permet un affichage conditionnel de la barre de la navbar
 * @param {boolean} isConnected - booléen indiquant si l'utilisateur est connecté ou non
 */
const index = ({ isConnected, children }) => {
  return (
    <div>
      <div className="topnav">
        {isConnected ? <NavBarConnected  /> : <NavBar />}
      </div>
      {children} 
    </div>
  );
};

index.propTypes = {};

export default index;
