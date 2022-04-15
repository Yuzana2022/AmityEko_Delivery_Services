import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Routes from './navigation/Routes';
import { setItem, getItem } from './components/auth/LocalStorage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface IProps {
  path: string;
}

type AppProps = IProps & RouteComponentProps;

interface AppStates {
  isBusy: boolean;
  isAuth: boolean;
  password: string;
  user: string;
  error: boolean;
}


const theme = createTheme({
  palette: {
    primary: {
      main: '#E39435',
    },
  },
});
class App extends React.Component<AppProps, AppStates> {
 public menu_toggle : boolean = false;
  constructor(props: AppProps) {
    super(props);
    this.state = { isBusy: false, isAuth: true, user: '', password: '', error: false };

    setItem('isAuth','true');
  }

  componentDidMount() {
    if (getItem('isAuth') === 'true') {
      this.setState({ isAuth: false })
    }
  }

  render() {
    const { isBusy, isAuth, error }: AppStates = this.state;
    // return <ThemeProvider theme={theme}><Routes data-test="app" /></ThemeProvider>;
    return <Routes data-test="app" />;
  }
}

export default withRouter(
  App
);