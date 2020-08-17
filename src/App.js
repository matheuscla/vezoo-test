import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Tree from './components/Tree';

import mock from './mock.json'

import { SideMenu, Title } from './styles/components';

function App() {
  return (
    <Provider store={store}>
      <SideMenu>
        <Title>Online Editor</Title>
        <Tree data={mock} />
      </SideMenu>
    </Provider>
  );
}

export default App;
