import React from 'react';
import Tree from './components/Tree';

import mock from './mock.json'

import { SideMenu, Title } from './styles/components';

function App() {
  return (
    <>
      <SideMenu>
        <Title>Online Editor</Title>
        <Tree data={mock} />
      </SideMenu>
    </>
  );
}

export default App;
