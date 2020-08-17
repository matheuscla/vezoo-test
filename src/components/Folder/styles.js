import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 16px;
  margin-bottom: 8px;
`

export const Name = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 4px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Collapsible = styled.div`
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
`