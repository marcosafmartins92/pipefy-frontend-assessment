import React, { useEffect, useMemo, memo, FC } from 'react';
import { client, GET_PIPES_QUERY, GET_ALL_CARDS_QUERY } from '../../services/ApolloService'
import { ApolloProvider, useQuery } from '@apollo/client';
import PipeType from '../../types/Pipe';
import * as Styled from './styled';
import generateRandomColor from '../../helpers/generateRandomColor'
import useModal from '../../hooks/useModal'
import Modal from '../Modal'

const Pipe: FC<PipeType> = ({ id, icon, image, name }) => {
  const { loading: loadingCards, error: errorCards, data: dataCards } = useQuery(GET_ALL_CARDS_QUERY, {
    variables: { pipeId: id }
  });

  const color = useMemo(() => generateRandomColor(), []);
  const cardsCount = useMemo(() => (dataCards?.cards.edges.length || 0), [dataCards]);
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <>
      <Styled.Card data-id={`pipe-card-${id}`} bgColor={color} onClick={openModal}>
        <i data-testid='icon' className={icon}></i>
        <strong data-testid='name'>{name} </strong>
        <Styled.CardsCount data-testid='cards-count'>{cardsCount} cards</Styled.CardsCount>
      </Styled.Card>
      {isOpen && <Modal onCancel={closeModal}>
        <section data-id={`pipe-modal-${id}`}>
          <ul>
            <h2>Infos:</h2>
            <ul>
              <li><strong>Id:</strong> {id}</li>
              <li><strong>Icon name:</strong> {icon}</li>
              <li><strong>Image name:</strong> {image}</li>
              <li><strong>Name:</strong> {name}</li>
              <li><strong>Cards count:</strong> {cardsCount}</li>
              <li><strong>Color </strong>HEX: {color}</li>
            </ul>
          </ul>
        </section>

      </Modal>}
    </>
  );
}

export default memo(Pipe);
