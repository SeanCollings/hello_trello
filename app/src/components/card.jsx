import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';

const SCardContainer = styled.div`
  font-size: 14px;
  box-shadow: 0 2px 4px 0px ${COLORS.text};
  padding: 1rem;
  background: white;
  border-radius: 4px;
  color: ${COLORS.text};
  margin: 1rem;
`;

const Card = ({ card }) => {
  const { name } = card;
  return <SCardContainer>{name}</SCardContainer>;
};

export default Card;
