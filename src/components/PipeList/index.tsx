import React from 'react';
import { GET_PIPES_QUERY } from '../../services/ApolloService'
import { useQuery } from "@apollo/client";
import Pipe from '../Pipe'
import PipeType from '../../types/Pipe';
import * as Styled from './styled';
import orderByName from '../../helpers/orderByName'

function PipeList() {
  const { loading: loadingPipes, error: errorPipes, data: dataPipes } = useQuery(GET_PIPES_QUERY, {
    variables: { limit: 10}
  });

  const orederedPipes = dataPipes?.pipe_templates ? [...dataPipes?.pipe_templates].sort(orderByName) : null;

  return (
    <Styled.Wrapper data-id='pipe-list'>
      {orederedPipes?.map((pipe: PipeType) => (
        <Pipe {...pipe} key={pipe.id}/>
      ))}
    </Styled.Wrapper>
  );
}

export default PipeList;
