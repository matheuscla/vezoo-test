import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

function Loading() {
  return(
    <Container>
      <Loader
        color='#fff'
        type='TailSpin'
        height={60}
        width={60}
      />
      <span>Loading</span>
    </Container>
  );
}

export default Loading;