import React from 'react';
import Tree from './components/Tree';

import { SideMenu, Title } from './styles/components';

function App() {
  return (
    <>
      <SideMenu>
        <Title>Online Editor</Title>
        <Tree />
      </SideMenu>
    </>
  );
}

export default App;
