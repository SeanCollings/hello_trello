import axios from 'axios';
import { TRELLO_BOARD_ENDPOINT } from '../constants';

const cardController = async (req, res) => {
  try {
    const { id, title } = req.body;
    const endpoint = `${TRELLO_BOARD_ENDPOINT}/cards?name=${title}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}&idList=${id}`;

    const { data } = await axios.post(endpoint);

    res.send({ card: data });
  } catch (err) {
    console.log('ERROR::', err.message);
    res.status(500).send({ message: err.message });
  }
};

export default [cardController];
