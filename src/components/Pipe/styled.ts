import styled, { css } from 'styled-components';

export const Card = styled.section`
  height: 140px;
  width: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  margin: 0 30px 30px;
  border: 1px solid lightgray;
  cursor: pointer;
    ${({bgColor}: {bgColor: string}) => css`
    background-color: ${bgColor}
  `}
`;

export const CardsCount = styled.span`
  font-size: .8rem;
`