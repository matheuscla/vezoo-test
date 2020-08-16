import React from 'react'

import { Container, Name } from './styles';

function Folder({ name }) {
  return(
    <Container>
      <Name>{name}</Name>
    </Container>
  )
}

export default Folder;