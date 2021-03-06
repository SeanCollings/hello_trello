import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../constants';
import { useTrelloContext } from '../hooks/use-trello-context';
import { cleanActiveBoard } from '../state/action-creators/trello-action';

const SBoardContainer = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background: ${({ backgroundColor }) => backgroundColor || COLORS.secondary};
  background-image: ${({ backgroundImage }) =>
    `url('${backgroundImage}')` || 'none'};
  box-shadow: 0 2px 4px 0px ${COLORS.text};
  margin: 0 0.5rem 1rem;
  cursor: pointer;
  user-select: none;

  transition: transform 0.1s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const SCardName = styled.div`
  color: white;
  font-weight: bold;
  padding: 0.5rem;
`;

const Board = ({ board }) => {
  const history = useHistory();
  const { dispatch } = useTrelloContext();
  const { name, prefs, id } = board;

  const handleBoardClick = () => {
    cleanActiveBoard(dispatch);
    history.push(id);
  };

  return (
    <SBoardContainer
      backgroundColor={prefs?.backgroundColor}
      backgroundImage={prefs?.backgroundImage}
      onClick={handleBoardClick}
    >
      <SCardName>{name}</SCardName>
    </SBoardContainer>
  );
};

export default Board;
