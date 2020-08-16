import React from 'react';
import Folder from '../Folder';

import { Container } from './styles';

function Tree({ data }) {
  return(
    <Container>
      <Folder name='public' />
    </Container>
  );
}

export default Tree;