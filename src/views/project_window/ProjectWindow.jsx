import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: (props) => props.drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: (props) => props.drawerWidth,
    // transition: theme.transitions.create("width", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  drawerClose: {
    // transition: theme.transitions.create("width", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    overflowX: "hidden",
    width: 0,
    // width: theme.spacing(6) + 1,
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(9) + 1,
    // },
  },
  drawerPaddingLeft: {
    paddingLeft: "3em",
  },
}));

function ProjectWindow(props) {
  const classes = useStyles(props);

  const { drawerOpen } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
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
    </div>
  );
}

export default ProjectWindow;
