import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';

// Source : https://material-ui.com/components/dialogs/
/**
 * Composant qui permet l'affichage d'une fenêtre d'intéraction permettant à l'utilisateur la modification de son mot de passe
 */
export default function FormDialog() {
  const [open] = React.useState(true);
  let history = useHistory();
  const handleChangePassword = () => {
    // CALL CHPASS
    history.push("/settings");
  };

  const handleClose = () => {
    history.goBack();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modification du mot de passe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={{ marginLeft: "0.7em", marginRight: "1em" }}>
              Entrez un nouveau mot de passe contenant 8 caractères minimum
            </span>
          </DialogContentText>
          <br />
          <TextField style={{ marginLeft: "0.7em", marginRight: "0.7em", width: "94.5%" }}
            autoFocus
            margin="dense"
            id="name" placeholder="..."
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="secondary">
            <span className="MuiButton-label" style={{ color: "red", fontSize: "1em" }}>
              ANNULER
            </span>
          </Button>

          <Button onClick={handleChangePassword} color="primary">
            <span className="MuiButton-label" style={{ color: "blue", fontSize: "1em", marginRight: "2em" }}>
              VALIDER
            </span>
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}