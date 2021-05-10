import React from "react";
import clsx from 'clsx';
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { nanoid } from "nanoid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  TerminalStyle: {
    width: "100%",
    // height: "100px",
    backgroundColor: "black",
    paddingLeft: (props) =>
      `calc(${
        props.drawerOpen ? props.drawerWidth : props.sideNavWidth
      } + 10px)`,
    paddingTop: "10px",
    position: "absolute",
    right: 0,
    bottom: 0,
    "& .xterm .xterm-viewport": {
      overflowY: "hidden",
    }
  },
  terminalOpen: {
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height:"auto",
  },
  terminalClose: {
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height:0,
    display:"hidden"
  }
}));

function TerminalWindow(props) {
  const classes = useStyles(props);
  const terminalRef = React.useRef(null);

  const [state, setState] = React.useState({
    Instances: {},
  });

  const {terminalOpen} = props;

  React.useEffect(() => {
    if (terminalRef) {
      const { instances } = state;
      const term = new Terminal({ rows: 20 });
      term.open(terminalRef.current);


      //   term.cursorBlink = true;

      let shellprompt = "$ ";

      term.prompt = function () {
        term.write("\r\n" + shellprompt);
      };
      term.writeln("Welcome to xterm.js");
      term.writeln(
        "This is a local terminal emulation, without a real terminal in the back-end."
      );
      term.writeln("Type some keys and commands to play around.");
      term.writeln("");
      term.prompt();

      //   term.onKey((ev) => {
      //     console.log(ev);
      //     let printable =
      //       !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

      //     if (ev.keyCode == 13) {
      //       term.prompt();
      //     } else if (ev.keyCode == 8) {
      //       // Do not delete the prompt
      //       if (term.x > 2) {
      //         term.write("\b \b");
      //       }
      //     } else if (printable) {
      //       term.write(ev.key);
      //     }
      //   });

      term.onData((data, ev) => {
        term.write(data);
      });

      handleSetState({
        instances: { ...instances, [nanoid()]: term },
      });
    }
  }, [terminalRef]);

  const handleSetState = (obj) => {
    if (obj) {
      Promise.resolve(obj).then((obj) => {
        setState((state) => ({ ...state, ...obj }));
      });
    }
  };

  return <div ref={terminalRef} className={clsx(classes.TerminalStyle, {
    [classes.terminalOpen]: terminalOpen,
    [classes.terminalClose]: !terminalOpen,
  })}></div>;
}

export default TerminalWindow;
