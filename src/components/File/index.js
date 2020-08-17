import React from 'react';
import { DiJava } from 'react-icons/di';
import { useDispatch } from 'react-redux';

import { getFile } from '../../store/ducks/editor';

import { Container, Name } from './styles';

function File({ name, id }) {
  const dispatch = useDispatch();

  return(
    <Container onClick={() => dispatch(getFile(id))}>
      <DiJava />
      <Name>{name}</Name>
    </Container>
  );
}

export default File;