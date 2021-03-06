import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';
import { useTrelloContext } from '../hooks/use-trello-context';
import { addCardToBoard } from '../state/action-creators/trello-action';
import Card from './card';
import Modal from './modal';

const SListContainer = styled.div`
  min-width: calc(50% - 4rem);
  height: 100px;
  border-radius: 4px;
  background: ${COLORS.card};
  margin: 0 0.5rem 1rem;
  padding: 1rem;
  display: table;
`;
const SHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SListName = styled.div`
  color: ${COLORS.text};
  font-weight: bold;
  padding: 0.5rem;
  padding-left: 0;
`;
const SButton = styled.button`
  border: none;
  background: ${COLORS.primary};
  color: white;
  width: 60px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  &:hover {
    filter: brightness(85%);
  }
`;
const SCardsContainer = styled.div``;

const List = ({ list }) => {
  const { dispatch } = useTrelloContext();
  const [showModal, setShowModal] = useState(false);
  const { name, cards, id } = list;

  const handleConfirmModal = (title) => {
    setShowModal(false);
    if (!!title.length) {
      addCardToBoard(id, title, dispatch);
    }
  };

  return (
    <SListContainer>
      <SHeaderContainer>
        <SListName>{name}</SListName>
        <SButton onClick={() => setShowModal(true)}>+ Add</SButton>
      </SHeaderContainer>
      <SCardsContainer>
        {(cards || []).map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </SCardsContainer>
      {showModal && (
        <Modal
          cancelModal={() => setShowModal(false)}
          confirmModal={handleConfirmModal}
        />
      )}
    </SListContainer>
  );
};

export default List;
