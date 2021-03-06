import {
  CLEAN_ACTIVE_BOARD,
  SET_ACTIVE_BOARD,
  SET_BOARDS,
  SET_LOADING,
  UPDATE_CARD,
} from '../action-types';

export default (state, action) => {
  switch (action.type) {
    case SET_BOARDS:
      return { ...state, boards: action.payload, loading: false };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ACTIVE_BOARD:
      return { ...state, activeBoard: action.payload, loading: false };
    case UPDATE_CARD:
      const updatedBoard = state.activeBoard.map((list) => {
        const updatedCards = [...list.cards];
        if (list.id === action.payload.idList) {
          updatedCards.push(action.payload);
        }

        return { ...list, cards: updatedCards };
      });

      return { ...state, activeBoard: updatedBoard, loading: false };
    case CLEAN_ACTIVE_BOARD:
      return { ...state, activeBoard: null };

    default:
      return state;
  }
};
