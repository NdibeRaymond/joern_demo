import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WindowWrapper from './views/WindowWrapper';
import Project from './views/project/Project';
import EditorWindow from './views/editor_window/EditorWindow';

function App(props) {
  return (
    <Router>
<Switch>
  <Route
    exact={true}
    path=""
    render={routeProps => (
      <WindowWrapper {...routeProps} {...props}>
        <Project {...routeProps} {...props} />
        <EditorWindow {...routeProps} {...props}/>
      </WindowWrapper>
    )}
  />
</Switch>
</Router>
  );
}

export default App;
