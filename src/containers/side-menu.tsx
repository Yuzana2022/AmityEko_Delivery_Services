import React from 'react';
import {
    Container
} from "@mui/material";
import { makeStyles } from '@mui/styles';

//import styles 👇
import 'react-modern-drawer/dist/index.css';
import styleHeader from '../styles/header.module.css';

// app bar
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

//list
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//icons
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CalculateIcon from '@mui/icons-material/Calculate';

import { MenuDataInterFace } from '../stores/interfaces/menu.interface';
import { StoreState } from '../stores/reducers/index';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ToggleMenuACT } from '../stores/actions/menuAction';
import { NavOpenACT } from '../stores/actions/NavigatorAction';
import { NavigatorDataInterFace } from '../stores/interfaces/navigator.interface';
import { HeaderDataInterFace } from '../stores/interfaces/header.interface';
import { HeaderOpenACT } from '../stores/actions/HeaderAction';

//image
import LogoIcon from '../assets/images/amity-logo.svg';

const SideMenu = (props: any) => {
    const toggleDrawer = () => {
        props.ToggleMenuACT(false);
        props.NavOpenACT(false);
    }
    const [selectedMenu, setSelectedMenu] = React.useState(props.routeParam.selectedMenu ? props.routeParam.selectedMenu : props.routeParam.menu[0]);

    const handleClick = (menu: any) => {
        setSelectedMenu(menu);
        // props.history.push(menu.route);
    }

    const displayIcon = (icon: string) => {
        switch (icon) {
            case 'LocationCityIcon': {
                return <LocationCityIcon />;
                break;
            }
            case 'CalculateIcon': {
                return <CalculateIcon />;
                break;
            }
            default: {
                return <LocationCityIcon />;
                break;
            }
        }
    }
    if (props.open.open && props.routeParam.menu.length > 0 && props.navOpen.navOpen) {
        return (
            <div className={styleHeader.side_menu_style}>
                <div>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mb: 1, mt: 1 }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                <div>
                    <img src={LogoIcon} alt="Logo" className={styleHeader.imageStyle} />
                </div>

                <List>
                    {props.routeParam.menu.map((menu: any) => (
                        <>
                            {
                                selectedMenu.id == menu.id ? <div className={styleHeader.send_selected_menu}>
                                    <Link to={menu.route}>
                                        <ListItemButton className={styleHeader.send_cursor}
                                            onClick={() => handleClick(menu)}>
                                            <ListItemIcon>
                                                {displayIcon(menu.icon)}
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography variant="body2" component="div">
                                                    {menu.title}
                                                </Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                    </Link>

                                </div> : <div>
                                    <Link to={menu.route}>
                                        <ListItemButton className={styleHeader.send_cursor}
                                            onClick={() => handleClick(menu)}>
                                            <ListItemIcon>
                                                {displayIcon(menu.icon)}
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography variant="body2" component="div">
                                                    {menu.title}
                                                </Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                    </Link>
                                </div>
                            }
                        </>
                    ))}
                </List>

                <div className={styleHeader.footer}>
                    <div className={styleHeader.mb_15}>
                        <span>EN | CN</span>
                    </div>
                    <div className={styleHeader.mb_15}>
                        <span>Help</span>
                    </div>
                    <div className={styleHeader.mb_15}>
                        <span>Sign out</span>
                    </div>
                </div>

            </div>
        )
    }
    else return <></>;
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
})(SideMenu);