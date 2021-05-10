import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WindowWrapper from './views/WindowWrapper';
import Window from './views/window/Window';

function App(props) {
  return (
      <WindowWrapper {...props}>
        <Window {...props} />
      </WindowWrapper>
  );
}

export default App;
