import React from 'react'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

// app bar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import stylesHeader from '../styles/header.module.css';

//layout
import { StoreState } from '../stores/reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../stores/interfaces/menu.interface';
import { HeaderDataInterFace } from '../stores/interfaces/header.interface';
import { NavigatorDataInterFace } from '../stores/interfaces/navigator.interface';
import { ToggleMenuACT } from '../stores/actions/menuAction';
import { HeaderOpenACT } from '../stores/actions/HeaderAction';
import { NavOpenACT } from '../stores/actions/NavigatorAction';

//image
import LogoIcon from '../assets/images/amity-logo.svg';

const Header = (props: any) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        props.NavOpenACT(true);

    };
    return (
        <>
            <Box>
                <AppBar position="static" className={stylesHeader.header}>
                    <Toolbar>
                        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }} align="left">
                            <img src={LogoIcon} alt="Logo" className={stylesHeader.landing_logoStyle} />
                        </Typography>
                        <Typography variant="body2" mr={1} mt={1} component="div" gutterBottom>
                            <span className={stylesHeader.cursor}>Language</span>
                        </Typography>

                        <Typography variant="body2" component="div" mr={1} mt={1} gutterBottom onClick={handleClick}>
                            <Link to="/login" id="link_01">
                                <span className={stylesHeader.cursor}>Login / Signup</span>
                            </Link>
                        </Typography>

                        <Typography variant="body2" mt={1} component="div" gutterBottom >
                            <span className={stylesHeader.cursor}>Help</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
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
})(Header);