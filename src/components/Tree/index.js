import React from 'react';
import Folder from '../Folder';
import File from '../File';

import { Container } from './styles';

function Tree({ data }) {
  const RenderTree = ({ content }) => {
    return content && content.map(item => {
      if (item.isDirectory) {
        return(
          <Folder key={item.id} name={item.name}>
            <RenderTree content={item.children} />
          </Folder>
        );
      }
  
      return <File key={item.id} name={item.name} />
    });
  }

  return(
    <Container>
      <RenderTree content={data} />
    </Container>
  );
}

export default Tree;