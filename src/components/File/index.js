import React from 'react';

import { Container } from './styles';

function File({ name }) {
  return(
    <Container>
      {name}
    </Container>
  );
}

export default File;