import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
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
import SettingsIcon from "@material-ui/icons/Settings";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import TerminalIcon from "../../assets/image/js/TerminalIcon";

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

  drawerDefault: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: (props) => props.SideNavWidth,
    "& ul": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        "& .navTopSection": {
          flexGrow: 1
        }
    }
  },
  drawerDefaultListItemStyle: {
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,
    "& .MuiListItemIcon-root": {
      minWidth: 0,
    },
  },
  customIconStyle: {
    fill: theme.palette.text.secondary,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

function SideNav(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    props.handleSetState({ drawerOpen: !props.drawerOpen });
  };

  const handleTerminalToggle = ()=> {
    props.handleSetState({ terminalOpen: !props.terminalOpen})
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

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
          <div  className="navTopSection">
          <ListItem button className={classes.drawerDefaultListItemStyle}>
            <ListItemIcon>
              <FileCopyIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button className={classes.drawerDefaultListItemStyle}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItem>
          </div>
          

          <ListItem
            button
            className={clsx(
              classes.drawerDefaultListItemStyle,
              classes.customIconStyle
            )}

            onClick={handleTerminalToggle}
          >
            <ListItemIcon>
              <TerminalIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button className={classes.drawerDefaultListItemStyle}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default SideNav;
