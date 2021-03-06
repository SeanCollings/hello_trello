import React, { useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import {
  getBoards,
  setLoading,
} from '../../state/action-creators/trello-action';
import { useTrelloContext } from '../../hooks/use-trello-context';
import Board from '../board';
import { SContainer, SHeading } from '../styled';

const SBoardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  cursor: pointer;
`;
const SLoading = styled.div`
  text-align: center;
  color: ${COLORS.text};
`;

const Home = () => {
  const { state, dispatch } = useTrelloContext();
  const { boards, loading } = state;

  const getTrelloHandler = async () => {
    await getBoards(dispatch);
    setLoading(dispatch, false);
  };

  useEffect(() => {
    !boards.length && getTrelloHandler();
  }, [boards]);

  return (
    <SContainer>
      <SHeading>Your Boards</SHeading>
      {loading && <SLoading>Loading...</SLoading>}
      {!!boards.length && (
        <SBoardsContainer>
          {boards.map((board) => (
            <Board key={board.id} board={board} />
          ))}
        </SBoardsContainer>
      )}
    </SContainer>
  );
};

export default Home;
