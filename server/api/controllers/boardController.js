import axios from 'axios';
import { TRELLO_BOARD_ENDPOINT } from '../constants';

const getCards = async (id) => {
  try {
    const { data } = await axios.get(
      `${TRELLO_BOARD_ENDPOINT}/lists/${id}/cards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`
    );

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const boardController = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios.get(
      `${TRELLO_BOARD_ENDPOINT}/boards/${id}/lists?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`
    );

    if (data) {
      const lists = await Promise.all(
        data.map(async (list) => ({
          ...list,
          cards: await getCards(list.id),
        }))
      );
      return res.send({ lists });
    }

    return res.send({ lists: null });
  } catch (err) {
    console.log('ERROR::', err.message);
    res.status(500).send({ message: err.message });
  }
};

export default [boardController];
