import React, { useEffect } from 'react';
import { SContainer } from '../styled';
import {
  getActiveBoard,
  setLoading,
} from '../../state/action-creators/trello-action';
import { useTrelloContext } from '../../hooks/use-trello-context';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import TrelloList from '../trello-list';

const SListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const SLoading = styled.div`
  text-align: center;
  color: ${COLORS.text};
`;

const BoardPage = () => {
  let { id } = useParams();
  const { state, dispatch } = useTrelloContext();
  const { loading, activeBoard } = state;

  const getActiveBoardHandler = async () => {
    getActiveBoard(id, dispatch);
  };

  useEffect(() => {
    if (!activeBoard) {
      getActiveBoardHandler();
      setLoading(dispatch, true);
    }
  }, [activeBoard]);

  return (
    <SContainer>
      {loading && <SLoading>Loading...</SLoading>}
      {!!activeBoard?.length && (
        <SListContainer>
          {activeBoard.map((list) => (
            <TrelloList key={list.id} list={list} />
          ))}
        </SListContainer>
      )}
    </SContainer>
  );
};

export default BoardPage;
