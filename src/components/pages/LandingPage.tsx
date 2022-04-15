import React from 'react'

// import component 👇

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import styles from '../../styles/pages.module.css';
import styleHeader from '../../styles/header.module.css';

// app bar
import Typography from '@mui/material/Typography';

import { StoreState } from '../../stores/reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../../stores/interfaces/menu.interface';
import { HeaderDataInterFace } from '../../stores/interfaces/header.interface';
import { NavigatorDataInterFace } from '../../stores/interfaces/navigator.interface';
import { ToggleMenuACT } from '../../stores/actions/menuAction';
import { HeaderOpenACT } from '../../stores/actions/HeaderAction';
import { NavOpenACT } from '../../stores/actions/NavigatorAction';

//list
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// fetch data
import towns from '../datas/towns';

//icons
import LocationCityIcon from '@mui/icons-material/LocationCity';

const LandingPage = (props: any) => {
  const [type, setType] = React.useState('consumer')

  if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);

  return (
    <>
      <div className={styles.screen}>
        <Typography className={styles.send_typography}
          variant="subtitle1"
          p={1}
          component="div"
          sx={{ flexGrow: 1 }}
          align="left"
        >
          Available Towns List in Thailand
        </Typography>
        <List>
          {towns.map((town: any) => (
              <div className={styleHeader.send_selected_menu}>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationCityIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2" component="div">
                      {town.name}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </div>
          ))}
        </List>
        <div>
        </div>
      </div>
    </>
  )
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
})(LandingPage);