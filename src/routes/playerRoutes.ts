import { Router } from 'express';
import { getPlayersSortedByRank, getPlayerById, getStatistics } from '../controllers/playerController';
const router = Router();

router.get('/api/v1/players', getPlayersSortedByRank);
router.get('/api/v1/players/:id', getPlayerById);
router.get('/api/v1/players/statistics', getStatistics);

export default router;
