import React from 'react'

import Header from '../components/Header/index'
import * as ROUTES from '../constants/Routes';
import logo from '../logo.svg';

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer



