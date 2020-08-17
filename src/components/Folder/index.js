import React, { useState } from 'react'
import { AiOutlineFolder } from 'react-icons/ai';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';

import { Container, Name, Content, Collapsible } from './styles';

function Folder({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return(
    <Container>
      <Content onClick={handleCollapse}>
        {isOpen ?  <RiArrowDownSLine /> : <RiArrowRightSLine />}
        <AiOutlineFolder />
        <Name>{name}</Name>
      </Content>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </Container>
  )
}

export default Folder;