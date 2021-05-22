import React, { useState, useEffect } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { getMail } from "../settings/settingsAction";
import "./NavBarConnect.css";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PageviewIcon from '@material-ui/icons/Pageview';

/**
 * Composant qui permet l'affichage de la Navbar et de l'intéraction avec celle-ci (en mode conencté)
 */
const NavBarConnect = () => {
  const [state, setstate] = useState({
    redirect: false,
    path: "/",
    mail: "",
  });
  // Permet de récupérer le mail de l'utilisateur courant, s'il y a une erreur , on renvoie l'utilisateur à la route /login
  useEffect(() => {
    if (state.mail === "") {
      getMail(state, setstate);
    }
  }, [state]);
  const renderRedirect = () => {
    if (state.redirect) {
      return <Redirect to={state.path} />;
    }
  };
  // Déconnecte l'utilisateur en supprimant son token du localStorage et en le redirigeant vers la route /home
  const LogOut = () => {
    localStorage.clear();
    window.location.href = "/home";
  };

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <nav className="navConnect">

      <NavLink id="linkToHome" exact to="/home">
        <h1 className="h1Nav"> W E B M O N </h1>
      </NavLink>

      <div style={{ float: "right" }}>
        <Button className="style"
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <li>
            <i className="fa fa-user user">  <a className="a">{state.mail}</a></i>
            <i className="fa fa-caret-down caretDown"></i>
          </li>
          {renderRedirect()}
        </Button>

        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* eslint jsx-a11y/anchor-is-valid: 0 */}

          <NavLink className="Nav" exact to="/monitoredPages">
            <StyledMenuItem>

              <ListItemIcon>
                <PageviewIcon fontSize="small">
                </PageviewIcon>
              </ListItemIcon>

              <ListItemText>
                <NavLink className="NavLink" exact to="/monitoredPages">Mes pages monitorées</NavLink>
              </ListItemText>

            </StyledMenuItem>
          </NavLink>


          <NavLink className="NavLink" exact to="/settings">
            <StyledMenuItem className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root WithStyles(ForwardRef(MenuItem))-root-272 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">

              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>

              <ListItemText><div className ="divNB">
                <NavLink className="NavLink" exact to="/settings">Paramètres du compte
              </NavLink></div>
              </ListItemText>

            </StyledMenuItem>
          </NavLink>

          <div onClick={() => LogOut()}>
            <StyledMenuItem className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root WithStyles(ForwardRef(MenuItem))-root-272 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">

              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>

              <ListItemText>
                <button className="btn-logOut" onClick={() => LogOut()}>Déconnexion
              </button>
              </ListItemText>

            </StyledMenuItem>
          </div>
        </StyledMenu>
      </div>
    </nav>

  );
};

export default NavBarConnect;
