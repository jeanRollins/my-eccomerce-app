import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Grid } from '@material-ui/core';
import { MyAvatar } from './MyAvatar';
import { AuthContext } from '../../stateManagement/context/AuthContext';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export function Navbar(props) {

  const { user, dispatch } = useContext(AuthContext);

  const exitSession = e => {
    e.preventDefault();

    dispatch({
      type: 'CLOSE_SESSION'
    });
  }

  return (
    <>
      <AppBar position="fixed" className="bg-primary height-header">
        <Toolbar>
          <Grid
            className="m-top-1"
            container
          >

            <Grid item sm={1} md={2} lg={4} >
            </Grid>

            <Grid item sm={1} md={2} lg={4} className="d-inline-flex">
              <MyAvatar
                type={'user'}
              />
              <div className="text-secondary font-weight  m-top-1 m-left-1">
                {user.names}
              </div>
            </Grid>

            <Grid item sm={1} md={2} lg={4} >
              <a
                href="#"
                className="link"
                onClick={e => exitSession(e)}
              >
                <ExitToAppIcon />
                  Cerrar sesión
                </a>
                

            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>

    </>
  );
}