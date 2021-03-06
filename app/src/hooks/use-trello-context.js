import { useContext } from 'react';
import { TrelloContext } from '../state/context/trello-context';

export const useTrelloContext = () => useContext(TrelloContext);
