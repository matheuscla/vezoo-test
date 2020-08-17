import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tree from './components/Tree';

import { getTree } from './store/ducks/editor';

import { SideMenu, Title } from './styles/components';

function App() {
  const dispatch = useDispatch();
  const { tree } = useSelector(state => state.editor);

  useEffect(() => {
    dispatch(getTree());
  }, [dispatch])

  return (
    <>
      <SideMenu>
        <Title>Online Editor</Title>
        <Tree data={tree} />
      </SideMenu>
    </>
  );
}

export default App;
