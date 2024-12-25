import React from 'react';
import {NavBar} from 'nav-bar';
import links from './data/links';

const App = () => {
  return (
    <div>
      <NavBar links={links} />
    </div>
  );
};

export default App;