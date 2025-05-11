import { Router } from 'express';
import { getPlayersSortedByRank, getPlayerById, getStatistics } from '../controllers/playerController';
const router = Router();

router.get('/players', getPlayersSortedByRank);
router.get('/players/:id', getPlayerById);
router.get('/players/statistics', getStatistics);

export default router;
