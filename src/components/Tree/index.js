import React from 'react';
import Folder from '../Folder';
import File from '../File';

import { Container } from './styles';

function Tree({ data }) {
  const RenderTree = ({ data }) => {
    return data && data.map(item => {
      if (item.isDirectory) {
        return(
          <Folder name={item.name}>
            <RenderTree data={item.children} />
          </Folder>
        );
      }
  
      return <File name={item.name} />
    })
  }

  return(
    <Container>
      <RenderTree data={data} />
    </Container>
  );
}

export default Tree;