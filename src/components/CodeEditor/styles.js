import styled from 'styled-components';

export const Header = styled.div`
  padding: 20px;
  color: #fff;
  background: rgb(67, 70, 85);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Actions = styled.div`
  display: flex;
`

const BaseBtn = styled.button`
  border-radius: 4px;
  border: 0;
  width: 120px;
  height: 30px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Save = styled(BaseBtn)`
  background: #4ABD5F;
  margin-right: 16px;
`

export const Delete = styled(BaseBtn)`
  background: #D64848;
`