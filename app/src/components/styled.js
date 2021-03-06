import styled from 'styled-components';
import { COLORS } from '../constants';

export const SContainer = styled.div`
  margin: 0 1rem 1rem;
`;

export const SHeading = styled.div`
  padding-bottom: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${COLORS.text};
`;

export const SButton = styled.button`
  background: ${({ colour }) => colour || '#94dcff'};
  padding: 0.5rem;
  min-width: 8rem;
  border: 1px solid #a7a7a7;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  box-shadow: 0 2px 7px -4px #9a9a9a;

  &:hover {
    filter: brightness(85%);
  }
`;
