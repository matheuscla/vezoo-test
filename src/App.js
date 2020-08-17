import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tree from './components/Tree';
import CodeEditor from './components/CodeEditor';

import { getTree } from './store/ducks/editor';

import { Container, Content, SideMenu, Title } from './styles/components';

function App() {
  const dispatch = useDispatch();
  const { tree } = useSelector(state => state.editor);

  useEffect(() => {
    dispatch(getTree());
  }, [dispatch])

  return (
    <Container>
      <SideMenu>
        <Title>Online Editor</Title>
        <Tree data={tree} />
      </SideMenu>
      <Content>
        <CodeEditor />
      </Content>
    </Container>
  );
}

export default App;
