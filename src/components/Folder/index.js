import React from 'react'

import { Container, Name } from './styles';

function Folder({ name, children }) {
  return(
    <Container>
      <Name>{name}</Name>
      {children}
    </Container>
  )
}

export default Folder;