import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";
import { deleteAccount } from "./settingsAction";


// Source : https://material-ui.com/components/dialogs/
/**
 * Composant qui permet l'affichage d'une fenêtre d'intéraction permettant à l'utilisateur de confirmer la suppression de son compte ou de l'annuler
 */
const AlertDialog = () => {
  const [open] = useState(true);
  let history = useHistory();

  const handleDeleteAccount = () => {
    deleteAccount();
    localStorage.clear();
    history.push("/home");
  };

  const handleClose = () => {
    history.goBack();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Voulez-vous vraiment supprimer votre compte ? "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Si vous supprimez votre compte, nous supprimerons l'ensemble des sites que vous monitorez.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            <span className="MuiButton-label" style={{ color: "red", fontSize: "1em" }}>
              ANNULER
            </span>
          </Button>
          <Button onClick={handleDeleteAccount} color="primary">
            <span className="MuiButton-label" style={{ color: "blue", fontSize: "1em" }}>
              SUPPRIMER
            </span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;