import { Router } from 'express';
import boardController from './controllers/boardController';
import trelloController from './controllers/trelloController';
import cardController from './controllers/cardController';

const router = Router();

router.get('/get_trello', trelloController);
router.get('/get_board/:id', boardController);
router.post('/add_card', cardController);

export default router;
