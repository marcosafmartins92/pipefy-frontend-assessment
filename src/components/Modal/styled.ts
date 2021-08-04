import styled, { css, keyframes } from 'styled-components';

const openWrapper = keyframes`
  from{ opacity: 0; bottom: 0; top: 100% }
  to{ opacity: 1; bottom: 10%; top: 10% }
`;

export const Backdrop = styled.section`
  background: rgba(0, 0, 0, .3);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
`;

export const Wrapper = styled.section`
  position: fixed;
  top: 10%;
  left: 10%;
  right: 10%;
  background: white;
  z-index: 3;
  padding: 70px 30px 30px 30px;
  border-radius: 20px;
  animation: ${openWrapper} 1s forwards;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 17px;
  right: 34px;
  background: transparent;
  border: none;
  font-size: 26px;
  height: 35px;
  width: 35px;
  cursor: pointer;
`