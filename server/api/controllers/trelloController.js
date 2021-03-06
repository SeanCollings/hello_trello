import axios from 'axios';
import { TRELLO_MEMBER_ENDPOINT } from '../constants';

const trelloController = async (req, res) => {
  try {
    const { data } = await axios.get(
      `${TRELLO_MEMBER_ENDPOINT}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`
    );

    res.send({ boards: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

export default [trelloController];
