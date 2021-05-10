// import {
//   CssBaseline,
//   Container,
//   AppBar,
//   Toolbar,
//   ClickAwayListener,
//   Typography,
//   useScrollTrigger,
//   Box,
//   IconButton,
//   OutlinedInput,
//   InputAdornment,
//   FormControl,
//   InputLabel,
//   Fab,
//   Zoom,
//   Menu,
//   MenuItem,
//   Avatar,
//   Select,
// } from '@material-ui/core';

// import CustomButton from '../components/button/Button.js';
// import LoadingPage from './loading/LoadingPage';
// import * as AuthActions from '../store/actions/authActions';
// import unstructuredLogo from '../assets/images/logos/unstructured-logo.png';
// import logo from '../assets/images/logos/logo.png';

import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";

// import styles from "../assets/js/styles/views/page_wrapper/pageWrapperStyles";
import commonStyles from "../assets/js/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerDefault: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "49px",
  },
  drawerDefaultListItemStyle: {
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,
    "& .MuiListItemIcon-root": {
      minWidth: 0,
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(6) + 1,
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(9) + 1,
    // },
  },
  drawerPaddingLeft: {
    paddingLeft: "3em",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  connectionStatusStyle: {
    height: "2.5em",
    width: "13em",
    position: "fixed",
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    border: "1px solid gray",
  },
}));

function WindowWrapper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <List className={classes.drawerPaddingLeft}>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx({
              [classes.drawerDefault]: true,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerToggle}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem
                button
                key={text}
                className={classes.drawerDefaultListItemStyle}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      {props.children}
      <div className={classes.connectionStatusStyle}>
        <h3>Connected</h3>
        <div class="ring-container">
          <div class="ringring"></div>
          <div class="circle"></div>
        </div>
      </div>
    </>
  );
}

export default WindowWrapper;
