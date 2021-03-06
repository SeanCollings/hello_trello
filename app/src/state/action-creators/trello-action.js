import axios from 'axios';
import {
  API_URL,
  URI_GET_TRELLO,
  URI_GET_BOARD,
  URI_ADD_CARD,
} from '../../constants';
import {
  CLEAN_ACTIVE_BOARD,
  ERROR,
  SET_ACTIVE_BOARD,
  SET_BOARDS,
  SET_LOADING,
  UPDATE_CARD,
} from '../action-types';

export const setLoading = (dispatch, status) =>
  dispatch({ type: SET_LOADING, payload: status });

export const getBoards = async (dispatch) => {
  setLoading(dispatch, true);

  try {
    const { data } = await axios.get(`${API_URL}${URI_GET_TRELLO}`);

    if (data?.boards) {
      dispatch({
        type: SET_BOARDS,
        payload: data.boards,
      });
    }
  } catch (err) {
    console.log(ERROR, err.message);
  }
};

export const setActiveBoard = (board, dispatch) => {
  dispatch({
    type: SET_ACTIVE_BOARD,
    payload: board,
  });
};

export const getActiveBoard = async (id, dispatch) => {
  if (!id) {
    return dispatch({
      type: SET_ACTIVE_BOARD,
      payload: null,
    });
  }

  try {
    const { data } = await axios.get(`${API_URL}${URI_GET_BOARD}/${id}`);

    if (data?.lists) {
      return dispatch({
        type: SET_ACTIVE_BOARD,
        payload: data.lists,
      });
    }

    return dispatch({
      type: SET_ACTIVE_BOARD,
      payload: null,
    });
  } catch (err) {
    console.log(ERROR, err.message);
    return dispatch({
      type: SET_ACTIVE_BOARD,
      payload: null,
    });
  }
};

export const cleanActiveBoard = (dispatch) =>
  dispatch({
    type: CLEAN_ACTIVE_BOARD,
  });

export const addCardToBoard = async (id, title, dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}${URI_ADD_CARD}`, {
      id,
      title,
    });

    if (data?.card) {
      return dispatch({
        type: UPDATE_CARD,
        payload: data.card,
      });
    }
  } catch (err) {
    console.log(ERROR, err.message);
  }
};
