import React from 'react';
import Folder from '../Folder';
import File from '../File';

import { Container } from './styles';

const RenderTree = ({ content }) => {
  return content && content.map(item => {
    if (item.isDirectory) {
      return(
        <Folder key={item.id} name={item.name}>
          <RenderTree content={item.children} />
        </Folder>
      );
    }

    return <File key={item.id} id={item.id} name={item.name} />
  });
}

function Tree({ data }) {
  return(
    <Container>
      <RenderTree content={data} />
    </Container>
  );
}

export default Tree;