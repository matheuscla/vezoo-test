import React from 'react';
import { DiJava } from 'react-icons/di';

import { Container, Name } from './styles';

function File({ name }) {
  return(
    <Container>
      <DiJava />
      <Name>{name}</Name>
    </Container>
  );
}

export default File;