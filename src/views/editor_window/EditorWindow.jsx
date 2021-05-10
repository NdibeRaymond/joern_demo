import React from "react";
import MonacoEditor from "react-monaco-editor";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  editorContainerStyle: {
    position:"fixed",
    width: "100%",
    height:"100%",
    paddingLeft: (props) =>
      props.drawerOpen ? props.drawerWidth : props.sideNavWidth,
  },
}));

function EditorWindow(props) {
  const classes = useStyles(props);

  const [state, setState] = React.useState({
    code: "// type your code...",
  });

  const editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
    editor.focus();
  };
  const onChange = (newValue, e) => {
    console.log("onChange", newValue, e);
  };

  const { code } = state;
  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  return (
    <div className={classes.editorContainerStyle}>
      <MonacoEditor
        width="100%"
        height="100vh"
        theme="vs-dark"
        language="javascript"
        // value={code}
        defaultValue={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
}

// class EditorWindow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: "// type your code...",
//     };
//   }

//   render() {
//     const code = this.state.code;
//     const options = {
//       selectOnLineNumbers: true,
//       roundedSelection: false,
//       readOnly: false,
//       cursorStyle: "line",
//       automaticLayout: false,
//     };
//     return (
//       <div className={classes.editorContainerStyle}>
//       <MonacoEditor
//         width="100%"
//         height="100vh"
//         theme="vs-dark"
//         language="javascript"
//         // value={code}
//         defaultValue={code}
//         options={options}
//         onChange={this.onChange}
//         editorDidMount={this.editorDidMount}
//       />
//       </div>
//     );
//   }
// }

export default EditorWindow;
