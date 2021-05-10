import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

  return (
    <>
      {props.children}
      <div className={classes.connectionStatusStyle}>
        <h3>Connected</h3>
        <div className="ring-container">
          <div className="ringring"></div>
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
}

export default WindowWrapper;
