import React from 'react';

import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage';
import CalculatePage from '../components/pages/DeliCostCal';
import LoginPage from '../screens/LoginPage';
import OTPPage from '../screens/OTPPage';
import SignupPage from '../screens/SignUp';
import styles from '../styles/pages.module.css';
import styleHeader from '../styles/header.module.css';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from '../containers/side-menu';

import { MenuDataInterFace } from '../stores/interfaces/menu.interface';
import { StoreState } from '../stores/reducers/index';
import { connect } from 'react-redux';

import { ToggleMenuACT } from '../stores/actions/menuAction';
import { Box } from '@mui/material';

import { HeaderDataInterFace } from '../stores/interfaces/header.interface';
import { HeaderOpenACT } from '../stores/actions/HeaderAction';
import { NavOpenACT } from '../stores/actions/NavigatorAction';
import { NavigatorDataInterFace } from '../stores/interfaces/navigator.interface';

//components
import Header from '../containers/header';

//platform test
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export const pageEndpoint: { [key: string]: string } = {
  main: '',
  CalculatePage: 'calculate',
  LoginPage: 'login',
  SignupPage: 'signup',
  OTPPage: 'otp',
  noMatch: '*'
};

let propsLandingPage = {
  route: `/${pageEndpoint.main}`,
  menu: [
    { id: 0, title: 'Towns', icon: 'LocationCityIcon', route: `/${pageEndpoint.main}` },
    { id: 1, title: 'Delivery Cost Caculator', icon: 'CalculateIcon', route: `/${pageEndpoint.CalculatePage}` },
  ],
  content: "LandingPage"
};

let propsCalculatePage = {
  route: `/${pageEndpoint.main}`,
  menu: [
    { id: 0, title: 'Towns', icon: 'LocationCityIcon', route: `/${pageEndpoint.main}` },
    { id: 1, title: 'Delivery Cost Caculator', icon: 'CalculateIcon', route: `/${pageEndpoint.CalculatePage}` },
  ],
  content: "CalculatePage"
};

const routes = [
  {
    path: `/${pageEndpoint.main}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <Header />
      </React.Fragment>
    ),
    navigator: () => (
      <React.Fragment>
      {SideMenuFunc(propsLandingPage)}
    </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <LandingPage {...propsLandingPage} />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.CalculatePage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <Header />
      </React.Fragment>
    ),
    navigator: () => (
      <React.Fragment>
      {SideMenuFunc(propsCalculatePage)}
    </React.Fragment>
    ),
    main: () => (
      <React.Fragment>
        <CalculatePage {...propsCalculatePage} />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.SignupPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <Header />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <SignupPage />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.LoginPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <Header />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <LoginPage />
      </React.Fragment>
    ),
  },
  {
    path: `/${pageEndpoint.OTPPage}`,
    exact: true,
    header: () => (
      <React.Fragment>
        <Header />
      </React.Fragment>
    ),
    navigator: () => (
      <></>
    ),
    main: () => (
      <React.Fragment>
        <OTPPage />
      </React.Fragment>
    ),
  }
]

const SideMenuFunc = (param: any) => {
  return <SideMenu routeParam={param} />;
}

const Routes = (props: any) => {
  const toggleDrawer = () => {
    props.ToggleMenuACT(!props.open.open);
    props.NavOpenACT(true);
  }

  const content = () => {
    if (props.headerOpen.headerOpen) {
      return <div id="content" className={styles.send_content_header}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.navigator />}
            />
          ))}
        </Switch>
        <div>
          {main()}
        </div>
      </div>;
    } else {
      return <div id="content" className={styles.send_content_no_header}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.navigator />}
            />
          ))}
        </Switch>
        <div>
          {main()}
        </div>
      </div>;
    }
  }

  const main = () => {
    if (props.navOpen.navOpen) {
      return <div className={styleHeader.send_content_div}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>;
    } else {
      return <div className={styleHeader.send_content_div_full}>
        <div>
          {humburger()}
        </div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>;
    }
  }

  const humburger = () => {
    if (!props.open.open)
      return <Box sx={{ width: 1350, textAlign: 'left' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ ml: 0.5, flexGrow: 1 }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Box>;
    else
      return <></>;
  }

  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <div className={styles.primary_font}>
          <div id="main">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.header />}
                />
              ))}
            </Switch>
          </div>
          <div className={styles.content}>
            <div className='container-fluid'>
              {content()}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = ({
  menuState, headerState, navState
}: StoreState): { open: MenuDataInterFace; headerOpen: HeaderDataInterFace; navOpen: NavigatorDataInterFace } => {
  return {
    open: menuState,
    headerOpen: headerState,
    navOpen: navState
  };
};

export default connect(mapStateToProps, {
  ToggleMenuACT, HeaderOpenACT, NavOpenACT
})(Routes);
