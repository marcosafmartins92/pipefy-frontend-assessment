import React, { useEffect, useMemo, memo, FC, ReactElement } from 'react';
import { client, GET_PIPES_QUERY, GET_ALL_CARDS_QUERY } from '../../services/ApolloService'
import { ApolloProvider, useQuery } from '@apollo/client';
import PipeType from '../../types/Pipe';
import * as Styled from './styled';
import generateRandomColor from '../../helpers/generateRandomColor'
import useModal from '../../hooks/useModal'

const Modal: FC<{ onCancel: () => void, children: ReactElement }> = ({ children, onCancel }) => {

  return (
    <>
    <Styled.Backdrop data-id='backdrop' onClick={onCancel}></Styled.Backdrop>
    <Styled.Wrapper data-id='modal-wrapper'>
      {children}
    </Styled.Wrapper>
    </>
  );
}

export default memo(Modal);
