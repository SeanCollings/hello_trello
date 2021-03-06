import React, { createContext, useReducer } from 'react';
import trelloReducer from '../reducers/trello-reducer';

const initialState = {
  boards: [],
  activeBoard: null,
  loading: false,
};

export const TrelloContext = createContext({
  state: initialState,
  dispatch: () => {},
});

export default ({ children }) => {
  const [state, dispatch] = useReducer(trelloReducer, initialState);

  return (
    <TrelloContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </TrelloContext.Provider>
  );
};
