import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';
import { Link } from 'react-router-dom';
import { useTrelloContext } from '../hooks/use-trello-context';

const SHeaderContainer = styled.div`
  background: ${COLORS.secondary};
  position: fixed;
  height: 4rem;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 4px 0px darkgrey;
`;
const SLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
  padding: 0 1.5rem;
  color: white;
  font-size: 20px;
  &:active {
    color: ${COLORS.background};
  }
`;
const SHeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SBoardNameContainer = styled.div`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 1.5rem;
  display: flex;
  align-items: center;
`;
const SBoardName = styled.div`
  color: white;
`;

const Header = () => {
  const {
    state: { activeBoard },
  } = useTrelloContext();

  return (
    <SHeaderContainer>
      <SHeaderContents>
        <SLink to="/">Home</SLink>
        <SBoardNameContainer>
          {activeBoard && <SBoardName>{activeBoard.name}</SBoardName>}
        </SBoardNameContainer>
      </SHeaderContents>
    </SHeaderContainer>
  );
};

export default Header;
