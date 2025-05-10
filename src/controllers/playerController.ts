import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../utils/database';
import { Player } from '../entities/Player';
import { PlayerService } from '../services/PlayerService';
import { StatisticsService } from '../services/StatisticsService';

const playerRepository = AppDataSource.getRepository(Player);
const statisticsService = new StatisticsService();
const playerService = new PlayerService(playerRepository, statisticsService);

export const getPlayersSortedByRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const players = await playerService.getPlayersSortedByRank();
    res.json(players);
  } catch (error) {
    next(error);
  }
};

export const getPlayerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const player = await playerService.getPlayerById(Number(req.params.id));
    if (!player) {
      res.status(404).json({ error: 'Player not found' });
      return;
    }
    res.json(player);
  } catch (error) {
    next(error);
  }
};

export const getStatistics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const statistics = await playerService.getStatistics();
    res.json(statistics);
  } catch (error) {
    next(error);
  }
};
